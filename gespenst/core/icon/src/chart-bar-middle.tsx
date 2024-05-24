import { forwardRef } from "react";

import type { Ref, SVGProps } from "react";
/**
 * This is ChartBarMiddle icon
 * @param ChartBarMiddleProps - All normal SVG props are expected
 * @returns JSX.Element
 */
const ChartBarMiddle = forwardRef(
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
        d="M8.75 1V1.75V14.25V15H7.25V14.25V1.75V1H8.75ZM3.5 9V9.75V14.25V15H2V14.25V9.75V9H3.5ZM14 6.75V6H12.5V6.75V14.25V15H14V14.25V6.75Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  )
);
ChartBarMiddle.displayName = "ChartBarMiddle";
export { ChartBarMiddle };
