import { defineConfig } from "tsup";

export default defineConfig({
  dts: true,
  sourcemap: true,
  clean: true,
  target: "es2019",
  format: ["cjs", "esm"],
});
