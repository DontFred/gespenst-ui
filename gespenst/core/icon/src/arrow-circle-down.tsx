import { forwardRef } from "react";

import type { Ref, SVGProps } from "react";
/**
 * This is ArrowCircleDown icon
 * @param ArrowCircleDownProps - All normal SVG props are expected
 * @returns JSX.Element
 */
const ArrowCircleDown = forwardRef(
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
        d="M8.75 5.25V4.5H7.25V5.25V9.43934L5.78033 7.96967L5.25 7.43934L4.18934 8.5L4.71967 9.03033L7.46967 11.7803C7.76256 12.0732 8.23744 12.0732 8.53033 11.7803L11.2803 9.03033L11.8107 8.5L10.75 7.43934L10.2197 7.96967L8.75 9.43934V5.25ZM1.5 8C1.5 4.41015 4.41015 1.5 8 1.5C11.5899 1.5 14.5 4.41015 14.5 8C14.5 11.5899 11.5899 14.5 8 14.5C4.41015 14.5 1.5 11.5899 1.5 8ZM8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  )
);
ArrowCircleDown.displayName = "ArrowCircleDown";
export { ArrowCircleDown };
