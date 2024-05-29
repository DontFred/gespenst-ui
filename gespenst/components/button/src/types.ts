import type { HTMLArkProps } from "@ark-ui/react/factory";
import type { VariantProps } from "class-variance-authority";
import type { ReactNode, RefObject } from "react";

import type { buttonVariants, iconButtonVariants } from "./variants";

export interface ButtonWOSvgProps
  extends Omit<HTMLArkProps<"button">, "prefix">,
    VariantProps<typeof buttonVariants> {
  labelClassName?: string;
  labelRef?: RefObject<HTMLSpanElement>;
  loading?: boolean;
  prefix?: ReactNode;
  suffix?: ReactNode;
  svgOnly?: undefined;
}

export interface ButtonWSvgProps
  extends Omit<HTMLArkProps<"button">, "prefix">,
    Omit<VariantProps<typeof buttonVariants>, "size">,
    VariantProps<typeof iconButtonVariants> {
  ariaLabel: string;
  labelClassName?: string;
  labelRef?: React.RefObject<HTMLSpanElement>;
  loading?: boolean;
  prefix?: undefined;
  suffix?: undefined;
  svgOnly: true;
}

export type ButtonProps = ButtonWOSvgProps | ButtonWSvgProps;
