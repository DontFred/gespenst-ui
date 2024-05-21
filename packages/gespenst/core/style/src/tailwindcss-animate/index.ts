import type { Config } from "tailwindcss/types/config";

/**
 * Filter out the DEFAULT key from the theme object.
 * @param values - the theme object
 * @returns the theme object without the DEFAULT key
 */
export function filterDefault(values: Config["theme"]) {
  return Object.fromEntries(
    Object.entries(values as Record<string, string>).filter(
      ([key]) => key !== "DEFAULT"
    )
  );
}
