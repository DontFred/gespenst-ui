import { ark } from "@ark-ui/react/factory";
import { cn } from "@gespenst/utils";
import { forwardRef } from "react";

import { cardVariants } from "./variants";

import type { CardProps } from "./types";

/**
 * Card \
 * Card is for displaying highlighted sections.
 * @param CardProps - Has all HTMLArkProps<"div"> Props
 * @param CardProps.className - To style the card (additional class will get merged by cn()).
 * @param CardProps.padding - To set padding of the card. (default: md) (options: none, md, lg)
 * @param CardProps.rounded - To set rounded corners of the card. (default: md) (options: none, sm, md, lg, xs)
 * @returns JSX.Element
 * @example
 *  <Card>
 *    Template
 *  </Card>
 */
const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, padding, rounded, ...rest }, ref) => {
    return (
      <ark.div
        className={cn(cardVariants({ padding, rounded }), className)}
        ref={ref}
        {...rest}
      />
    );
  }
);

Card.displayName = "Card";

export { Card };
