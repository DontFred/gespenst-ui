import { withThemeByClassName } from "@storybook/addon-themes";
import { themes } from "@storybook/theming";
import type { Preview } from "@storybook/react";
import "../src/style.css";

const decorators = [
  withThemeByClassName({
    themes: {
      light: "light",
      dark: "dark",
    },
    defaultTheme: "dark",
  }),
];

const preview: Preview = {
  decorators: decorators,
  parameters: {
    docs: {
      theme: themes.dark,
      story: { inline: true }, // render the story in an iframe
      canvas: { sourceState: "shown" }, // start with the source open
      source: { type: "code" }, // forces the raw source code (rather than the rendered JSX)
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
