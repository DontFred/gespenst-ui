import type {
  RadioGroupContextProps as ArkRadioGroupContextProps,
  RadioGroupItemProps as ArkRadioGroupItemProps,
  RadioGroupRootProps as ArkRadioGroupRootProps,
} from "@ark-ui/react/radio-group";
import type { ReactNode, RefObject } from "react";

export interface RadioGroupProps extends ArkRadioGroupRootProps {
  invalid?: boolean;
  label?: string;
}

export interface RadioProps extends Omit<ArkRadioGroupItemProps, "children"> {
  children?: ArkRadioGroupContextProps["children"] | ReactNode;
  controllerClassName?: string;
  controllerRef?: RefObject<HTMLDivElement>;
  inputRef?: RefObject<HTMLInputElement>;
  labelClassName?: string;
  labelRef?: RefObject<HTMLSpanElement>;
}
