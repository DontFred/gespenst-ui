var path = require("path");
const dir = path.resolve(__dirname);

/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["@gespenst/eslint-config/next"],
  root: true,
  ignorePatterns: ["next.config.mjs"],
  parserOptions: {
    project: "./tsconfig.json",
  },
};
