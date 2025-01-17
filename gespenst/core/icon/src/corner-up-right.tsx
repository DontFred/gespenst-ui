import { forwardRef } from "react";

import type { Ref, SVGProps } from "react";
/**
 * This is CornerUpRight icon
 * @param CornerUpRightProps - All normal SVG props are expected
 * @returns JSX.Element
 */
const CornerUpRight = forwardRef(
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
        d="M11.5303 10.0303L11 10.5607L9.93934 9.50001L10.4697 8.96968L12.4393 7.00001H2.75C2.61193 7.00001 2.5 7.11193 2.5 7.25001V13.5V14.25H1V13.5V7.25001C1 6.28351 1.7835 5.50001 2.75 5.50001H12.4393L10.4697 3.53034L9.93934 3.00001L11 1.93935L11.5303 2.46968L14.7803 5.71968C15.0732 6.01257 15.0732 6.48744 14.7803 6.78034L11.5303 10.0303Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  )
);
CornerUpRight.displayName = "CornerUpRight";
export { CornerUpRight };
