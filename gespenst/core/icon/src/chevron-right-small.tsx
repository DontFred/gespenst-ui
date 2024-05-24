import { forwardRef } from "react";

import type { Ref, SVGProps } from "react";
/**
 * This is ChevronRightSmall icon
 * @param ChevronRightSmallProps - All normal SVG props are expected
 * @returns JSX.Element
 */
const ChevronRightSmall = forwardRef(
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
        d="M6.74999 3.93933L7.28032 4.46966L10.1035 7.29288C10.4941 7.68341 10.4941 8.31657 10.1035 8.7071L7.28032 11.5303L6.74999 12.0607L5.68933 11L6.21966 10.4697L8.68933 7.99999L6.21966 5.53032L5.68933 4.99999L6.74999 3.93933Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  )
);
ChevronRightSmall.displayName = "ChevronRightSmall";
export { ChevronRightSmall };
