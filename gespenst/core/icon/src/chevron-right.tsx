import { forwardRef } from "react";

import type { Ref, SVGProps } from "react";
/**
 * This is ChevronRight icon
 * @param ChevronRightProps - All normal SVG props are expected
 * @returns JSX.Element
 */
const ChevronRight = forwardRef(
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
        d="M5.50001 1.93933L6.03034 2.46966L10.8536 7.29288C11.2441 7.68341 11.2441 8.31657 10.8536 8.7071L6.03034 13.5303L5.50001 14.0607L4.43935 13L4.96968 12.4697L9.43935 7.99999L4.96968 3.53032L4.43935 2.99999L5.50001 1.93933Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  )
);
ChevronRight.displayName = "ChevronRight";
export { ChevronRight };