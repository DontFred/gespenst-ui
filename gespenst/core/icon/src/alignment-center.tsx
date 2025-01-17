import { forwardRef } from "react";

import type { Ref, SVGProps } from "react";
/**
 * This is AlignmentCenter icon
 * @param AlignmentCenterProps - All normal SVG props are expected
 * @returns JSX.Element
 */
const AlignmentCenter = forwardRef(
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
        d="M1.75 2H1V3.5H1.75H14.25H15V2H14.25H1.75ZM3.5 7.25H4.25H11.75H12.5V8.75H11.75H4.25H3.5V7.25ZM2.5 12.5H3.25H12.75H13.5V14H12.75H3.25H2.5V12.5Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  )
);
AlignmentCenter.displayName = "AlignmentCenter";
export { AlignmentCenter };
