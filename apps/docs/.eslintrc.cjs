/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["gi/next"],
  root: true,
  parserOptions: {
    project: "./tsconfig.json",
  },
};
