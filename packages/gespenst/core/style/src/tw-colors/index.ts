import Color from "color";
import flatten from "flat";
import forEach from "lodash.foreach";

import type {
  FlatColors,
  HslaArray,
  MaybeNested,
  NestedColors,
  Resolved,
  ResolvedUtilities,
  TwcConfig,
  TwcOptions,
} from "./types";

export const SCHEME = Symbol("color-scheme");
const emptyConfig: TwcConfig = {};

export const resolveTwcConfig = <ThemeName extends string>(
  config: TwcConfig<ThemeName> = emptyConfig,
  {
    defaultTheme,
    produceCssVariable = defaultProduceCssVariable,
    produceThemeClass = defaultProduceThemeClass,
    produceThemeVariant = produceThemeClass,
    strict = false,
  }: TwcOptions<ThemeName> = {}
) => {
  const resolved: Resolved = {
    colors: {},
    utilities: {},
    variants: [],
  };
  const configObject =
    typeof config === "function" ? config({ dark, light }) : config;
  forEach(configObject, (colors: NestedColors, themeName) => {
    const themeClassName = produceThemeClass(themeName as ThemeName);
    const themeVariant = produceThemeVariant(themeName as ThemeName);

    const flatColors = flattenColors(colors);
    // set the resolved.variants
    resolved.variants.push({
      // tailwind will generate only the first matched definition
      definition: [
        generateVariantDefinitions(`.${themeClassName}`),
        generateVariantDefinitions(`[data-theme='${themeName}']`),
        generateRootVariantDefinitions(themeName, defaultTheme),
      ].flat(),
      name: themeVariant,
    });

    const cssSelector = `.${themeClassName},[data-theme="${themeName}"]`;
    // set the color-scheme css property
    resolved.utilities[cssSelector] = colors[SCHEME]
      ? { "color-scheme": colors[SCHEME] }
      : {};

    forEach(flatColors, (colorValue, colorName) => {
      // this case was handled above
      if ((colorName as unknown as symbol) === SCHEME) return;
      const safeColorName = escapeChars(colorName, "/");
      let [h, s, l, defaultAlphaValue]: HslaArray = [0, 0, 0, 1];
      try {
        [h, s, l, defaultAlphaValue] = toHslaArray(colorValue);
      } catch (error) {
        let errorMessage = "Unknown Error";
        if (error instanceof Error) {
          errorMessage = error.message;
        }
        const message = `\r\nWarning - In theme "${themeName}" color "${colorName}". ${errorMessage}`;

        if (strict) {
          throw new Error(message);
        }
        return console.error(message);
      }
      const twcColorVariable = produceCssVariable(safeColorName);
      const twcOpacityVariable = `${produceCssVariable(safeColorName)}-opacity`;
      // add the css variables in "@layer utilities" for the hsl values
      const hslValues = `${h} ${s}% ${l}%`;
      resolved.utilities[cssSelector]![twcColorVariable] = hslValues;

      addRootUtilities(resolved.utilities, {
        defaultTheme,
        key: twcColorVariable,
        themeName,
        value: hslValues,
      });
      if (typeof defaultAlphaValue === "number") {
        // add the css variables in "@layer utilities" for the alpha
        const alphaValue = defaultAlphaValue.toFixed(2);
        resolved.utilities[cssSelector]![twcOpacityVariable] = alphaValue;
        addRootUtilities(resolved.utilities, {
          defaultTheme,
          key: twcOpacityVariable,
          themeName,
          value: alphaValue,
        });
      }
      // set the dynamic color in tailwind config theme.colors
      resolved.colors[colorName] = ({ opacityValue, opacityVariable }) => {
        // if the opacity is set  with a slash (e.g. bg-primary/90), use the provided value
        if (!isNaN(+opacityValue)) {
          return `hsl(var(${twcColorVariable}) / ${opacityValue})`;
        }
        // if no opacityValue was provided (=it is not parsable to a number),
        // the twcOpacityVariable (opacity defined in the color definition rgb(0, 0, 0, 0.5))
        // should have the priority over the tw class based opacity(e.g. "bg-opacity-90")
        // This is how tailwind behaves as for v3.2.4
        if (opacityVariable) {
          return `hsl(var(${twcColorVariable}) / var(${twcOpacityVariable}, var(${opacityVariable})))`;
        }
        return `hsl(var(${twcColorVariable}) / var(${twcOpacityVariable}, 1))`;
      };
    });
  });

  return resolved;
};

/**
 * To escape the characters in the color name that are not allowed in css variables
 * @param str - the color name
 * @param chars - the characters to escape
 * @returns String
 */
function escapeChars(str: string, ...chars: string[]) {
  let result = str;
  for (const char of chars) {
    const regexp = new RegExp(char, "g");
    result = str.replace(regexp, `\\${char}`);
  }
  return result;
}

/**
 * Flatten the nested colors object
 * @param colors - the nested colors object
 * @returns FlatColors
 */
function flattenColors(colors: NestedColors) {
  const flatColorsWithDEFAULT: FlatColors = flatten(colors, {
    delimiter: "-",
    safe: true,
  });

  return Object.entries(flatColorsWithDEFAULT).reduce((acc, [key, value]) => {
    acc[key.replace(/-DEFAULT$/, "")] = value;
    return acc;
  }, {} as FlatColors);
}

/**
 * Convert the color value to an hsla array
 * @param colorValue - the color value
 * @returns HslaArray
 */
function toHslaArray(colorValue?: string) {
  return Color(colorValue).hsl().round(1).array() as HslaArray;
}

/**
 * The default function to produce the css variable
 * @param themeName - the theme name
 * @returns String
 */
function defaultProduceCssVariable(themeName: string) {
  return `--twc-${themeName}`;
}

/**
 * The default function to produce the theme class
 * @param themeName - the theme name
 * @returns String
 */
function defaultProduceThemeClass(themeName: string) {
  return themeName;
}

/**
 * The default function to produce the theme variant
 * @param colors - the colors object
 * @returns String
 */
export function dark(
  colors: NestedColors
): { [SCHEME]: "dark" } & MaybeNested<string, string> {
  return {
    ...colors,
    [SCHEME]: "dark",
  };
}

/**
 * The default function to produce the theme variant
 * @param colors - the colors object
 * @returns String
 */
export function light(
  colors: NestedColors
): { [SCHEME]: "light" } & MaybeNested<string, string> {
  return {
    ...colors,
    [SCHEME]: "light",
  };
}

/**
 * Generate the variant definitions for the theme
 * @param selector - the selector
 * @returns String[]
 */
function generateVariantDefinitions(selector: string) {
  return [
    `${selector}&`,
    `:is(${selector} > &:not([data-theme]))`,
    `:is(${selector} &:not(${selector} [data-theme]:not(${selector}) * ))`,
    `:is(${selector}:not(:has([data-theme])) &:not([data-theme]))`,
  ];
}

/**
 * Generate the root variant definitions
 * @param themeName - the theme name
 * @param defaultTheme - the default theme
 * @returns String[]
 */
function generateRootVariantDefinitions<ThemeName extends string>(
  themeName: ThemeName,
  defaultTheme: TwcOptions<ThemeName>["defaultTheme"]
) {
  const baseDefinitions = [
    `:root&`,
    `:is(:root > &:not([data-theme]))`,
    `:is(:root &:not([data-theme] *):not([data-theme]))`,
  ];

  if (typeof defaultTheme === "string" && themeName === defaultTheme) {
    return baseDefinitions;
  }

  if (typeof defaultTheme === "object" && themeName === defaultTheme.light) {
    return baseDefinitions.map(
      (definition) => `@media (prefers-color-scheme: light){${definition}}`
    );
  }

  if (typeof defaultTheme === "object" && themeName === defaultTheme.dark) {
    return baseDefinitions.map(
      (definition) => `@media (prefers-color-scheme: dark){${definition}}`
    );
  }
  return [];
}

/**
 * Add the root utilities
 * @param utilities - the resolved utilities
 * @param options - the options
 * @param options.defaultTheme - the default theme
 * @param options.key - the key
 * @param options.themeName - the theme name
 * @param options.value - the value
 */
function addRootUtilities<ThemeName extends string>(
  utilities: ResolvedUtilities,
  {
    defaultTheme,
    key,
    themeName,
    value,
  }: {
    defaultTheme: TwcOptions<ThemeName>["defaultTheme"];
    key: string;
    themeName: ThemeName;
    value: string;
  }
) {
  if (!defaultTheme) return;
  if (typeof defaultTheme === "string") {
    if (themeName === defaultTheme) {
      // initialize
      if (!utilities[":root"]) {
        utilities[":root"] = {};
      }
      // set
      utilities[":root"][key] = value;
    }
  } else if (themeName === defaultTheme.light) {
    // initialize
    if (!utilities["@media (prefers-color-scheme: light)"]) {
      utilities["@media (prefers-color-scheme: light)"] = {
        ":root": {},
      };
    }
    // set
    if (
      typeof utilities["@media (prefers-color-scheme: light)"][":root"] ===
      "object"
    ) {
      utilities["@media (prefers-color-scheme: light)"][":root"][key] = value;
    }
  } else if (themeName === defaultTheme.dark) {
    // initialize
    if (!utilities["@media (prefers-color-scheme: dark)"]) {
      utilities["@media (prefers-color-scheme: dark)"] = {
        ":root": {},
      };
    }
    // set
    if (
      typeof utilities["@media (prefers-color-scheme: dark)"][":root"] ===
      "object"
    ) {
      utilities["@media (prefers-color-scheme: dark)"][":root"][key] = value;
    }
  }
}
