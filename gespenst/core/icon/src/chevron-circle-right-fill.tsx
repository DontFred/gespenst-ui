import { forwardRef } from "react";

import type { Ref, SVGProps } from "react";
/**
 * This is ChevronCircleRightFill icon
 * @param ChevronCircleRightFillProps - All normal SVG props are expected
 * @returns JSX.Element
 */
const ChevronCircleRightFill = forwardRef(
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
        d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM7.53033 4.71967L7 4.18934L5.93934 5.25L6.46967 5.78033L8.68934 8L6.46967 10.2197L5.93934 10.75L7 11.8107L7.53033 11.2803L10.1036 8.70711C10.4941 8.31658 10.4941 7.68342 10.1036 7.29289L7.53033 4.71967Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  )
);
ChevronCircleRightFill.displayName = "ChevronCircleRightFill";
export { ChevronCircleRightFill };
