import { forwardRef } from "react";

import type { Ref, SVGProps } from "react";
/**
 * This is CornerLeftDown icon
 * @param CornerLeftDownProps - All normal SVG props are expected
 * @returns JSX.Element
 */
const CornerLeftDown = forwardRef(
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
        d="M13.25 2.75H14V1.25H13.25H6.99999C6.03349 1.25 5.24999 2.0335 5.24999 3V12.6893L3.28032 10.7197L2.74999 10.1893L1.68933 11.25L2.21966 11.7803L5.46966 15.0303C5.76255 15.3232 6.23743 15.3232 6.53032 15.0303L9.78032 11.7803L10.3107 11.25L9.24999 10.1893L8.71966 10.7197L6.74999 12.6893V3C6.74999 2.86193 6.86192 2.75 6.99999 2.75H13.25Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  )
);
CornerLeftDown.displayName = "CornerLeftDown";
export { CornerLeftDown };