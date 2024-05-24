import { forwardRef } from "react";

import type { Ref, SVGProps } from "react";
/**
 * This is PlayFill icon
 * @param PlayFillProps - All normal SVG props are expected
 * @returns JSX.Element
 */
const PlayFill = forwardRef(
  (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      height="1em"
      ref={ref}
      strokeLinejoin="round"
      viewBox="0 0 16 16"
      width="1em"
      {...props}
    >
      <path
        clipRule="evenodd"
        d="M14.5528 7.77638C14.737 7.86851 14.737 8.13147 14.5528 8.2236L1.3618 14.8191C1.19558 14.9022 1 14.7813 1 14.5955L1 1.4045C1 1.21865 1.19558 1.09778 1.3618 1.18089L14.5528 7.77638Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  )
);
PlayFill.displayName = "PlayFill";
export { PlayFill };
