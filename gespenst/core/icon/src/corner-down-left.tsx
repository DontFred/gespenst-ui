import { forwardRef } from "react";

import type { Ref, SVGProps } from "react";
/**
 * This is CornerDownLeft icon
 * @param CornerDownLeftProps - All normal SVG props are expected
 * @returns JSX.Element
 */
const CornerDownLeft = forwardRef(
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
        d="M13.5 3V2.25H15V3V10C15 10.5523 14.5523 11 14 11H3.56068L5.53035 12.9697L6.06068 13.5L5.00002 14.5607L4.46969 14.0303L1.39647 10.9571C1.00595 10.5666 1.00595 9.93342 1.39647 9.54289L4.46969 6.46967L5.00002 5.93934L6.06068 7L5.53035 7.53033L3.56068 9.5H13.5V3Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  )
);
CornerDownLeft.displayName = "CornerDownLeft";
export { CornerDownLeft };
