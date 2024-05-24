import { forwardRef } from "react";

import type { Ref, SVGProps } from "react";
/**
 * This is ChartBarRandom icon
 * @param ChartBarRandomProps - All normal SVG props are expected
 * @returns JSX.Element
 */
const ChartBarRandom = forwardRef(
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
        d="M14 1V1.75V14.25V15H12.5V14.25V1.75V1H14ZM8.75 6V6.75V14.25V15H7.25V14.25V6.75V6H8.75ZM3.5 4.75V4H2V4.75V14.25V15H3.5V14.25V4.75Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  )
);
ChartBarRandom.displayName = "ChartBarRandom";
export { ChartBarRandom };
