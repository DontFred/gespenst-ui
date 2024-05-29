import type { HTMLArkProps } from "@ark-ui/react/factory";
import type { VariantProps } from "class-variance-authority";
import type { RefObject } from "react";

import type { badgeVariants } from "./variants";

export interface BadgeProps
  extends HTMLArkProps<"span">,
    VariantProps<typeof badgeVariants> {
  flexContainerClassName?: string;
  flexContainerRef?: RefObject<HTMLSpanElement>;
}

export interface BadgeContainerProps extends BadgeProps {
  containerClassName?: string;
  containerRef?: RefObject<HTMLDivElement>;
  content: string;
}
