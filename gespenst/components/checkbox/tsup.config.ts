import { defineConfig } from "tsup";

export default defineConfig({
  clean: true,
  dts: true,
  format: ["cjs", "esm"],
  minify: true,
  silent: true,
  sourcemap: true,
  target: "es2019",
});
