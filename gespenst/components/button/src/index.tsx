import { ark } from "@ark-ui/react/factory";
import { Spinner } from "@gespenst/spinner";
import { Text } from "@gespenst/typo";
import { cn } from "@gespenst/utils";
import { forwardRef } from "react";

import { buttonVariants, iconButtonVariants } from "./variants";

import type { ComponentProps } from "react";

import type { ButtonProps } from "./types";

/**
 * Button \
 * Button is used to trigger an action.
 * @param ButtonProps - Has all HTMLButtonElement Props
 * @param ButtonProps.className - To style the button (additional class will get merged by cn()).
 * @param ButtonProps.disabled - To disable the button.
 * @param ButtonProps.labelClassName - To style the label (additional class will get merged by cn()).
 * @param ButtonProps.labelRef - To get the label ref.
 * @param ButtonProps.loading - To indicate loading state.
 * @param ButtonProps.prefix - To add prefix icon.
 * @param ButtonProps.shape - To set the button shape (angular, round).
 * @param ButtonProps.size - To set the button size (xs*, sm, md, lg). *xs is only for icon button.
 * @param ButtonProps.suffix - To add suffix icon.
 * @param ButtonProps.svgOnly - To set the button as icon button.
 * @param ButtonProps.variant - To set the button variant (primary, secondary, tertiary, error, warning).
 * @returns JSX.Element
 * @example
 *  <Button>Hello</Button>
 */
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      "aria-busy": ariaBusy,
      children,
      className,
      disabled,
      labelClassName,
      labelRef,
      loading,
      prefix,
      shape,
      size,
      suffix,
      svgOnly,
      variant,
      ...rest
    },
    ref
  ) => {
    const textVariant: ComponentProps<typeof Text>["variant"] =
      size === "lg" ? "button-16" : "button-14";

    const loadingDisabledClassName =
      "bg-gray-100 text-gray-700 inner-border inner-border-gray-400 cursor-not-allowed select-none";

    return (
      <ark.button
        aria-busy={loading ?? ariaBusy}
        className={cn(
          buttonVariants({ shape, size: !svgOnly ? size : undefined, variant }),
          svgOnly && iconButtonVariants({ size }),
          (loading ?? disabled) && loadingDisabledClassName,
          className
        )}
        disabled={disabled ?? loading}
        ref={ref}
        {...rest}
      >
        {!loading && prefix && (
          <span className="mr-0.5 flex min-w-5 shrink-0 items-center justify-center">
            {prefix}
          </span>
        )}
        {loading && !svgOnly && (
          <span className="mr-0.5 flex min-w-5 shrink-0 items-center justify-center">
            <Spinner className={cn(size === "lg" ? "size-6" : "size-4")} />
          </span>
        )}
        <Text
          as="span"
          className={cn(
            "inline-block truncate px-1.5",
            svgOnly && "flex items-center justify-center",
            labelClassName
          )}
          ref={labelRef}
          variant={textVariant}
        >
          {loading && svgOnly ? (
            <Spinner className={cn(size === "lg" ? "size-6" : "size-4")} />
          ) : (
            children
          )}
        </Text>
        {!loading && suffix && (
          <span className="ml-0.5 flex min-w-5 shrink-0 items-center justify-center">
            {suffix}
          </span>
        )}
      </ark.button>
    );
  }
);

Button.displayName = "Button";

export { Button };
