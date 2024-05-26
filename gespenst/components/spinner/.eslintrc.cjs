/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["gi/react", "plugin:storybook/recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
    tsconfigRootDir: __dirname,
  },
};
