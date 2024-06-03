import { withThemeByClassName } from "@storybook/addon-themes";
import { themes } from "@storybook/theming";
import React from "react";

import type { Preview } from "@storybook/react";

import "../src/style.css";

const decorators: Preview["decorators"] = [
  withThemeByClassName({
    themes: {
      light: "light",
      dark: "dark",
    },
    defaultTheme: "dark",
  }),
  (Story) => (
    <div style={{ padding: "1rem", display: "grid", placeItems: "center" }}>
      <Story />
    </div>
  ),
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
