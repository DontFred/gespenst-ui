import { forwardRef } from "react";

import type { Ref, SVGProps } from "react";
/**
 * This is ChevronDoubleLeft icon
 * @param ChevronDoubleLeftProps - All normal SVG props are expected
 * @returns JSX.Element
 */
const ChevronDoubleLeft = forwardRef(
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
        d="M3.14647 7.2929C2.75595 7.68343 2.75595 8.31659 3.14647 8.70712L6.96969 12.5303L7.50002 13.0607L8.56068 12L8.03035 11.4697L4.56068 8.00001L8.03035 4.53034L8.56068 4.00001L7.50002 2.93935L6.96969 3.46968L3.14647 7.2929ZM8.14647 7.2929C7.75595 7.68343 7.75595 8.31659 8.14647 8.70712L11.9697 12.5303L12.5 13.0607L13.5607 12L13.0304 11.4697L9.56068 8.00001L13.0304 4.53034L13.5607 4.00001L12.5 2.93935L11.9697 3.46968L8.14647 7.2929Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  )
);
ChevronDoubleLeft.displayName = "ChevronDoubleLeft";
export { ChevronDoubleLeft };
