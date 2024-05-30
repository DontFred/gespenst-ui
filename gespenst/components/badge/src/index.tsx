import { ark } from "@ark-ui/react/factory";
import { cn } from "@gespenst/utils";
import { forwardRef } from "react";

import { badgeVariants } from "./variants";

import type { BadgeContainerProps, BadgeProps } from "./types";

/**
 * Badge \
 * Badge is a label for indicating states.
 * @param BadgeProps - Has all HTMLArkProps<"span"> Props
 * @param BadgeProps.className - To style the badge (additional class will get merged by cn()).
 * @param BadgeProps.flexContainerClassName - To style the flex container (additional class will get merged by cn()).
 * @param BadgeProps.flexContainerRef - To get the flex container ref.
 * @param BadgeProps.size - To set the badge size (sm, md, lg).
 * @param BadgeProps.variant - To set the badge variant ([every color and subtle of that color], inverted).
 * @returns JSX.Element
 * @example
 *  <Badge>
 *    Template
 *  </Badge>
 */
const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      children,
      className,
      flexContainerClassName,
      flexContainerRef,
      size,
      variant,
      ...rest
    },
    ref
  ) => {
    return (
      <ark.span
        className={cn(badgeVariants({ size, variant }), className)}
        ref={ref}
        {...rest}
      >
        <ark.span
          className={cn(
            "flex items-center gap-[--gespenst-badge-icon-spacing]",
            flexContainerClassName
          )}
          ref={flexContainerRef}
        >
          {children}
        </ark.span>
      </ark.span>
    );
  }
);

Badge.displayName = "Badge";

/**
 * BadgeContainer \
 * BadgeContainer is used to display a badge at the top-right of a children.
 * @param BadgeContainerProps - Has all BadgeProps
 * @param BadgeContainerProps.containerClassName - To style the container (additional class will get merged by cn()).
 * @param BadgeContainerProps.containerRef - To get the container ref.
 * @param BadgeContainerProps.content - To set the badge content.
 * @returns JSX.Element
 * @example
 *   <BadgeContainer content="1">
 *     <Button>Hello</Button>
 *   </BadgeContainer>
 */
const BadgeContainer = forwardRef<HTMLSpanElement, BadgeContainerProps>(
  (
    { children, className, containerClassName, containerRef, content, ...rest },
    ref
  ) => {
    return (
      <div
        className={cn("relative inline-flex shrink-0", containerClassName)}
        ref={containerRef}
      >
        {children}
        <Badge
          className={cn(
            "absolute right-[5%] top-[5%] origin-center -translate-y-1/2 translate-x-1/2 border-background shadow-md",
            className
          )}
          ref={ref}
          {...rest}
        >
          {content}
        </Badge>
      </div>
    );
  }
);

BadgeContainer.displayName = "BadgeContainer";

export { Badge, BadgeContainer };
