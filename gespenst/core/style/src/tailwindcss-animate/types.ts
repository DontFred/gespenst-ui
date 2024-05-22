export interface PluginUtils {
  breakpoints<I = Record<string, unknown>, O = I>(arg: I): O;
  colors: Record<string, Record<string, string> | string>;
  hsl(
    arg: string
  ): (
    arg: Partial<{ opacityValue: number; opacityVariable: string }>
  ) => string;
  rgb(
    arg: string
  ): (
    arg: Partial<{ opacityValue: number; opacityVariable: string }>
  ) => string;
  theme(path: string, defaultValue?: unknown): Record<string, string>;
}
