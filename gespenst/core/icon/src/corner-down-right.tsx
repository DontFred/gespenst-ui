import { forwardRef } from "react";

import type { Ref, SVGProps } from "react";
/**
 * This is CornerDownRight icon
 * @param CornerDownRightProps - All normal SVG props are expected
 * @returns JSX.Element
 */
const CornerDownRight = forwardRef(
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
        d="M2.5 3V2.25H1V3V9.25C1 10.2165 1.7835 11 2.75 11H12.4393L10.4697 12.9697L9.93934 13.5L11 14.5607L11.5303 14.0303L14.7803 10.7803C15.0732 10.4874 15.0732 10.0126 14.7803 9.71967L11.5303 6.46967L11 5.93934L9.93934 7L10.4697 7.53033L12.4393 9.5H2.75C2.61193 9.5 2.5 9.38807 2.5 9.25V3Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  )
);
CornerDownRight.displayName = "CornerDownRight";
export { CornerDownRight };
