import type { VariantProps } from "class-variance-authority";
import type { FC, HTMLAttributes, RefAttributes } from "react";

import type {
  kbdVariants,
  responsiveSizeTextVariants,
  responsiveVariantTextVariants,
  textVariants,
} from "./variants";

interface TextRefMap {
  div: HTMLDivElement;
  h1: HTMLHeadingElement;
  h2: HTMLHeadingElement;
  h3: HTMLHeadingElement;
  h4: HTMLHeadingElement;
  h5: HTMLHeadingElement;
  h6: HTMLHeadingElement;
  p: HTMLParagraphElement;
  span: HTMLSpanElement;
}

type TextVariants = VariantProps<typeof textVariants>;

export type ResponsiveVariantTextVariants = VariantProps<
  typeof responsiveVariantTextVariants
>;

export type ResponsiveSizeTextVariants = VariantProps<
  typeof responsiveSizeTextVariants
>;

interface TextSlimProps {
  as?: keyof TextRefMap;
  size?: ResponsiveSizeTextVariants | TextVariants["size"];
  variant?: ResponsiveVariantTextVariants | TextVariants["variant"];
}

export type TextProps = HTMLAttributes<HTMLElement> & TextSlimProps;

interface TextDivElement
  extends HTMLAttributes<HTMLDivElement>,
    Omit<TextSlimProps, "as"> {
  as: "div";
  ref?: RefAttributes<HTMLDivElement>["ref"];
}

interface TextHeadingElement
  extends HTMLAttributes<HTMLHeadingElement>,
    Omit<TextSlimProps, "as"> {
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  ref?: RefAttributes<HTMLHeadingElement>["ref"];
}

interface TextParagraphElement
  extends HTMLAttributes<HTMLParagraphElement>,
    Omit<TextSlimProps, "as"> {
  as?: "p";
  ref?: RefAttributes<HTMLParagraphElement>["ref"];
}

interface TextSpanElement
  extends HTMLAttributes<HTMLSpanElement>,
    Omit<TextSlimProps, "as"> {
  as: "span";
  ref?: RefAttributes<HTMLSpanElement>["ref"];
}

type TextElement =
  | TextDivElement
  | TextHeadingElement
  | TextParagraphElement
  | TextSpanElement;

export type TextComponent = FC<
  (
    | {
        size?: ResponsiveSizeTextVariants | TextVariants["size"];
        variant?: undefined;
      }
    | {
        size?: undefined;
        variant?: ResponsiveVariantTextVariants | TextVariants["variant"];
      }
  ) &
    TextElement
>;

export interface TableProps extends HTMLAttributes<HTMLTableElement> {
  container?: HTMLAttributes<HTMLDivElement>;
}

export interface TableHeadProps
  extends HTMLAttributes<HTMLTableSectionElement> {}

export interface TableRowProps extends HTMLAttributes<HTMLTableRowElement> {}

export interface TableHeaderProps
  extends HTMLAttributes<HTMLTableCellElement> {}

export interface TableBodyProps
  extends HTMLAttributes<HTMLTableSectionElement> {}

export interface TableCellProps extends HTMLAttributes<HTMLTableCellElement> {}

export interface KbdProps
  extends HTMLAttributes<HTMLElement>,
    VariantProps<typeof kbdVariants> {
  alt?: boolean;
  cmd?: boolean;
  ctrl?: boolean;
  meta?: boolean;
  shift?: boolean;
}
