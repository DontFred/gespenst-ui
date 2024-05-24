import { forwardRef } from "react";

import type { Ref, SVGProps } from "react";
/**
 * This is CornerRightDown icon
 * @param CornerRightDownProps - All normal SVG props are expected
 * @returns JSX.Element
 */
const CornerRightDown = forwardRef(
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
        d="M2.75 2.75H2V1.25H2.75H9C9.9665 1.25 10.75 2.0335 10.75 3V12.6893L12.7197 10.7197L13.25 10.1893L14.3107 11.25L13.7803 11.7803L10.5303 15.0303C10.2374 15.3232 9.76256 15.3232 9.46967 15.0303L6.21967 11.7803L5.68934 11.25L6.75 10.1893L7.28033 10.7197L9.25 12.6893V3C9.25 2.86193 9.13807 2.75 9 2.75H2.75Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  )
);
CornerRightDown.displayName = "CornerRightDown";
export { CornerRightDown };
