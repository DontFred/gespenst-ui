import { cn } from "@gespenst/utils";
import { forwardRef } from "react";

import {
  responsiveSizeTextVariants,
  responsiveVariantTextVariants,
  textVariants,
} from "./variants";

import type { RefObject } from "react";

import type {
  ResponsiveSizeTextVariants,
  ResponsiveVariantTextVariants,
  TableBodyProps,
  TableCellProps,
  TableHeadProps,
  TableHeaderProps,
  TableProps,
  TableRowProps,
  TextComponent,
  TextProps,
} from "./types";

/**
 * Text Component
 * @param TextProps - Has all HTMLElement Props of the HTML tag passed in as prop.
 * @param TextProps.as - HTML tag to render the text. (default: p) (div, h1, h2, h3, h4, h5, h6, p, span)
 * @param TextProps.className - To add custom style to the text (additional class will get merged by cn()).
 * @param TextProps.size - To set the pre-configured size classes of the text.
 * @param TextProps.variant - To set the pre-configured variant classes of the text.
 * @returns JSX.Element
 * @example
 *  <Text className="text-primary" variant="heading-40">
 *    Hello World
 *  </Text>
 */
// eslint-disable-next-line react/display-name
const Text = forwardRef<HTMLElement, TextProps>(
  ({ as = "p", className, size, variant, ...rest }, ref) => {
    const Comp = as;

    if (
      (variant && !size && typeof variant === "string") ??
      (size && !variant && typeof size === "number")
    ) {
      return (
        <Comp
          className={cn(textVariants({ size, variant }), className)}
          ref={ref as unknown as RefObject<HTMLDivElement>}
          {...rest}
        />
      );
    } else {
      if (size) {
        return (
          <Comp
            className={cn(
              responsiveSizeTextVariants(size as ResponsiveSizeTextVariants),
              className
            )}
            ref={ref as unknown as RefObject<HTMLDivElement>}
            {...rest}
          />
        );
      }
      if (variant) {
        return (
          <Comp
            className={cn(
              responsiveVariantTextVariants(
                variant as ResponsiveVariantTextVariants
              ),
              className
            )}
            ref={ref as unknown as RefObject<HTMLDivElement>}
            {...rest}
          />
        );
      }
    }
    return <Comp className={className} {...rest} />;
  }
) as unknown as TextComponent;

Text.displayName = "Text";

/**
 * Table
 * @param TableProps - Has all HTML Table attributes.
 * @param TableProps.className - The additional class name of the Table. (additional class will get merged by cn()).
 * @param TableProps.children - The children of the Table.
 * @param TableProps.container - To change the props of the container div.
 * @returns A JSX element.
 * @example
 *  <Table>
 *    ...
 *  </Table>
 */
const Table = forwardRef<HTMLTableElement, TableProps>(
  ({ children, className, container, ...rest }, ref) => {
    const { className: containerClassName, ...containerRest } = container ?? {};
    return (
      <div
        className={cn(
          "my-6 w-full overflow-y-auto rounded-xl border",
          containerClassName
        )}
        ref={ref}
        {...containerRest}
      >
        <table className={cn("w-full", className)} {...rest}>
          {children}
        </table>
      </div>
    );
  }
);

Table.displayName = "Table";

/**
 * Table Head
 * @param TableHeadProps - Has all HTML Table Head attributes.
 * @param TableHeadProps.children - The children of the Table Head.
 * @param TableHeadProps.className - The additional class name of the Table Head. (additional class will get merged by cn()).
 * @returns A JSX element.
 * @example
 *  <THead>
 *    ...
 *  </THead>
 */
const THead = forwardRef<HTMLTableSectionElement, TableHeadProps>(
  ({ children, className, ...rest }, ref) => {
    return (
      <thead
        className={cn("bg-background-100 border-b", className)}
        ref={ref}
        {...rest}
      >
        {children}
      </thead>
    );
  }
);

THead.displayName = "THead";

/**
 * Table Row
 * @param TableRowProps - Has all HTML Table Row attributes.
 * @param TableRowProps.children - The children of the Table Row.
 * @param TableRowProps.className - The additional class name of the Table Row. (additional class will get merged by cn()).
 * @returns A JSX element.
 * @example
 *  <TR>
 *    ...
 *  </TR>
 */
const TR = forwardRef<HTMLTableRowElement, TableRowProps>(
  ({ children, className, ...rest }, ref) => {
    return (
      <tr
        className={cn("m-0 p-0 [&:not(:last-child)]:border-b", className)}
        ref={ref}
        {...rest}
      >
        {children}
      </tr>
    );
  }
);

TR.displayName = "TR";

/**
 * Table Header
 * @param TableHeaderProps - Has all HTML Table Header attributes.
 * @param TableHeaderProps.children - The children of the Table Header.
 * @param TableHeaderProps.className - The additional class name of the Table Header. (additional class will get merged by cn()).
 * @returns A JSX element.
 * @example
 *  <TH>
 *    ...
 *  </TH>
 */
const TH = forwardRef<HTMLTableCellElement, TableHeaderProps>(
  ({ children, className, ...rest }, ref) => {
    return (
      <th
        className={cn(
          "px-4 py-2 text-left font-bold [&:not(:last-child)]:border-r [&[align=center]]:text-center [&[align=right]]:text-right",
          className
        )}
        ref={ref}
        {...rest}
      >
        {children}
      </th>
    );
  }
);

TH.displayName = "TH";

/**
 * Table Body
 * @param TableBodyProps - Has all HTML Table Body attributes.
 * @param TableBodyProps.children - The children of the Table Body.
 * @param TableBodyProps.className - The additional class name of the Table Body. (additional class will get merged by cn()).
 * @returns A JSX element.
 * @example
 *  <TBody>
 *    ...
 *  </TBody>
 */
const TBody = forwardRef<HTMLTableSectionElement, TableBodyProps>(
  ({ children, className, ...rest }, ref) => {
    return (
      <tbody className={cn("bg-card", className)} ref={ref} {...rest}>
        {children}
      </tbody>
    );
  }
);

TBody.displayName = "TBody";

/**
 * Table Cell
 * @param TableCellProps - Has all HTML Table Cell attributes.
 * @param TableCellProps.children - The children of the Table Cell.
 * @param TableCellProps.className - The additional class name of the Table Cell. (additional class will get merged by cn()).
 * @returns A JSX element.
 * @example
 *  <TD>
 *    ...
 *  </TD>
 */
const TD = forwardRef<HTMLTableCellElement, TableCellProps>(
  ({ children, className, ...rest }, ref) => {
    return (
      <td
        className={cn(
          "px-4 py-2 text-left [&:not(:last-child)]:border-r [&[align=center]]:text-center [&[align=right]]:text-right",
          className
        )}
        ref={ref}
        {...rest}
      >
        {children}
      </td>
    );
  }
);

TD.displayName = "TD";

export { TBody, TD, TH, THead, TR, Table, Text };
