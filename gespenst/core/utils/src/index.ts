import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import type { UtilsCnAttributes } from "./types";

/**
 * Combines multiple classes into a single string. \
 * Function is copied from shadcn/ui.
 * @param inputs - The classes to merge.
 * @returns The merged classes.
 */
export function cn(...inputs: UtilsCnAttributes) {
  return twMerge(clsx(inputs));
}
