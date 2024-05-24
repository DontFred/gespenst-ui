import { forwardRef } from "react";

import type { Ref, SVGProps } from "react";
/**
 * This is MinusSquareSmall icon
 * @param MinusSquareSmallProps - All normal SVG props are expected
 * @returns JSX.Element
 */
const MinusSquareSmall = forwardRef(
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
        d="M5 4.25H11C11.4142 4.25 11.75 4.58579 11.75 5V11C11.75 11.4142 11.4142 11.75 11 11.75H5C4.58579 11.75 4.25 11.4142 4.25 11V5C4.25 4.58579 4.58579 4.25 5 4.25ZM3 5C3 3.89543 3.89543 3 5 3H11C12.1046 3 13 3.89543 13 5V11C13 12.1046 12.1046 13 11 13H5C3.89543 13 3 12.1046 3 11V5ZM6.25 7.375H5.625V8.625H6.25H9.75H10.375V7.375H9.75H6.25Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  )
);
MinusSquareSmall.displayName = "MinusSquareSmall";
export { MinusSquareSmall };
