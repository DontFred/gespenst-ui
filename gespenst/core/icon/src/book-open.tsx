import { forwardRef } from "react";

import type { Ref, SVGProps } from "react";
/**
 * This is BookOpen icon
 * @param BookOpenProps - All normal SVG props are expected
 * @returns JSX.Element
 */
const BookOpen = forwardRef(
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
        d="M0 1H0.75H5C6.2267 1 7.31583 1.58901 8 2.49963C8.68417 1.58901 9.7733 1 11 1H15.25H16V1.75V13V13.75H15.25H10.7426C10.1459 13.75 9.57361 13.9871 9.15165 14.409L8.53033 15.0303H7.46967L6.84835 14.409C6.42639 13.9871 5.8541 13.75 5.25736 13.75H0.75H0V13V1.75V1ZM7.25 4.75C7.25 3.50736 6.24264 2.5 5 2.5H1.5V12.25H5.25736C5.96786 12.25 6.65758 12.4516 7.25 12.8232V4.75ZM8.75 12.8232V4.75C8.75 3.50736 9.75736 2.5 11 2.5H14.5V12.25H10.7426C10.0321 12.25 9.34242 12.4516 8.75 12.8232Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  )
);
BookOpen.displayName = "BookOpen";
export { BookOpen };