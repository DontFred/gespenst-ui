import type {
  CheckboxContextProps as ArkCheckboxContextProps,
  CheckboxRootProps as ArkCheckboxRootProps,
} from "@ark-ui/react/checkbox";
import type { HTMLArkProps } from "@ark-ui/react/factory";
import type { ReactNode, RefObject } from "react";

export interface CheckboxGroupProps extends HTMLArkProps<"div"> {
  disabled?: boolean;
  invalid?: boolean;
  label?: string;
  labelClassName?: string;
  labelRef?: RefObject<HTMLLabelElement>;
  labelTextClassName?: string;
  labelTextRef?: RefObject<HTMLSpanElement>;
  orientation?: "horizontal" | "vertical";
}

export interface CheckboxProps extends Omit<ArkCheckboxRootProps, "children"> {
  asChild?: undefined;
  children?: ArkCheckboxContextProps["children"] | ReactNode;
  controllerClassName?: string;
  controllerRef?: RefObject<HTMLDivElement>;
  indicatorCheckClassName?: string;
  indicatorCheckRef?: RefObject<HTMLDivElement>;
  indicatorIndeterminateClassName?: string;
  indicatorIndeterminateRef?: RefObject<HTMLDivElement>;
  inputRef?: RefObject<HTMLInputElement>;
  labelClassName?: string;
  labelRef?: RefObject<HTMLSpanElement>;
}
