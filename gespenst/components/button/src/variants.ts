import { cva } from "class-variance-authority";

const buttonVariants = cva(
  "relative flex max-w-full items-center justify-center leading-5 transition-all",
  {
    compoundVariants: [
      {
        className: "rounded-full",
        shape: "round",
      },
    ],
    defaultVariants: {
      size: "md",
      variant: "primary",
    },
    variants: {
      shape: {
        angular: "",
        round: "",
      },
      size: {
        lg: "h-12 rounded-lg px-3.5 leading-6",
        md: "h-10 rounded-md px-2.5",
        sm: "h-8 rounded-md px-1.5",
      },
      variant: {
        error: "bg-red-800 text-gray-1000 hover:bg-red-900",
        primary:
          "bg-gray-1000 text-background-100 inner-border inner-border-transparent hover:bg-[#ccc] hover:inner-border-gray-200",
        secondary:
          "bg-background-100 text-gray-1000 inner-border hover:bg-gray-alpha-200",
        tertiary: "bg-transparent text-gray-1000 hover:bg-gray-alpha-200",
        warning: "bg-amber-800 text-background-100 hover:bg-[#d27504]",
      },
    },
  }
);

const iconButtonVariants = cva("", {
  defaultVariants: {
    size: "md",
  },
  variants: {
    size: {
      lg: "size-12 p-0",
      md: "size-10 p-0",
      sm: "size-8 p-0",
      xs: "size-6 p-0",
    },
  },
});

export { buttonVariants, iconButtonVariants };
