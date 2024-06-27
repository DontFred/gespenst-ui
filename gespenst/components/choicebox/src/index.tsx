import {
  CheckboxContext as ArkCheckboxContext,
  CheckboxControl as ArkCheckboxControl,
  CheckboxHiddenInput as ArkCheckboxHiddenInput,
  CheckboxIndicator as ArkCheckboxIndicator,
  CheckboxLabel as ArkCheckboxLabel,
  CheckboxRoot as ArkCheckboxRoot,
} from "@ark-ui/react/checkbox";
import {
  RadioGroupContext as ArkRadioGroupContext,
  RadioGroupItem as ArkRadioGroupItem,
  RadioGroupItemControl as ArkRadioGroupItemControl,
  RadioGroupItemHiddenInput as ArkRadioGroupItemHiddenInput,
  RadioGroupItemText as ArkRadioGroupItemText,
} from "@ark-ui/react/radio-group";
import { RadioInvalidContext } from "@gespenst/radio";
import { Text } from "@gespenst/typo";
import { cn } from "@gespenst/utils";
import { Fragment, forwardRef, useContext } from "react";

import type { ChoiceboxRadioProps } from "./types";

/**
 * ChoiceboxRadioProps \
 * ChoiceboxRadioProps is a larger input way for radio.
 * @param ChoiceboxRadioProps - Has all Ark RadioGroupItem Props
 * @param ChoiceboxRadioProps.childrenWrapperClassName - To style the children wrapper (additional class will get merged by cn()).
 * @param ChoiceboxRadioProps.childrenWrapperRef - To get the children wrapper reference.
 * @param ChoiceboxRadioProps.className - To style the choicebox (additional class will get merged by cn()).
 * @param ChoiceboxRadioProps.controllerClassName - To style the controller (additional class will get merged by cn()).
 * @param ChoiceboxRadioProps.controllerRef - To get the controller reference.
 * @param ChoiceboxRadioProps.description - To set the description of the choicebox.
 * @param ChoiceboxRadioProps.descriptionClassName - To style the description (additional class will get merged by cn()).
 * @param ChoiceboxRadioProps.descriptionRef - To get the description reference.
 * @param ChoiceboxRadioProps.inputRef - To get the input reference.
 * @param ChoiceboxRadioProps.invalid - To set the invalid state of the choicebox.
 * @param ChoiceboxRadioProps.title - To set the title of the choicebox.
 * @param ChoiceboxRadioProps.titleClassName - To style the title (additional class will get merged by cn()).
 * @param ChoiceboxRadioProps.titleRef - To get the title reference.
 * @param ChoiceboxRadioProps.value - To set the value of the choicebox.
 * @returns JSX.Element
 * @example
 *  <ChoiceboxRadio value="option-1" title="Template"/>
 */
const ChoiceboxRadio = forwardRef<HTMLLabelElement, ChoiceboxRadioProps>(
  (
    {
      children,
      childrenWrapperClassName,
      childrenWrapperRef,
      className,
      controllerClassName,
      controllerRef,
      description,
      descriptionClassName,
      descriptionRef,
      inputRef,
      invalid,
      title,
      titleClassName,
      titleRef,
      value,
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
              "flex cursor-pointer flex-wrap items-center justify-between gap-x-6 overflow-hidden rounded-md border border-gray-400 p-3 transition-all",
              "[&:not([data-state=checked])]:[&:not([data-invalid])]:data-[hover]:border-gray-500 [&:not([data-state=checked])]:[&:not([data-invalid])]:data-[hover]:bg-gray-100",
              "[&:not([data-disabled])]:[&:not([data-invalid])]:data-[state=checked]:border-blue-900 [&:not([data-disabled])]:[&:not([data-invalid])]:data-[state=checked]:bg-blue-100 [&:not([data-disabled])]:[&:not([data-invalid])]:data-[state=checked]:text-blue-900",
              "[&:not([data-disabled])]:[&:not([data-invalid])]:data-[state=checked]:data-[hover]:bg-blue-200",
              "data-[disabled]:cursor-not-allowed data-[disabled]:select-none data-[disabled]:text-gray-500",
              "data-[invalid]:text-red-900 [&:not([data-state=checked])]:data-[invalid]:data-[hover]:border-red-500 [&:not([data-state=checked])]:data-[invalid]:data-[hover]:bg-red-100",
              "[&:not([data-disabled])]:data-[invalid]:data-[state=checked]:border-red-900 [&:not([data-disabled])]:data-[invalid]:data-[state=checked]:bg-red-100",
              className
            )}
            invalid={invalidParent ?? invalid}
            ref={ref}
            value={value}
            {...rest}
          >
            <ArkRadioGroupItemText className="group flex flex-col items-stretch justify-start gap-1">
              <Text
                as="span"
                className={titleClassName}
                ref={titleRef}
                variant="button-14"
              >
                {title}
              </Text>
              <Text
                as="span"
                className={cn(
                  "text-gray-900 group-data-[disabled]:text-current",
                  radio.value === value &&
                    "text-blue-900 group-data-[invalid]:text-red-900",
                  descriptionClassName
                )}
                ref={descriptionRef}
                variant="copy-14"
              >
                {description}
              </Text>
            </ArkRadioGroupItemText>
            <ArkRadioGroupItemControl
              className={cn(
                "peer relative aspect-square size-4 rounded-full bg-background-100 transition-all inner-border inner-border-gray-400",
                "[&:not([data-state=checked])]:[&:not([data-invalid])]:data-[hover]:inner-border-gray-700",
                "[&:not([data-disabled])]:[&:not([data-invalid])]:data-[state=checked]:inner-border-blue-900",
                "after:absolute after:left-1/2 after:top-1/2 after:size-0 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full after:bg-blue-900 after:transition-all data-[state=checked]:after:size-2",
                "data-[disabled]:inner-border-gray-500 data-[disabled]:after:bg-gray-500",
                "data-[invalid]:data-[hover]:bg-red-100 data-[invalid]:inner-border-red-900 data-[invalid]:after:bg-red-900",
                controllerClassName
              )}
              ref={controllerRef}
            />
            <ArkRadioGroupItemHiddenInput ref={inputRef} />
            {children && (
              <Fragment>
                <div className="basis-full" />
                <div
                  className={cn(
                    "-m-3 mt-3 w-[calc(100%+12px+12px)] border-t border-blue-900 bg-background-100 p-3 text-foreground transition-all",
                    "peer-[[data-hover]]:bg-gray-100",
                    "peer-data-[disabled]:border-gray-400 peer-data-[disabled]:bg-background-200 peer-data-[disabled]:text-gray-500",
                    "peer-data-[invalid]:border-red-900",
                    radio.value !== value && "invisible",
                    childrenWrapperClassName
                  )}
                  ref={childrenWrapperRef}
                >
                  {typeof children === "function" ? children(radio) : children}
                </div>
              </Fragment>
            )}
          </ArkRadioGroupItem>
        )}
      </ArkRadioGroupContext>
    );
  }
);

ChoiceboxRadio.displayName = "ChoiceboxRadio";

const ChoiceboxCheckbox = forwardRef<HTMLLabelElement, ChoiceboxRadioProps>(
  ({ ...rest }, ref) => {
    return (
      <ArkCheckboxContext>
        {(checkbox) => (
          <ArkCheckboxRoot {...rest} ref={ref}>
            <ArkCheckboxLabel></ArkCheckboxLabel>
            <ArkCheckboxControl>
              <ArkCheckboxIndicator />
            </ArkCheckboxControl>
            <ArkCheckboxHiddenInput />
          </ArkCheckboxRoot>
        )}
      </ArkCheckboxContext>
    );
  }
);

ChoiceboxCheckbox.displayName = "CheckboxCheckbox";

export { ChoiceboxCheckbox, ChoiceboxRadio };
