import type { Config } from "tailwindcss";
import { gespenst } from "@gespenst/style";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  plugins: [gespenst],
};

export default config;
