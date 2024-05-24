import { forwardRef } from "react";

import type { Ref, SVGProps } from "react";
/**
 * This is BarChart icon
 * @param BarChartProps - All normal SVG props are expected
 * @returns JSX.Element
 */
const BarChart = forwardRef(
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
        d="M1 1v11.75A2.25 2.25 0 0 0 3.25 15H15v-1.5H3.25a.75.75 0 0 1-.75-.75V1H1Zm8.5 2.75V3H8v9h1.5V3.75ZM6 8v4H4.5V8H6Zm7-1.25V6h-1.5v6H13V6.75Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  )
);
BarChart.displayName = "BarChart";
export { BarChart };
