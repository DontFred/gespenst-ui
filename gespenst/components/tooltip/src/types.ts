import type {
  TooltipContextProps as ArkTooltipContextProps,
  TooltipRootProps as ArkTooltipRootProps,
} from "@ark-ui/react/tooltip";
import type { VariantProps } from "class-variance-authority";
import type { ReactNode, Ref } from "react";

import type { tooltipVariants } from "./variants";

type Placement = Required<ArkTooltipRootProps>["positioning"]["placement"];

export interface TooltipProps
  extends Omit<ArkTooltipRootProps, "children">,
    VariantProps<typeof tooltipVariants> {
  children?: ArkTooltipContextProps["children"] | ReactNode;
  className?: string;
  position?: Placement;
  positionerClassName?: string;
  positionerRef?: Ref<HTMLDivElement>;
  text?: ReactNode;
  textClassName?: string;
  textRef?: Ref<HTMLDivElement>;
  triggerRef?: Ref<HTMLDivElement>;
}
