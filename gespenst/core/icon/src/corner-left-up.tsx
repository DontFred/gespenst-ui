import { forwardRef } from "react";

import type { Ref, SVGProps } from "react";
/**
 * This is CornerLeftUp icon
 * @param CornerLeftUpProps - All normal SVG props are expected
 * @returns JSX.Element
 */
const CornerLeftUp = forwardRef(
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
        d="M9.78032 4.71967L10.3107 5.25L9.24999 6.31066L8.71966 5.78033L6.74999 3.81066V13.5C6.74999 13.6381 6.86192 13.75 6.99999 13.75H13.25H14V15.25H13.25H6.99999C6.03349 15.25 5.24999 14.4665 5.24999 13.5V3.81066L3.28032 5.78033L2.74999 6.31066L1.68933 5.25L2.21966 4.71967L5.46966 1.46967C5.76255 1.17678 6.23743 1.17678 6.53032 1.46967L9.78032 4.71967Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  )
);
CornerLeftUp.displayName = "CornerLeftUp";
export { CornerLeftUp };
