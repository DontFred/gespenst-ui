/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@gespenst/eslint-config/react"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
    tsconfigRootDir: __dirname,
  },
};
