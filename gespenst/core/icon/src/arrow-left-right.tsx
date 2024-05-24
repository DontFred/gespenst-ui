import { forwardRef } from "react";

import type { Ref, SVGProps } from "react";
/**
 * This is ArrowLeftRight icon
 * @param ArrowLeftRightProps - All normal SVG props are expected
 * @returns JSX.Element
 */
const ArrowLeftRight = forwardRef(
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
        d="M3.46975 11.7803L4.00008 12.3106L5.06074 11.25L4.53041 10.7196L2.56076 8.75H13.4393L11.4697 10.7197L10.9393 11.25L12 12.3107L12.5303 11.7803L15.6036 8.70711C15.9941 8.31658 15.9941 7.68342 15.6036 7.29289L12.5303 4.21967L12 3.68934L10.9393 4.75L11.4697 5.28033L13.4393 7.25H2.56072L4.53042 5.28031L5.06075 4.74998L4.00009 3.68932L3.46975 4.21965L0.396531 7.29287C0.00600663 7.68339 0.00600657 8.31656 0.396531 8.70708L3.46975 11.7803Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  )
);
ArrowLeftRight.displayName = "ArrowLeftRight";
export { ArrowLeftRight };
