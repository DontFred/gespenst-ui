import { forwardRef } from "react";

import type { Ref, SVGProps } from "react";
/**
 * This is CrossCircle icon
 * @param CrossCircleProps - All normal SVG props are expected
 * @returns JSX.Element
 */
const CrossCircle = forwardRef(
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
        d="M14.5 8C14.5 11.5899 11.5899 14.5 8 14.5C4.41015 14.5 1.5 11.5899 1.5 8C1.5 4.41015 4.41015 1.5 8 1.5C11.5899 1.5 14.5 4.41015 14.5 8ZM16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM5.5 11.5607L6.03033 11.0303L8 9.06066L9.96967 11.0303L10.5 11.5607L11.5607 10.5L11.0303 9.96967L9.06066 8L11.0303 6.03033L11.5607 5.5L10.5 4.43934L9.96967 4.96967L8 6.93934L6.03033 4.96967L5.5 4.43934L4.43934 5.5L4.96967 6.03033L6.93934 8L4.96967 9.96967L4.43934 10.5L5.5 11.5607Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  )
);
CrossCircle.displayName = "CrossCircle";
export { CrossCircle };
