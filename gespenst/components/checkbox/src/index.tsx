"use client";

import {
  CheckboxContext as ArkCheckboxContext,
  CheckboxControl as ArkCheckboxControl,
  CheckboxHiddenInput as ArkCheckboxHiddenInput,
  CheckboxIndicator as ArkCheckboxIndicator,
  CheckboxLabel as ArkCheckboxLabel,
  CheckboxRoot as ArkCheckboxRoot,
} from "@ark-ui/react/checkbox";
import { Text } from "@gespenst/typo";
import { cn } from "@gespenst/utils";
import { forwardRef } from "react";

import type { CheckboxProps } from "./types";

/**
 * Checkbox \
 * Checkbox is to indicate/toggle a boolean state
 * @param CheckboxProps - Has all Ark CheckboxRoot Props
 * @param CheckboxProps.className - To style the checkbox (additional class will get merged by cn()).
 * @param CheckboxProps.controllerClassName - To style the controller (additional class will get merged by cn()).
 * @param CheckboxProps.controllerRef - To get the reference of the controller.
 * @param CheckboxProps.indicatorCheckClassName - To style the check indicator (additional class will get merged by cn()).
 * @param CheckboxProps.indicatorCheckRef - To get the reference of the check indicator.
 * @param CheckboxProps.indicatorIndeterminateClassName - To style the indeterminate indicator (additional class will get merged by cn()).
 * @param CheckboxProps.indicatorIndeterminateRef - To get the reference of the indeterminate indicator.
 * @param CheckboxProps.labelClassName - To style the label (additional class will get merged by cn()).
 * @param CheckboxProps.labelRef - To get the reference of the label.
 * @param CheckboxProps.children - To render the children, can be a function to get the checkbox state.
 * @returns JSX.Element
 * @example
 *  <Checkbox>
 *    Label
 *  </Checkbox>
 */
const Checkbox = forwardRef<HTMLLabelElement, CheckboxProps>(
  (
    {
      children,
      className,
      controllerClassName,
      controllerRef,
      indicatorCheckClassName,
      indicatorCheckRef,
      indicatorIndeterminateClassName,
      indicatorIndeterminateRef,
      inputRef,
      labelClassName,
      labelRef,
      ...rest
    },
    ref
  ) => {
    return (
      <ArkCheckboxRoot
        className={cn(
          "inline-flex cursor-pointer items-center",
          "data-[disabled]:cursor-not-allowed data-[disabled]:select-none data-[disabled]:text-gray-500",
          "data-[invalid]:text-red-900",
          className
        )}
        ref={ref}
        {...rest}
      >
        <ArkCheckboxControl
          className={cn(
            "relative inline-flex size-4 items-center justify-center rounded border border-gray-700 bg-background-100 transition-all",
            "ring-offset-background focus-visible:outline-none data-[focus]:bg-gray-100 data-[focus]:ring-2 data-[focus]:ring-blue-900 data-[focus]:ring-offset-2",
            " [&:not([data-state=checked])]:[&:not([data-invalid])]:data-[hover]:bg-gray-100",
            "data-[state=checked]:border-gray-1000 data-[state=checked]:bg-gray-1000",
            "data-[disabled]:border-gray-500 data-[disabled]:data-[state=checked]:border-gray-600 data-[disabled]:bg-gray-100 data-[disabled]:data-[state=checked]:bg-gray-600",
            "data-[invalid]:border-red-900 data-[invalid]:data-[state=checked]:border-red-900 data-[invalid]:data-[hover]:bg-red-100 data-[invalid]:data-[state=checked]:bg-red-900",
            controllerClassName
          )}
          ref={controllerRef}
        >
          <ArkCheckboxIndicator
            className={cn("text-background", indicatorCheckClassName)}
            ref={indicatorCheckRef}
          >
            <svg fill="none" height="16" viewBox="0 0 20 20" width="16">
              <path
                d="M14 7L8.5 12.5L6 10"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          </ArkCheckboxIndicator>
          <ArkCheckboxIndicator
            className={cn(
              "text-gray-700",
              "data-[disabled]:text-gray-500",
              "data-[invalid]:text-red-900",
              indicatorIndeterminateClassName
            )}
            indeterminate
            ref={indicatorIndeterminateRef}
          >
            <svg fill="none" height="16" viewBox="0 0 20 20" width="16">
              <line
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                x1="5"
                x2="15"
                y1="10"
                y2="10"
              />
            </svg>
          </ArkCheckboxIndicator>
        </ArkCheckboxControl>
        <ArkCheckboxContext>
          {(checkbox) => (
            <ArkCheckboxLabel className="inline-flex">
              <Text
                as="span"
                className={cn("ml-2 transition-colors", labelClassName)}
                ref={labelRef}
                variant="label-13"
              >
                {typeof children === "function" ? children(checkbox) : children}
              </Text>
            </ArkCheckboxLabel>
          )}
        </ArkCheckboxContext>
        <ArkCheckboxHiddenInput ref={inputRef} />
      </ArkCheckboxRoot>
    );
  }
);

Checkbox.displayName = "Checkbox";

export { Checkbox };
