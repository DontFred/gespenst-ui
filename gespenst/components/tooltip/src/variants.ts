import { cva } from "class-variance-authority";

const tooltipVariants = cva("", {
  defaultVariants: {
    type: "primary",
  },
  variants: {
    type: {
      error: "text-white [--tooltip-background:hsl(var(--gespenst-red-700))]",
      primary:
        "text-gray-1000 [--tooltip-background:hsl(var(--gespenst-background-100))] light:dark dark:light",
      success:
        "text-white [--tooltip-background:hsl(var(--gespenst-blue-700))]",
      violet:
        "text-white [--tooltip-background:hsl(var(--gespenst-purple-700))]",
      warning:
        "text-black [--tooltip-background:hsl(var(--gespenst-amber-700))]",
    },
  },
});

export { tooltipVariants };
