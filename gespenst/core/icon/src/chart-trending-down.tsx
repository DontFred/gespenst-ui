import { forwardRef } from "react";

import type { Ref, SVGProps } from "react";
/**
 * This is ChartTrendingDown icon
 * @param ChartTrendingDownProps - All normal SVG props are expected
 * @returns JSX.Element
 */
const ChartTrendingDown = forwardRef(
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
        d="M13.4382 11.5H10.8242H10.0742V13H10.8242H14.9988C15.5511 13 15.9988 12.5523 15.9988 12V7.82537V7.07537H14.4988V7.82537V10.4393L9.20706 5.14755C8.81659 4.75708 8.18353 4.75702 7.79298 5.14742L5.50009 7.43942L1.78032 3.71966L1.24999 3.18933L0.189331 4.24999L0.719662 4.78032L4.79292 8.85357C5.18339 9.24404 5.81645 9.2441 6.207 8.8537L8.49989 6.5617L13.4382 11.5Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  )
);
ChartTrendingDown.displayName = "ChartTrendingDown";
export { ChartTrendingDown };
