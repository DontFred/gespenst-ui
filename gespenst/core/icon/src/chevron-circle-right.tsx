import { forwardRef } from "react";

import type { Ref, SVGProps } from "react";
/**
 * This is ChevronCircleRight icon
 * @param ChevronCircleRightProps - All normal SVG props are expected
 * @returns JSX.Element
 */
const ChevronCircleRight = forwardRef(
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
        d="M8 14.5C4.41015 14.5 1.5 11.5899 1.5 8C1.5 4.41015 4.41015 1.5 8 1.5C11.5899 1.5 14.5 4.41015 14.5 8C14.5 11.5899 11.5899 14.5 8 14.5ZM0 8C0 12.4183 3.58172 16 8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8ZM7.53033 11.2803L10.1106 8.70004C10.4972 8.31342 10.4972 7.68658 10.1106 7.29996L7.53033 4.71967L7 4.18934L5.93934 5.25L6.46967 5.78033L8.68934 8L6.46967 10.2197L5.93934 10.75L7 11.8107L7.53033 11.2803Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  )
);
ChevronCircleRight.displayName = "ChevronCircleRight";
export { ChevronCircleRight };
