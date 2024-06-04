import type { Config } from "tailwindcss";

import sharedConfig from "@gespenst/tailwind-config";

const config: Config = {
  content: [
    "../../node_modules/@gespenst/**/dist/index.js",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  presets: [sharedConfig],
};
export default config;
