import { forwardRef } from "react";

import type { Ref, SVGProps } from "react";
/**
 * This is ChevronCircleDownFill icon
 * @param ChevronCircleDownFillProps - All normal SVG props are expected
 * @returns JSX.Element
 */
const ChevronCircleDownFill = forwardRef(
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
        d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM11.2803 7.53033L11.8107 7L10.75 5.93934L10.2197 6.46967L8 8.68934L5.78033 6.46967L5.25 5.93934L4.18934 7L4.71967 7.53033L7.29289 10.1036C7.68342 10.4941 8.31658 10.4941 8.70711 10.1036L11.2803 7.53033Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  )
);
ChevronCircleDownFill.displayName = "ChevronCircleDownFill";
export { ChevronCircleDownFill };
