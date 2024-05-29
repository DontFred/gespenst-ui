import {
  AvatarFallback as ArkAvatarFallback,
  AvatarImage as ArkAvatarImage,
  AvatarRoot as ArkAvatarRoot,
} from "@ark-ui/react/avatar";
import { ark } from "@ark-ui/react/factory";
import { cn } from "@gespenst/utils";
import { forwardRef } from "react";

import type { AvatarGroupProps, AvatarProps } from "./types";

/**
 * getInitials \
 * getInitials is used to get the initials from the name by splitting the name and getting the first letter of each part.
 * @param name - Name to get initials from.
 * @returns string
 */
function getInitials(name = "") {
  return name
    .split(" ")
    .map((part) => part[0])
    .splice(0, 2)
    .join("")
    .toUpperCase();
}

/**
 * Avatar \
 * Avatar is used to display an image with an fallback if loading or errored. Mainly for User indication.
 * @param AvatarProps - Has all HTMLArkProps<"div"> Props
 * @param AvatarProps.className - To style the avatar, mainly for size and color (additional class will get merged by cn()).
 * @returns JSX.Element
 * @example
 *  <Avatar>
 *    Template
 *  </Avatar>
 */
const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
  (
    {
      "aria-label": ariaLabel,
      className,
      fallback,
      fallbackClassName,
      fallbackRef,
      imageClassName,
      imageRef,
      name,
      noImage,
      src,
      ...rest
    },
    ref
  ) => {
    return (
      <ArkAvatarRoot
        aria-label={`Avatar for ${name}` ?? ariaLabel}
        className={cn(
          "relative flex border border-background inner-border inner-border-gray-alpha-400 justify-center items-center size-8 shrink-0 overflow-hidden rounded-full",
          className
        )}
        ref={ref}
        {...rest}
      >
        <ArkAvatarFallback
          className={cn("font-sans font-semibold text-xs", fallbackClassName)}
          ref={fallbackRef}
        >
          {fallback ? fallback : getInitials(name)}
        </ArkAvatarFallback>
        {!noImage && (
          <ArkAvatarImage
            alt={name}
            className={cn(
              "aspect-square h-full w-full object-cover",
              imageClassName
            )}
            ref={imageRef}
            src={src}
          />
        )}
      </ArkAvatarRoot>
    );
  }
);

Avatar.displayName = "Avatar";

const AvatarGroup = forwardRef<HTMLSpanElement, AvatarGroupProps>(
  (
    {
      avatarClassName,
      className,
      extenderClassName,
      extenderRef,
      limit = Infinity,
      ...rest
    },
    ref
  ) => {
    return (
      <ark.span className={cn("flex", className)} ref={ref} {...rest}>
        {rest.members.slice(0, limit).map((member, index) => (
          <Avatar
            className={cn("[&:not(:first-child)]:-ml-2.5", avatarClassName)}
            key={index}
            {...member}
          />
        ))}
        {rest.members.length > limit && (
          <Avatar
            aria-label={`${rest.members.length - limit} more members`}
            className={cn(
              "bg-background-100 [&:not(:first-child)]:-ml-2.5",
              extenderClassName
            )}
            fallback={`+${rest.members.length - limit}`}
            noImage
            ref={extenderRef}
          />
        )}
      </ark.span>
    );
  }
);

AvatarGroup.displayName = "AvatarGroup";

export { Avatar, AvatarGroup };
