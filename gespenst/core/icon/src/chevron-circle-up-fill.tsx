import { forwardRef } from "react";

import type { Ref, SVGProps } from "react";
/**
 * This is ChevronCircleUpFill icon
 * @param ChevronCircleUpFillProps - All normal SVG props are expected
 * @returns JSX.Element
 */
const ChevronCircleUpFill = forwardRef(
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
        d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM4.71967 8.46967L4.18934 9L5.25 10.0607L5.78033 9.53033L8 7.31066L10.2197 9.53033L10.75 10.0607L11.8107 9L11.2803 8.46967L8.70711 5.89645C8.31658 5.50592 7.68342 5.50592 7.29289 5.89645L4.71967 8.46967Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  )
);
ChevronCircleUpFill.displayName = "ChevronCircleUpFill";
export { ChevronCircleUpFill };
