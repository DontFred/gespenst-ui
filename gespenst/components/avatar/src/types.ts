import type { AvatarRootProps as ArkAvatarRootProps } from "@ark-ui/react/avatar";
import type { HTMLArkProps } from "@ark-ui/react/factory";
import type { RefObject } from "react";

interface Member {
  fallback?: string;
  name?: string;
  src?: string;
}

export interface AvatarProps extends ArkAvatarRootProps, Member {
  fallbackClassName?: string;
  fallbackRef?: RefObject<HTMLSpanElement>;
  imageClassName?: string;
  imageRef?: RefObject<HTMLImageElement>;
  noImage?: boolean;
}

export interface AvatarGroupProps extends HTMLArkProps<"span"> {
  avatarClassName?: string;
  extenderClassName?: string;
  extenderRef?: RefObject<HTMLDivElement>;
  limit?: number;
  members: Member[];
}
