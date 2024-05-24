import { forwardRef } from "react";

import type { Ref, SVGProps } from "react";
/**
 * This is ChartTrendingUp icon
 * @param ChartTrendingUpProps - All normal SVG props are expected
 * @returns JSX.Element
 */
const ChartTrendingUp = forwardRef(
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
        d="M10.8242 3H10.0742V4.5H10.8242H13.4382L8.49989 9.43829L6.207 7.14629C5.81645 6.75589 5.18339 6.75595 4.79292 7.14642L0.719662 11.2197L0.189331 11.75L1.24999 12.8107L1.78032 12.2803L5.50009 8.56057L7.79298 10.8526C8.18353 11.243 8.81659 11.2429 9.20706 10.8524L14.4988 5.56066V8.17462V8.92462H15.9988V8.17462V4C15.9988 3.44772 15.5511 3 14.9988 3H10.8242Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  )
);
ChartTrendingUp.displayName = "ChartTrendingUp";
export { ChartTrendingUp };