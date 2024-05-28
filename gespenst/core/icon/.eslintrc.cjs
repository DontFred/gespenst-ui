/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@gespenst/eslint-config/react", "plugin:storybook/recommended"],
  parser: "@typescript-eslint/parser",
  ignorePatterns: ["svgr-template.js"],
  parserOptions: {
    project: "./tsconfig.json",
    tsconfigRootDir: __dirname,
  },
};
