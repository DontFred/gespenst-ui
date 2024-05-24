import { forwardRef } from "react";

import type { Ref, SVGProps } from "react";
/**
 * This is ChevronLeftSmall icon
 * @param ChevronLeftSmallProps - All normal SVG props are expected
 * @returns JSX.Element
 */
const ChevronLeftSmall = forwardRef(
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
        d="M9.24996 12.0607L8.71963 11.5303L5.89641 8.7071C5.50588 8.31657 5.50588 7.68341 5.89641 7.29288L8.71963 4.46966L9.24996 3.93933L10.3106 4.99999L9.78029 5.53032L7.31062 7.99999L9.78029 10.4697L10.3106 11L9.24996 12.0607Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  )
);
ChevronLeftSmall.displayName = "ChevronLeftSmall";
export { ChevronLeftSmall };
