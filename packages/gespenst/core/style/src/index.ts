/**
 * Based on tw-colors by L-Blondy
 * @see https://github.com/L-Blondy/tw-colors
 * tailwindcss-inner-border by kripod
 * @see https://github.com/kripod/tailwindcss-inner-border
 * and tailwindcss-animate by jamiebuilds
 * @see https://github.com/jamiebuilds/tailwindcss-animate
 */

import { default as flattenColorPalette } from "tailwindcss/lib/util/flattenColorPalette";
import plugin from "tailwindcss/plugin";

import { filterDefault } from "./tailwindcss-animate";
import { defaultBoxShadow } from "./tailwindcss-inner-border";
import { resolveTwcConfig } from "./tw-colors";

import type {
  Config,
  RecursiveKeyValuePair,
  ResolvableTo,
} from "tailwindcss/types/config";

import type { PluginUtils } from "./tailwindcss-animate/types";
import type { TwcConfig, TwcOptions } from "./tw-colors/types";

const gespenstTheme = {
  dark: {
    background: {
      100: "#0A0A0A",
      200: "#000",
    },
    gray: {
      100: "#1A1A1A",
      1000: "#EDEDED",
      200: "#1F1F1F",
      300: "#292929",
      400: "#2E2E2E",
      500: "#454545",
      600: "#878787",
      700: "#8F8F8F",
      800: "#7D7D7D",
      900: "#A1A1A1",
    },
    "gray-alpha": {
      100: "#FFFFFF0F",
      1000: "#FFFFFFEB",
      200: "#FFFFFF17",
      300: "#FFFFFF21",
      400: "#FFFFFF24",
      500: "#FFFFFF3D",
      600: "#FFFFFF82",
      700: "#FFFFFF8A",
      800: "#FFFFFF78",
      900: "#FFFFFF9C",
    },
    // black: "#000",
    // current: "currentColor",
    // transparent: "transparent",
    // white: "#fff",
  },
  light: {
    primary: "#fff",
  },
} satisfies TwcConfig<"dark" | "light">;

const gespenstConfig: {
  defaultTheme: keyof typeof gespenstTheme;
} & Omit<TwcOptions, "defaultTheme"> = {
  defaultTheme: "dark",
  produceCssVariable: (colorName) => `--gespenst-${colorName}`,
};

const resolved = resolveTwcConfig(gespenstTheme, gespenstConfig);

/**
 * Gespenst is a Tailwind CSS plugin that provides a set of utilities to style the gespenst library.
 * The hole library is based on tw-colors by L-Blondy, tailwindcss-inner-border by kripod and tailwindcss-animate by jamiebuilds.
 * @see https://github.com/L-Blondy/tw-colors
 * @see https://github.com/kripod/tailwindcss-inner-border
 * @see https://github.com/jamiebuilds/tailwindcss-animate
 * @returns Tailwind CSS plugin
 */
export const gespenst = plugin(
  ({ addUtilities, addVariant, corePlugins, matchUtilities, theme }) => {
    addUtilities(resolved.utilities);

    addUtilities({
      "*,::before,::after": {
        "--tw-inner-border-color": theme("borderColor.DEFAULT", "currentColor"),
      },
    });
    addUtilities({
      ".animate-in": {
        "--tw-enter-opacity": "initial",
        "--tw-enter-rotate": "initial",
        "--tw-enter-scale": "initial",
        "--tw-enter-translate-x": "initial",
        "--tw-enter-translate-y": "initial",
        animationDuration: theme("animationDuration.DEFAULT"),
        animationName: "enter",
      },
      ".animate-out": {
        "--tw-exit-opacity": "initial",
        "--tw-exit-rotate": "initial",
        "--tw-exit-scale": "initial",
        "--tw-exit-translate-x": "initial",
        "--tw-exit-translate-y": "initial",
        animationDuration: theme("animationDuration.DEFAULT"),
        animationName: "exit",
      },
      "@keyframes enter": theme("keyframes.enter"),
      "@keyframes exit": theme("keyframes.exit"),
    });

    // add the theme as variant e.g. "theme-[name]:text-2xl"
    resolved.variants.forEach(({ definition, name }) =>
      addVariant(name, definition)
    );

    matchUtilities(
      {
        "fade-in": (value) => ({ "--tw-enter-opacity": value }),
        "fade-out": (value) => ({ "--tw-exit-opacity": value }),
      },
      { values: theme("animationOpacity") }
    );

    matchUtilities(
      {
        "zoom-in": (value) => ({ "--tw-enter-scale": value }),
        "zoom-out": (value) => ({ "--tw-exit-scale": value }),
      },
      { values: theme("animationScale") }
    );

    matchUtilities(
      {
        "spin-in": (value) => ({ "--tw-enter-rotate": value }),
        "spin-out": (value) => ({ "--tw-exit-rotate": value }),
      },
      { values: theme("animationRotate") }
    );

    matchUtilities(
      {
        "slide-in-from-bottom": (value) => ({
          "--tw-enter-translate-y": value,
        }),
        "slide-in-from-left": (value) => ({
          "--tw-enter-translate-x": `-${value}`,
        }),
        "slide-in-from-right": (value) => ({
          "--tw-enter-translate-x": value,
        }),
        "slide-in-from-top": (value) => ({
          "--tw-enter-translate-y": `-${value}`,
        }),
        "slide-out-to-bottom": (value) => ({
          "--tw-exit-translate-y": value,
        }),
        "slide-out-to-left": (value) => ({
          "--tw-exit-translate-x": `-${value}`,
        }),
        "slide-out-to-right": (value) => ({
          "--tw-exit-translate-x": value,
        }),
        "slide-out-to-top": (value) => ({
          "--tw-exit-translate-y": `-${value}`,
        }),
      },
      { values: theme("animationTranslate") }
    );

    matchUtilities(
      { duration: (value) => ({ animationDuration: value }) },
      { values: filterDefault(theme("animationDuration")) }
    );

    matchUtilities(
      { delay: (value) => ({ animationDelay: value }) },
      { values: theme("animationDelay") }
    );

    matchUtilities(
      { ease: (value) => ({ animationTimingFunction: value }) },
      { values: filterDefault(theme("animationTimingFunction")) }
    );

    addUtilities({
      ".paused": { animationPlayState: "paused" },
      ".running": { animationPlayState: "running" },
    });

    matchUtilities(
      { "fill-mode": (value) => ({ animationFillMode: value }) },
      { values: theme("animationFillMode") }
    );

    matchUtilities(
      { direction: (value) => ({ animationDirection: value }) },
      { values: theme("animationDirection") }
    );

    matchUtilities(
      { repeat: (value) => ({ animationIterationCount: value }) },
      { values: theme("animationRepeat") }
    );

    matchUtilities(
      {
        "inner-border": (value) => ({
          "--tw-inner-border-shadow":
            "inset 0 0 0 var(--tw-inner-border-width) var(--tw-inner-border-color)",
          "--tw-inner-border-width": value,
          "@defaults inner-border": {},
          "box-shadow": defaultBoxShadow,
        }),
      },
      {
        type: ["line-width", "length"],
        values: theme("borderWidth"),
      }
    );
    matchUtilities(
      {
        "inner-border": (value) => ({
          "--tw-inner-border-color": value,
        }),
      },
      {
        type: ["color", "any"],
        // eslint-disable-next-line @typescript-eslint/no-unused-vars -- The _ is used to remove the DEFAULT key from the color palette
        values: (({ DEFAULT: _, ...colors }) => colors)(
          flattenColorPalette(theme("borderColor"))
        ),
      }
    );

    if (corePlugins("boxShadow")) {
      matchUtilities(
        { shadow: () => ({ "box-shadow": defaultBoxShadow }) },
        { type: ["shadow"], values: theme("boxShadow") }
      );
    }
    if (corePlugins("ringWidth")) {
      matchUtilities(
        { ring: () => ({ "box-shadow": defaultBoxShadow }) },
        { type: "length", values: theme("ringWidth") }
      );
    }
  },
  {
    theme: {
      extend: {
        animationDelay: ({ theme }: PluginUtils) => ({
          ...theme("transitionDelay"),
        }),
        animationDirection: {
          alternate: "alternate",
          "alternate-reverse": "alternate-reverse",
          normal: "normal",
          reverse: "reverse",
        },
        animationDuration: ({ theme }: PluginUtils) => ({
          0: "0ms",
          ...theme("transitionDuration"),
        }),
        animationFillMode: {
          backwards: "backwards",
          both: "both",
          forwards: "forwards",
          none: "none",
        },
        animationOpacity: ({ theme }: PluginUtils) => ({
          DEFAULT: 0,
          ...theme("opacity"),
        }),
        animationRepeat: {
          0: "0",
          1: "1",
          infinite: "infinite",
        },
        animationRotate: ({ theme }: PluginUtils) => ({
          DEFAULT: "30deg",
          ...theme("rotate"),
        }),
        animationScale: ({ theme }: PluginUtils) => ({
          DEFAULT: 0,
          ...theme("scale"),
        }),
        animationTimingFunction: ({ theme }: PluginUtils) => ({
          ...theme("transitionTimingFunction"),
        }),
        animationTranslate: ({ theme }: PluginUtils) => ({
          DEFAULT: "100%",
          ...theme("translate"),
        }),
        colors: resolved.colors as unknown as ResolvableTo<
          RecursiveKeyValuePair<string, string>
        >,
        keyframes: {
          enter: {
            from: {
              opacity: "var(--tw-enter-opacity, 1)",
              transform:
                "translate3d(var(--tw-enter-translate-x, 0), var(--tw-enter-translate-y, 0), 0) scale3d(var(--tw-enter-scale, 1), var(--tw-enter-scale, 1), var(--tw-enter-scale, 1)) rotate(var(--tw-enter-rotate, 0))",
            },
          },
          exit: {
            to: {
              opacity: "var(--tw-exit-opacity, 1)",
              transform:
                "translate3d(var(--tw-exit-translate-x, 0), var(--tw-exit-translate-y, 0), 0) scale3d(var(--tw-exit-scale, 1), var(--tw-exit-scale, 1), var(--tw-exit-scale, 1)) rotate(var(--tw-exit-rotate, 0))",
            },
          },
        },
      },
    } as Config["theme"],
  }
);
