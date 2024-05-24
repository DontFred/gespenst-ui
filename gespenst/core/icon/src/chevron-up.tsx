import { forwardRef } from "react";

import type { Ref, SVGProps } from "react";
/**
 * This is ChevronUp icon
 * @param ChevronUpProps - All normal SVG props are expected
 * @returns JSX.Element
 */
const ChevronUp = forwardRef(
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
        d="M1.93935 10.5L2.46968 9.96966L7.2929 5.14644C7.68342 4.75592 8.31659 4.75592 8.70711 5.14644L13.5303 9.96966L14.0607 10.5L13 11.5607L12.4697 11.0303L8 6.56065L3.53034 11.0303L3.00001 11.5607L1.93935 10.5Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  )
);
ChevronUp.displayName = "ChevronUp";
export { ChevronUp };
