import { forwardRef } from "react";

import type { Ref, SVGProps } from "react";
/**
 * This is Alpha icon
 * @param AlphaProps - All normal SVG props are expected
 * @returns JSX.Element
 */
const Alpha = forwardRef(
  (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      height="1em"
      ref={ref}
      strokeLinejoin="round"
      viewBox="0 0 16 16"
      width="1em"
      {...props}
    >
      <circle
        cx={8}
        cy={8}
        fill="transparent"
        r={7.25}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        clipRule="evenodd"
        d="M5 1H7V3H5V1ZM5 5V3H3V5H1V7H3V9H1V11H3V13H5V15H7V13H9V15H11V13H13V11H15V9H13V7H15V5H13V3H11V1H9V3H7V5H5ZM5 7H3V5H5V7ZM7 7V5H9V7H7ZM7 9V7H5V9H3V11H5V13H7V11H9V13H11V11H13V9H11V7H13V5H11V3H9V5H11V7H9V9H7ZM9 9H11V11H9V9ZM7 9V11H5V9H7Z"
        fill="currentColor"
        fillRule="evenodd"
        opacity={0.33}
      />
    </svg>
  )
);
Alpha.displayName = "Alpha";
export { Alpha };
