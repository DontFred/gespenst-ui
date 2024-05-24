import { forwardRef } from "react";

import type { Ref, SVGProps } from "react";
/**
 * This is AlignmentRight icon
 * @param AlignmentRightProps - All normal SVG props are expected
 * @returns JSX.Element
 */
const AlignmentRight = forwardRef(
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
        d="M1.75 2H1V3.5H1.75H14.25H15V2H14.25H1.75ZM6 7.25H6.75H14.25H15V8.75H14.25H6.75H6V7.25ZM4 12.5H4.75H14.25H15V14H14.25H4.75H4V12.5Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  )
);
AlignmentRight.displayName = "AlignmentRight";
export { AlignmentRight };
