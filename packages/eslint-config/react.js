const { resolve, join } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["gi/react", "eslint-config-turbo", "plugin:storybook/recommended"],
  globals: {
    React: true,
    JSX: true,
  },
  env: {
    node: true,
    browser: true,
  },
  plugins: ["only-warn"],
  settings: {
    "import/resolver": {
      typescript: {
        project,
      },
    },
    tailwindcss: {
      config: join(__dirname, "../tailwind-config/tailwind.config.ts"),
      //   cssFiles: ["**/*.css"],
    },
  },
  rules: {
    "tailwindcss/no-custom-classname": [
      "warn",
      {
        config: join(__dirname, "../tailwind-config/tailwind.config.ts"),
      },
    ],
  },
  ignorePatterns: [
    // Ignore dotfiles
    ".*.js",
    "node_modules/",
  ],
  overrides: [{ files: ["*.js?(x)", "*.ts?(x)"] }],
};
