import type { HTMLArkProps } from "@ark-ui/react/factory";
import type { VariantProps } from "class-variance-authority";

import type { cardVariants } from "./variants";

export interface CardProps
  extends HTMLArkProps<"div">,
    VariantProps<typeof cardVariants> {}
