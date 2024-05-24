import { forwardRef } from "react";

import type { Ref, SVGProps } from "react";
/**
 * This is Gps icon
 * @param GpsProps - All normal SVG props are expected
 * @returns JSX.Element
 */
const Gps = forwardRef(
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
        d="M1 6L15 1L10 15L7.65955 8.91482C7.55797 8.65073 7.34927 8.44203 7.08518 8.34045L1 6Z"
        fill="transparent"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="bevel"
        strokeWidth={1.5}
      />
    </svg>
  )
);
Gps.displayName = "Gps";
export { Gps };
