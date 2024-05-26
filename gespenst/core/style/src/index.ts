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
    accent: {
      1: "#111",
      2: "#333",
      3: "#444",
      4: "#666",
      5: "#888",
      6: "#999",
      7: "#eaeaea",
      8: "#fafafa",
    },
    amber: {
      100: "#291800",
      200: "#331B00",
      300: "#4D2A00",
      400: "#573300",
      500: "#6B4105",
      600: "#E79D13",
      700: "#FFB224",
      800: "#FF990A",
      900: "#FF990A",
      1000: "#FEF3DC",
    },
    background: {
      100: "#0A0A0A",
      200: "#000",
      DEFAULT: "#000",
    },
    blue: {
      100: "#0F1C2E",
      200: "#10233D",
      300: "#0F2F57",
      400: "#0D3868",
      500: "#0A4380",
      600: "#0091FF",
      700: "#0072F5",
      800: "#0062D1",
      900: "#52A8FF",
      1000: "#EBF6FF",
    },
    error: {
      DEFAULT: "red",
      dark: "#e60000",
      light: "#f33",
      lighter: "#f7d4d6",
    },
    foreground: "#fff",
    gray: {
      100: "#1A1A1A",
      200: "#1F1F1F",
      300: "#292929",
      400: "#2E2E2E",
      500: "#454545",
      600: "#878787",
      700: "#8F8F8F",
      800: "#7D7D7D",
      900: "#A1A1A1",
      1000: "#EDEDED",
    },
    "gray-alpha": {
      100: "#FFFFFF0F",
      200: "#FFFFFF17",
      300: "#FFFFFF21",
      400: "#FFFFFF24",
      500: "#FFFFFF3D",
      600: "#FFFFFF82",
      700: "#FFFFFF8A",
      800: "#FFFFFF78",
      900: "#FFFFFF9C",
      1000: "#FFFFFFEB",
    },
    green: {
      100: "#0B2212",
      200: "#0F2E18",
      300: "#12361B",
      400: "#0C451B",
      500: "#126426",
      600: "#1A9338",
      700: "#45A557",
      800: "#398E4A",
      900: "#62C073",
      1000: "#E5FBEA",
    },
    pink: {
      100: "#28151D",
      200: "#3A1726",
      300: "#4F1C31",
      400: "#551B33",
      500: "#6C1E3E",
      600: "#B31A57",
      700: "#EA3E83",
      800: "#DF2670",
      900: "#F75F8F",
      1000: "#FEECF4",
    },
    purple: {
      100: "#231528",
      200: "#2E1938",
      300: "#422154",
      400: "#4F2768",
      500: "#5F2E85",
      600: "#8E4EC6",
      700: "#8E4EC6",
      800: "#763DA9",
      900: "#BF7AF0",
      1000: "#F8EDFC",
    },
    red: {
      100: "#2A1314",
      200: "#3C1618",
      300: "#561A1E",
      400: "#671E21",
      500: "#832126",
      600: "#E5484D",
      700: "#E5484D",
      800: "#D93036",
      900: "#FF6166",
      1000: "#FEECEE",
    },
    success: {
      DEFAULT: "#0070f3",
      dark: "#0761d1",
      light: "#3291ff",
      lighter: "#d3e5ff",
    },
    teal: {
      100: "#04201B",
      200: "#062822",
      300: "#083A33",
      400: "#053D35",
      500: "#085E53",
      600: "#0C9784",
      700: "#12A594",
      800: "#0D8C7D",
      900: "#0AC7B4",
      1000: "#E0FAF4",
    },
    transparent: "transparent",
    warning: {
      DEFAULT: "#f5a623",
      dark: "#ab570a",
      light: "#f7b955",
      lighter: "#ffefcf",
    },
  },
  light: {
    accent: {
      1: "#fafafa",
      2: "#eaeaea",
      3: "#999",
      4: "#888",
      5: "#666",
      6: "#444",
      7: "#333",
      8: "#111",
    },
    amber: {
      100: "#FFF6E6",
      200: "#FFF4D6",
      300: "#FEF0CD",
      400: "#FFDD8F",
      500: "#FFC96B",
      600: "#F5B047",
      700: "#FFB224",
      800: "#FF990A",
      900: "#A35200",
      1000: "#4E2009",
    },
    background: {
      100: "#FFF",
      200: "#FAFAFA",
      DEFAULT: "#FFF",
    },
    blue: {
      100: "#F0F7FF",
      200: "#EBF5FF",
      300: "#E0F0FF",
      400: "#CCE6FF",
      500: "#99CEFF",
      600: "#52AEFF",
      700: "#0072F5",
      800: "#0062D1",
      900: "#0068D6",
      1000: "#00254D",
    },
    error: {
      DEFAULT: "#e00",
      dark: "#c50000",
      light: "#ff1a1a",
      lighter: "#f7d4d6",
    },
    foreground: "#000",
    gray: {
      100: "#F2F2F2",
      200: "#EBEBEB",
      300: "#E6E6E6",
      400: "#EBEBEB",
      500: "#C9C9C9",
      600: "#A8A8A8",
      700: "#8F8F8F",
      800: "#7D7D7D",
      900: "#666",
      1000: "#171717",
    },
    "gray-alpha": {
      100: "#0000000D",
      200: "#00000014",
      300: "#0000001A",
      400: "#00000014",
      500: "#00000036",
      600: "#00000057",
      700: "#00000070",
      800: "#00000082",
      900: "#0000009C",
      1000: "#000000E8",
    },
    green: {
      100: "#EFFBEF",
      200: "#EBFAEB",
      300: "#DAF6DA",
      400: "#C6F1C7",
      500: "#99E69E",
      600: "#6CDA75",
      700: "#45A557",
      800: "#398E4A",
      900: "#297A3A",
      1000: "#1B311E",
    },
    pink: {
      100: "#FFEBF5",
      200: "#F9F1FE",
      300: "#F4E8FC",
      400: "#EDDCF9",
      500: "#F5B8CC",
      600: "#EE87A7",
      700: "#EA3E83",
      800: "#DF2670",
      900: "#BD2864",
      1000: "#430A23",
    },
    purple: {
      100: "#F9F0FF",
      200: "#F9F1FE",
      300: "#F4E8FC",
      400: "#EDDCF9",
      500: "#D5B1F1",
      600: "#BF89EC",
      700: "#8E4EC6",
      800: "#763DA9",
      900: "#7820BC",
      1000: "#2E004D",
    },
    red: {
      100: "#FFF0F0",
      200: "#FFEBEB",
      300: "#FFE6E6",
      400: "#FDD8D8",
      500: "#F8B9B9",
      600: "#F87275",
      700: "#E5484D",
      800: "#DA2F35",
      900: "#CB2A2F",
      1000: "#391417",
    },
    success: {
      DEFAULT: "#0070f3",
      dark: "#0761d1",
      light: "#3291ff",
      lighter: "#d3e5ff",
    },
    teal: {
      100: "#EEFCF9",
      200: "#E5FAF6",
      300: "#D4F7F0",
      400: "#BEF4EB",
      500: "#86EAD9",
      600: "#45DEC5",
      700: "#12A594",
      800: "#0D8C7D",
      900: "#067A6E",
      1000: "#073C34",
    },
    warning: {
      DEFAULT: "#f5a623",
      dark: "#ab570a",
      light: "#f7b955",
      lighter: "#ffefcf",
    },
  },
} satisfies TwcConfig<"dark" | "light">;

const gespenstConfig: {
  defaultTheme: keyof typeof gespenstTheme;
} & Omit<TwcOptions, "defaultTheme"> = {
  defaultTheme: "dark",
  produceCssVariable: (colorName) => `--gespenst-${colorName}`,
  strict: true,
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
  ({
    addBase,
    addUtilities,
    addVariant,
    corePlugins,
    matchUtilities,
    theme,
  }) => {
    addBase({
      body: {
        backgroundColor: theme("colors.background"),
        color: theme("colors.foreground"),
      },
    });
    addUtilities(resolved.utilities);
    addUtilities({
      ":root": {
        "--gespenst-secondary": "var(--gespenst-accent-5)",
        "--gespenst-secondary-dark": "var(--gespenst-accent-7)",
        "--gespenst-secondary-light": "var(--gespenst-accent-3)",
        "--gespenst-secondary-lighter": "var(--gespenst-accent-2)",
      },
    });
    addUtilities({
      "*,::before,::after": {
        "--tw-inner-border-color": "hsla(0,0%,100%,.145)",
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
          "@defaults inner-border": {},
          "--tw-inner-border-shadow":
            "inset 0 0 0 var(--tw-inner-border-width) var(--tw-inner-border-color)",
          "--tw-inner-border-width": value,
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
      colors: {
        black: "#000",
        current: "currentColor",
        secondary: {
          DEFAULT: "hsl(var(--gespenst-secondary) / <alpha-value>)",
          dark: "hsl(var(--gespenst-secondary-dark) / <alpha-value>)",
          light: "hsl(var(--gespenst-secondary-light) / <alpha-value>)",
          lighter: "hsl(var(--gespenst-secondary-lighter) / <alpha-value>)",
        },
        transparent: "transparent",
        white: "#FFF",
        ...(resolved.colors as unknown as ResolvableTo<
          RecursiveKeyValuePair<string, string>
        >),
      },
      extend: {
        animation: {
          loader: "loader 1.2s linear infinite",
        },
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
        borderColor: {
          DEFAULT: "hsla(0,0%,100%,.145)",
        },
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
          loader: {
            from: {
              opacity: "1",
            },
            to: {
              opacity: ".15",
            },
          },
        },
      },
    } as Config["theme"],
  }
);
