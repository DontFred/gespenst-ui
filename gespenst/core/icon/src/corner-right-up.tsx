import { forwardRef } from "react";

import type { Ref, SVGProps } from "react";
/**
 * This is CornerRightUp icon
 * @param CornerRightUpProps - All normal SVG props are expected
 * @returns JSX.Element
 */
const CornerRightUp = forwardRef(
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
        d="M6.21967 4.71967L5.68934 5.25L6.75 6.31066L7.28033 5.78033L9.25 3.81066V13.5C9.25 13.6381 9.13807 13.75 9 13.75H2.75H2V15.25H2.75H9C9.9665 15.25 10.75 14.4665 10.75 13.5V3.81066L12.7197 5.78033L13.25 6.31066L14.3107 5.25L13.7803 4.71967L10.5303 1.46967C10.2374 1.17678 9.76256 1.17678 9.46967 1.46967L6.21967 4.71967Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  )
);
CornerRightUp.displayName = "CornerRightUp";
export { CornerRightUp };
