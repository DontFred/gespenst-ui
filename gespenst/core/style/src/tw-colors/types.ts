import type { SCHEME, dark, light } from ".";

type NoInfer<T> = [T][T extends unknown ? 0 : never];

export interface MaybeNested<
  K extends number | string | symbol = string,
  V extends string = string,
> {
  [key: string]: MaybeNested<K, V> | V;
}

export type HslaArray = [number, number, number, number | undefined];

export type NestedColors = { [SCHEME]?: "dark" | "light" } & MaybeNested<
  string,
  string
>;
export type FlatColors = { [SCHEME]?: "dark" | "light" } & Record<
  string,
  string
>;
type TwcObjectConfig<ThemeName extends string> = Record<
  ThemeName,
  NestedColors
>;
type TwcFunctionConfig<ThemeName extends string> = (scheme: {
  dark: typeof dark;
  light: typeof light;
}) => TwcObjectConfig<ThemeName>;

interface DefaultThemeObject<ThemeName = string> {
  dark: NoInfer<ThemeName> | (NonNullable<unknown> & string);
  light: NoInfer<ThemeName> | (NonNullable<unknown> & string);
}

type ResolvedVariants = { definition: string[]; name: string }[];
export type ResolvedUtilities = Record<
  string,
  Record<string, Record<string, string> | string>
>;
type ResolvedColors = Record<
  string,
  ({
    opacityValue,
    opacityVariable,
  }: {
    opacityValue: string;
    opacityVariable: string;
  }) => string
>;
export interface Resolved {
  colors: ResolvedColors;
  utilities: ResolvedUtilities;
  variants: ResolvedVariants;
}

export type TwcConfig<ThemeName extends string = string> =
  | TwcFunctionConfig<ThemeName>
  | TwcObjectConfig<ThemeName>;

export interface TwcOptions<ThemeName extends string = string> {
  defaultTheme?:
    | DefaultThemeObject<ThemeName>
    | NoInfer<ThemeName>
    | (NonNullable<unknown> & string);
  produceCssVariable?: (colorName: string) => string;
  produceThemeClass?: (themeName: ThemeName) => string;
  produceThemeVariant?: (themeName: ThemeName) => string;
  strict?: boolean;
}
