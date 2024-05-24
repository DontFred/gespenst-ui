const { resolve } = require("node:path");

const project = resolve(__dirname, "tsconfig.json");

/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["gi/react"],
  parser: "@typescript-eslint/parser",
  ignorePatterns: ["svgr-template.js"],
  parserOptions: {
    project: "./tsconfig.json",
    tsconfigRootDir: __dirname,
  },
};
