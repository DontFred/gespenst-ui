import { forwardRef } from "react";

import type { Ref, SVGProps } from "react";
/**
 * This is ArrowCircleLeft icon
 * @param ArrowCircleLeftProps - All normal SVG props are expected
 * @returns JSX.Element
 */
const ArrowCircleLeft = forwardRef(
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
        d="M10.75 8.75H11.5V7.25H10.75H6.56066L8.03033 5.78033L8.56066 5.25L7.5 4.18934L6.96967 4.71967L4.21967 7.46967C3.92678 7.76256 3.92678 8.23744 4.21967 8.53033L6.96967 11.2803L7.5 11.8107L8.56066 10.75L8.03033 10.2197L6.56066 8.75H10.75ZM8 1.5C11.5899 1.5 14.5 4.41015 14.5 8C14.5 11.5899 11.5899 14.5 8 14.5C4.41015 14.5 1.5 11.5899 1.5 8C1.5 4.41015 4.41015 1.5 8 1.5ZM16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16C12.4183 16 16 12.4183 16 8Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  )
);
ArrowCircleLeft.displayName = "ArrowCircleLeft";
export { ArrowCircleLeft };
