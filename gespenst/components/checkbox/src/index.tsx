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
 * @param CheckboxProps - Has all HTMLArkProps<"div"> Props
 * @param CheckboxProps.className - To style the checkbox (additional class will get merged by cn()).
 * @returns JSX.Element
 * @example
 *  <Checkbox>
 *    Template
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
          className
        )}
        ref={ref}
        {...rest}
      >
        <ArkCheckboxControl
          className={cn(
            "relative inline-flex size-4 items-center justify-center rounded border border-gray-700 bg-background-100 transition-all",
            " data-[state=checked]:border-gray-1000 data-[state=checked]:bg-gray-1000 [&:not([data-state=checked])]:data-[hover]:bg-gray-100",
            "data-[disabled]:border-gray-500 data-[disabled]:data-[state=checked]:border-gray-600 data-[disabled]:bg-gray-100 data-[disabled]:data-[state=checked]:bg-gray-600",
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
                className={cn("ml-2", labelClassName)}
                ref={labelRef}
                variant="label-13"
              >
                {typeof children === "function" ? children(checkbox) : children}
              </Text>
            </ArkCheckboxLabel>
          )}
        </ArkCheckboxContext>
        <ArkCheckboxHiddenInput />
      </ArkCheckboxRoot>
    );
  }
);

Checkbox.displayName = "Checkbox";

export { Checkbox };
