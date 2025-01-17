import { forwardRef } from "react";

import type { Ref, SVGProps } from "react";
/**
 * This is ChevronLeft icon
 * @param ChevronLeftProps - All normal SVG props are expected
 * @returns JSX.Element
 */
const ChevronLeft = forwardRef(
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
        d="M10.5 14.0607L9.96966 13.5303L5.14644 8.7071C4.75592 8.31658 4.75592 7.68341 5.14644 7.29289L9.96966 2.46966L10.5 1.93933L11.5607 2.99999L11.0303 3.53032L6.56065 7.99999L11.0303 12.4697L11.5607 13L10.5 14.0607Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  )
);
ChevronLeft.displayName = "ChevronLeft";
export { ChevronLeft };
