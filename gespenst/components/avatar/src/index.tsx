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
 * @param AvatarProps.className - To style the avatar (additional class will get merged by cn()).
 * @param AvatarProps.fallback - To show the fallback if image is not available.
 * @param AvatarProps.fallbackClassName - To style the fallback (additional class will get merged by cn()).
 * @param AvatarProps.fallbackRef - To get the fallback ref.
 * @param AvatarProps.imageClassName - To style the image (additional class will get merged by cn()).
 * @param AvatarProps.imageRef - To get the image ref.
 * @param AvatarProps.name - Name to get initials from and label.
 * @param AvatarProps.noImage - To hide the image.
 * @param AvatarProps.src - Image source.
 * @returns JSX.Element
 * @example
 *  <Avatar name="Dont Fred" src="https://github.com/1.png" />
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
          "relative flex size-8 shrink-0 items-center justify-center overflow-hidden rounded-full border border-background inner-border inner-border-gray-alpha-400",
          className
        )}
        ref={ref}
        {...rest}
      >
        <ArkAvatarFallback
          className={cn("font-sans text-xs font-semibold", fallbackClassName)}
          ref={fallbackRef}
        >
          {fallback ? fallback : getInitials(name)}
        </ArkAvatarFallback>
        {!noImage && (
          <ArkAvatarImage
            alt={name}
            className={cn(
              "aspect-square size-full object-cover",
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

/**
 * AvatarGroup \
 * AvatarGroup is used to display multiple avatars in a group with a limit.
 * @param AvatarGroupProps - Has all HTMLArkProps<"span"> Props
 * @param AvatarGroupProps.avatarClassName - To style the avatar (additional class will get merged by cn()).
 * @param AvatarGroupProps.extenderClassName - To style the extender (additional class will get merged by cn()).
 * @param AvatarGroupProps.extenderRef - To get the extender ref.
 * @param AvatarGroupProps.limit - To set the limit of avatars to display.
 * @param AvatarGroupProps.members - Array of members to display.
 * @returns JSX.Element
 * @example
 *  <AvatarGroup
 *    members={[
 *      { name: "John Doe", src: "https://github.com/1.png" },
 *      { name: "Jane Doe", src: "https://github.com/2.png" },
 *      { name: "Mario Doe", src: "https://github.com/3.png" },
 *      { name: "Luigi Doe", src: "https://github.com/4.png" },
 *    ]}
 *  />
 */
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
