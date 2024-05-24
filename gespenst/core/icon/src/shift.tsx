import { forwardRef } from "react";

import type { Ref, SVGProps } from "react";
/**
 * This is Shift icon
 * @param ShiftProps - All normal SVG props are expected
 * @returns JSX.Element
 */
const Shift = forwardRef(
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
        d="M8 0.189331L8.53033 0.719661L14.6036 6.79288C15.2335 7.42285 14.7874 8.49999 13.8964 8.49999H11V15.25V16H10.25H5.75H5V15.25V8.49999H2.10355C1.21265 8.49999 0.766481 7.42285 1.39645 6.79288L7.46967 0.719661L8 0.189331ZM3.31066 6.99999H5.75H6.5V7.74999V14.5H9.5V7.74999V6.99999H10.25H12.6893L8 2.31065L3.31066 6.99999Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  )
);
Shift.displayName = "Shift";
export { Shift };
