import {
  RadioGroupContext as ArkRadioGroupContext,
  RadioGroupItem as ArkRadioGroupItem,
  RadioGroupItemControl as ArkRadioGroupItemControl,
  RadioGroupItemHiddenInput as ArkRadioGroupItemHiddenInput,
  RadioGroupItemText as ArkRadioGroupItemText,
  RadioGroupRoot as ArkRadioGroupRoot,
} from "@ark-ui/react/radio-group";
import { Text } from "@gespenst/typo";
import { cn } from "@gespenst/utils";
import { createContext, forwardRef, useContext } from "react";

import type { RadioGroupProps, RadioProps } from "./types";

const RadioInvalidContext = createContext<boolean | undefined>(undefined);

/**
 * RadioGroup \
 * RadioGroup is the parent component for Radio Item
 */
const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>(
  ({ invalid, ...rest }, ref) => {
    return (
      <RadioInvalidContext.Provider value={invalid}>
        <ArkRadioGroupRoot data-invalid={invalid} ref={ref} {...rest} />
      </RadioInvalidContext.Provider>
    );
  }
);

RadioGroup.displayName = "RadioGroup";

/**
 * Radio Item \
 * Radio Item is the input component for Radio
 * @param RadioProps - Has all HTMLArkProps<"span"> Props
 * @param RadioProps.className - To style the radio (additional class will get merged by cn()).
 * @returns JSX.Element
 * @example
 *  <Radio>
 *    Template
 *  </Radio>
 */
const RadioItem = forwardRef<HTMLLabelElement, RadioProps>(
  (
    {
      children,
      className,
      controllerClassName,
      controllerRef,
      inputRef,
      invalid,
      labelClassName,
      labelRef,
      ...rest
    },
    ref
  ) => {
    const invalidParent = useContext(RadioInvalidContext);

    return (
      <ArkRadioGroupContext>
        {(radio) => (
          <ArkRadioGroupItem
            className={cn(
              "flex cursor-pointer items-center",
              "data-[disabled]:cursor-not-allowed data-[disabled]:select-none data-[disabled]:text-gray-500",
              "data-[invalid]:text-red-900",
              className
            )}
            invalid={invalidParent ?? invalid}
            ref={ref}
            {...rest}
          >
            <ArkRadioGroupItemControl
              className={cn(
                "relative size-4 rounded-full bg-background-100 transition-all inner-border inner-border-gray-700",
                "[&:not([data-state=checked])]:[&:not([data-invalid])]:data-[hover]:bg-gray-100",
                "[&:not([data-disabled])]:[&:not([data-invalid])]:data-[state=checked]:inner-border-gray-1000",
                "after:absolute after:left-1/2 after:top-1/2 after:size-0 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full after:bg-gray-1000 after:transition-all data-[state=checked]:after:size-2",
                "data-[disabled]:inner-border-gray-500 data-[disabled]:after:bg-gray-500",
                "data-[invalid]:data-[hover]:bg-red-100 data-[invalid]:inner-border-red-900 data-[invalid]:after:bg-red-900",
                controllerClassName
              )}
              ref={controllerRef}
            />
            <ArkRadioGroupItemHiddenInput ref={inputRef} />
            <ArkRadioGroupItemText className="inline-flex">
              <Text
                as="span"
                className={cn("ml-2 transition-colors", labelClassName)}
                ref={labelRef}
              >
                {typeof children === "function" ? children(radio) : children}
              </Text>
            </ArkRadioGroupItemText>
          </ArkRadioGroupItem>
        )}
      </ArkRadioGroupContext>
    );
  }
);

RadioItem.displayName = "RadioItem";

export { RadioGroup, RadioItem };
