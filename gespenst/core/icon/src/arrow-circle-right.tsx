import { forwardRef } from "react";

import type { Ref, SVGProps } from "react";
/**
 * This is ArrowCircleRight icon
 * @param ArrowCircleRightProps - All normal SVG props are expected
 * @returns JSX.Element
 */
const ArrowCircleRight = forwardRef(
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
        d="M5.25 7.25H4.5V8.75H5.25H9.43934L7.96967 10.2197L7.43934 10.75L8.5 11.8107L9.03033 11.2803L11.7803 8.53033C12.0732 8.23744 12.0732 7.76256 11.7803 7.46967L9.03033 4.71967L8.5 4.18934L7.43934 5.25L7.96967 5.78033L9.43934 7.25H5.25ZM8 14.5C4.41015 14.5 1.5 11.5899 1.5 8C1.5 4.41015 4.41015 1.5 8 1.5C11.5899 1.5 14.5 4.41015 14.5 8C14.5 11.5899 11.5899 14.5 8 14.5ZM0 8C0 12.4183 3.58172 16 8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  )
);
ArrowCircleRight.displayName = "ArrowCircleRight";
export { ArrowCircleRight };
