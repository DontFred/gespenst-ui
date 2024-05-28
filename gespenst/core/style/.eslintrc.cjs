/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["@gespenst/eslint-config/typescript"],
  root: true,
  parserOptions: {
    project: "./tsconfig.json",
  },
};
