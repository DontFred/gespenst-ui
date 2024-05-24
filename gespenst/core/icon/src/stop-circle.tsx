import { forwardRef } from "react";

import type { Ref, SVGProps } from "react";
/**
 * This is StopCircle icon
 * @param StopCircleProps - All normal SVG props are expected
 * @returns JSX.Element
 */
const StopCircle = forwardRef(
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
        d="M14.5 8C14.5 11.5899 11.5899 14.5 8 14.5C4.41015 14.5 1.5 11.5899 1.5 8C1.5 4.41015 4.41015 1.5 8 1.5C11.5899 1.5 14.5 4.41015 14.5 8ZM16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM10.5 5.5H5.5V10.5H10.5V5.5Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  )
);
StopCircle.displayName = "StopCircle";
export { StopCircle };
