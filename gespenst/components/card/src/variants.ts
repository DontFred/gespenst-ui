import { cva } from "class-variance-authority";

export const cardVariants = cva(
  "overflow-hidden bg-background-100 inner-border",
  {
    defaultVariants: {
      padding: "md",
      rounded: "md",
    },
    variants: {
      padding: {
        lg: "p-6",
        md: "p-4",
        none: "p-0",
      },
      rounded: {
        lg: "rounded-xl",
        md: "rounded-lg",
        none: "rounded-none",
        sm: "rounded-md",
        xs: "rounded-sm",
      },
    },
  }
);
