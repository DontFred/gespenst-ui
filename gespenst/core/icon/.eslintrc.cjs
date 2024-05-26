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
