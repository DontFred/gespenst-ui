/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["gi/next"],
  root: true,
  ignorePatterns: ["next.config.mjs"],
  parserOptions: {
    project: "./tsconfig.json",
  },
};
