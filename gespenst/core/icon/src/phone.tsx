import { forwardRef } from "react";

import type { Ref, SVGProps } from "react";
/**
 * This is Phone icon
 * @param PhoneProps - All normal SVG props are expected
 * @returns JSX.Element
 */
const Phone = forwardRef(
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
        d="M5.5 1H2.87785C1.63626 1 0.694688 2.11946 0.907423 3.34268L1.14841 4.72836C1.96878 9.4455 5.51475 13.2235 10.1705 14.3409L12.5333 14.908C13.7909 15.2098 15 14.2566 15 12.9632V10.5L11.75 8.25L9.25 10.75L5.25 6.75L7.75 4.25L5.5 1Z"
        fill="transparent"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
      />
    </svg>
  )
);
Phone.displayName = "Phone";
export { Phone };
