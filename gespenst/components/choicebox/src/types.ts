import type {
  RadioGroupContextProps as ArkRadioGroupContextProps,
  RadioGroupItemProps as ArkRadioGroupItemProps,
} from "@ark-ui/react/radio-group";
import type { ReactNode, RefObject } from "react";

export interface ChoiceboxRadioProps
  extends Omit<ArkRadioGroupItemProps, "children"> {
  children?: ArkRadioGroupContextProps["children"] | ReactNode;
  childrenWrapperClassName?: string;
  childrenWrapperRef?: RefObject<HTMLDivElement>;
  controllerClassName?: string;
  controllerRef?: RefObject<HTMLDivElement>;
  description?: string;
  descriptionClassName?: string;
  descriptionRef?: RefObject<HTMLSpanElement>;
  inputRef?: RefObject<HTMLInputElement>;
  title?: string;
  titleClassName?: string;
  titleRef?: RefObject<HTMLSpanElement>;
}
