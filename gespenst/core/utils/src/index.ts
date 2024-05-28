import {
  extendTailwindMerge,
  fromTheme,
  twJoin,
  // twMerge,
} from "tailwind-merge";

import type { UtilsCnAttributes } from "./types";

const gTwMerge = extendTailwindMerge<
  "inner-border-color" | "inner-border-width"
>({
  extend: {
    classGroups: {
      "inner-border-color": [{ "inner-border": [fromTheme("borderColor")] }],
      "inner-border-width": [{ "inner-border": ["", "0", "2", "4", "8"] }],
    },
  },
});

/**
 * Combines multiple classes into a single string. \
 * Function is inspired from shadcn/ui.
 * @param inputs - The classes to merge.
 * @returns The merged classes.
 */
export function cn(...inputs: UtilsCnAttributes) {
  return gTwMerge(twJoin(inputs));
}
