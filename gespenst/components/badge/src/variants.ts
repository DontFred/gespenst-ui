import { cva } from "class-variance-authority";

const badgeVariants = cva(
  "inline-flex shrink-0 items-center whitespace-nowrap rounded-full font-medium capitalize tabular-nums",
  {
    defaultVariants: {
      size: "md",
      variant: "gray",
    },
    variants: {
      size: {
        lg: "h-8 px-3 text-sm [--gespenst-badge-icon-spacing:6px]",
        md: "h-6 px-2.5 text-xs [--gespenst-badge-icon-spacing:4px]",
        sm: "h-5 px-1.5 text-[11px] [--gespenst-badge-icon-spacing:3px]",
      },
      variant: {
        amber: "bg-amber-700 text-white",
        "amber-subtle": "bg-amber-200 text-amber-900",
        blue: "bg-blue-700 text-white",
        "blue-subtle": "bg-blue-200 text-blue-900",
        gray: "bg-gray-700 text-white",
        "gray-subtle": "bg-gray-200 text-gray-1000",
        green: "bg-green-700 text-white",
        "green-subtle": "bg-green-200 text-green-900",
        inverted: "bg-gray-1000 text-gray-100",
        pink: "bg-pink-700 text-white",
        "pink-subtle": "bg-pink-200 text-pink-900",
        purple: "bg-purple-700 text-white",
        "purple-subtle": "bg-purple-200 text-purple-900",
        red: "bg-red-700 text-white",
        "red-subtle": "bg-red-200 text-red-900",
        teal: "bg-teal-700 text-white",
        "teal-subtle": "bg-teal-200 text-teal-900",
      },
    },
  }
);

export { badgeVariants };
