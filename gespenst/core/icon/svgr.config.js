/** @type {import('@svgr/core').Config} */
module.exports = {
  icon: true,
  typescript: true,
  outDir: "./src",
  ref: true,
  prettier: false,
  jsxRuntime: "automatic",
  index: false,
  svgoConfig: {
    plugins: [
      {
        name: "removeAttrs",
        params: { attrs: "(style)" },
      },
    ],
  },
  template: require("./svgr-template.js"),
};
