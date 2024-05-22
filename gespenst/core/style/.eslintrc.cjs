/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["gi/typescript"],
  root: true,
  parserOptions: {
    project: "./tsconfig.json",
  },
};
