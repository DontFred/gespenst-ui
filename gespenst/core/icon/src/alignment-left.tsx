import { forwardRef } from "react";

import type { Ref, SVGProps } from "react";
/**
 * This is AlignmentLeft icon
 * @param AlignmentLeftProps - All normal SVG props are expected
 * @returns JSX.Element
 */
const AlignmentLeft = forwardRef(
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
        d="M1.75 2H1V3.5H1.75H14.25H15V2H14.25H1.75ZM1 7H1.75H9.25H10V8.5H9.25H1.75H1V7ZM1 12H1.75H11.25H12V13.5H11.25H1.75H1V12Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  )
);
AlignmentLeft.displayName = "AlignmentLeft";
export { AlignmentLeft };
