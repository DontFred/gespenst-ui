import {
  TooltipContent as ArkTooltipContent,
  TooltipContext as ArkTooltipContext,
  TooltipPositioner as ArkTooltipPositioner,
  TooltipRoot as ArkTooltipRoot,
  TooltipTrigger as ArkTooltipTrigger,
} from "@ark-ui/react/tooltip";
import { Text } from "@gespenst/typo";
import { cn } from "@gespenst/utils";
import { Fragment, forwardRef } from "react";

import { tooltipVariants } from "./variants";

import type { TooltipProps } from "./types";

/**
 * getArrowPlacement \
 * Get the arrow className based on the position
 * @param placement - TooltipProps["position"]
 * @returns string
 */
function getArrowPlacement(placement: TooltipProps["position"]): string {
  switch (placement) {
    case "bottom":
      return "after:-top-1 after:left-1/2 after:-translate-x-1/2 ";
    case "bottom-start":
      return "after:-top-1 after:left-3";
    case "bottom-end":
      return "after:-top-1 after:right-3";
    case "top":
      return "after:-bottom-1 after:left-1/2 after:-translate-x-1/2";
    case "top-start":
      return "after:-bottom-1 after:left-3";
    case "top-end":
      return "after:-bottom-1 after:right-3";
    case "left":
      return "after:-right-1 after:top-1/2 after:-translate-y-1/2";
    case "left-start":
      return "after:-right-1 after:top-1";
    case "left-end":
      return "after:-right-1 after:bottom-1";
    case "right":
      return "after:-left-1 after:top-1/2 after:-translate-y-1/2";
    case "right-start":
      return "after:-left-1 after:top-1";
    case "right-end":
      return "after:-left-1 after:bottom-1";
    default:
      return "";
  }
}

/**
 * Tooltip \
 * Tooltip if for displaying a label on hover state or controlled
 * @param TooltipProps - Has all Ark Tooltip Root props.
 * @param TooltipProps.className - To style the tooltip (additional class will get merged by cn()).
 * @param TooltipProps.interactive - If true, tooltip will be interactive.
 * @param TooltipProps.position - Position of the tooltip. (default: top)
 * @param TooltipProps.positionerClassName - To style the positioner (additional class will get merged by cn()).
 * @param TooltipProps.positionerRef - Ref for the positioner.
 * @param TooltipProps.positioning - Positioning of the tooltip.
 * @param TooltipProps.text - Text to display in the tooltip.
 * @param TooltipProps.textClassName - To style the text (additional class will get merged by cn()).
 * @param TooltipProps.textRef - Ref for the text.
 * @param TooltipProps.type - Type of the tooltip.
 * @returns JSX.Element
 * @example
 *  <Tooltip text="Tooltip text">
 *    Template
 *  </Tooltip>
 */
const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(
  (
    {
      children,
      className,
      interactive = true,
      position = "top",
      positionerClassName,
      positionerRef,
      positioning,
      text,
      textClassName,
      textRef,
      triggerClassName,
      triggerRef,
      type,
      ...rest
    },
    ref
  ) => {
    return (
      <ArkTooltipRoot
        {...rest}
        interactive={interactive}
        positioning={{
          ...positioning,
          flip: position ? true : positioning?.flip,
          offset: {
            mainAxis: 12,
            ...positioning?.offset,
          },
          placement: position ?? positioning?.placement,
        }}
      >
        <ArkTooltipContext>
          {(tooltip) => (
            <Fragment>
              <ArkTooltipTrigger asChild>
                <div className={triggerClassName} ref={triggerRef}>
                  {typeof children == "function" ? children(tooltip) : children}
                </div>
              </ArkTooltipTrigger>
              <ArkTooltipPositioner
                className={cn(tooltipVariants({ type }), positionerClassName)}
                ref={positionerRef}
              >
                <ArkTooltipContent
                  className={cn(
                    "relative z-20 w-fit max-w-64 border-separate whitespace-pre-line break-words rounded-md bg-[--tooltip-background] px-3 py-2",
                    "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
                    "after:absolute after:-z-10 after:block after:size-3 after:rotate-45 after:rounded-sm after:bg-[--tooltip-background]",
                    getArrowPlacement(
                      (
                        tooltip.contentProps as {
                          "data-placement": TooltipProps["position"];
                        }
                      )["data-placement"]
                    ),
                    className
                  )}
                  ref={ref}
                >
                  <Text
                    as="div"
                    className={cn("text-center", textClassName)}
                    ref={textRef}
                    variant={"label-13"}
                  >
                    {text}
                  </Text>
                </ArkTooltipContent>
              </ArkTooltipPositioner>
            </Fragment>
          )}
        </ArkTooltipContext>
      </ArkTooltipRoot>
    );
  }
);

Tooltip.displayName = "Tooltip";

export { Tooltip };
