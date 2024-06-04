import { ark } from "@ark-ui/react/factory";
import { Tooltip } from "@gespenst/tooltip";
import { Text } from "@gespenst/typo";
import { cn } from "@gespenst/utils";
import { forwardRef } from "react";

import type { DescriptionProps } from "./types";

/**
 * Description \
 * Description is a way to display a label in a more detailed way
 * @param DescriptionProps - Has all HTMLArkProps<"dl"> Props
 * @param DescriptionProps.className - To style the description (additional class will get merged by cn()).
 * @param DescriptionProps.detailsClassName - To style the details (additional class will get merged by cn()).
 * @param DescriptionProps.detailsRef - Ref for the details.
 * @param DescriptionProps.detailsTextClassName - To style the details text (additional class will get merged by cn()).
 * @param DescriptionProps.detailsTextRef - Ref for the details text.
 * @param DescriptionProps.label - Label for the description.
 * @param DescriptionProps.labelClassName - To style the label (additional class will get merged by cn()).
 * @param DescriptionProps.labelRef - Ref for the label.
 * @param DescriptionProps.labelTextClassName - To style the label text (additional class will get merged by cn()).
 * @param DescriptionProps.labelTextRef - Ref for the label text.
 * @param DescriptionProps.tooltip - Tooltip for the description.
 * @param DescriptionProps.tooltipClassName - To style the tooltip (additional class will get merged by cn()).
 * @param DescriptionProps.tooltipIconClassName - To style the tooltip icon (additional class will get merged by cn()).
 * @param DescriptionProps.tooltipIconRef - Ref for the tooltip icon.
 * @param DescriptionProps.tooltipRef - Ref for the tooltip.
 * @returns JSX.Element
 * @example
 *  <Description>
 *    Template
 *  </Description>
 */
const Description = forwardRef<HTMLDListElement, DescriptionProps>(
  (
    {
      children,
      className,
      detailsClassName,
      detailsRef,
      detailsTextClassName,
      detailsTextRef,
      label,
      labelClassName,
      labelRef,
      labelTextClassName,
      labelTextRef,
      tooltip,
      tooltipClassName,
      tooltipIconClassName,
      tooltipIconRef,
      tooltipRef,
      ...rest
    },
    ref
  ) => {
    return (
      <ark.dl className={className} ref={ref} {...rest}>
        <ark.dt
          className={cn(
            "mb-2 inline-flex h-3.5 items-center text-nowrap capitalize text-gray-900",
            labelClassName
          )}
          ref={labelRef}
        >
          <Text
            as="span"
            className={cn("leading-[0.875rem]", labelTextClassName)}
            ref={labelTextRef}
            variant={"label-14"}
          >
            {label}
          </Text>
          {tooltip && (
            <Tooltip
              className={tooltipClassName}
              ref={tooltipRef}
              text={tooltip}
              triggerClassName="ml-1"
            >
              <svg
                className={cn("text-accent-2", tooltipIconClassName)}
                height="14"
                ref={tooltipIconRef}
                shapeRendering="geometricPrecision"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                width="14"
              >
                <circle cx="12" cy="12" fill="currentColor" r="10"></circle>
                <path
                  d="M12 16v-4"
                  stroke="hsl(var(--gespenst-foreground))"
                ></path>
                <path
                  d="M12 8h.01"
                  stroke="hsl(var(--gespenst-foreground))"
                ></path>
              </svg>
            </Tooltip>
          )}
        </ark.dt>
        <ark.dd className={cn(detailsClassName)} ref={detailsRef}>
          <Text
            as="div"
            className={cn("leading-4 text-gray-1000", detailsTextClassName)}
            ref={detailsTextRef}
            variant={"button-14"}
          >
            {children}
          </Text>
        </ark.dd>
      </ark.dl>
    );
  }
);

Description.displayName = "Description";

export { Description };
