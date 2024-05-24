import { forwardRef } from "react";

import type { Ref, SVGProps } from "react";
/**
 * This is ChevronCircleDown icon
 * @param ChevronCircleDownProps - All normal SVG props are expected
 * @returns JSX.Element
 */
const ChevronCircleDown = forwardRef(
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
        d="M1.5 8C1.5 4.41015 4.41015 1.5 8 1.5C11.5899 1.5 14.5 4.41015 14.5 8C14.5 11.5899 11.5898 14.5 8 14.5C4.41015 14.5 1.5 11.5898 1.5 8ZM8 -3.49691e-07C3.58172 -5.4282e-07 -1.56562e-07 3.58172 -3.49691e-07 8C-5.4282e-07 12.4183 3.58172 16 8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 -1.56562e-07 8 -3.49691e-07ZM4.71967 7.53033L7.29996 10.1106C7.68658 10.4972 8.31342 10.4972 8.70004 10.1106L11.2803 7.53033L11.8107 7L10.75 5.93934L10.2197 6.46967L8 8.68934L5.78033 6.46967L5.25 5.93934L4.18934 7L4.71967 7.53033Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  )
);
ChevronCircleDown.displayName = "ChevronCircleDown";
export { ChevronCircleDown };