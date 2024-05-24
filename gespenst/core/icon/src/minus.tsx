import { forwardRef } from "react";

import type { Ref, SVGProps } from "react";
/**
 * This is Minus icon
 * @param MinusProps - All normal SVG props are expected
 * @returns JSX.Element
 */
const Minus = forwardRef(
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
        d="M2 7.25H2.75H13.25H14V8.75H13.25H2.75H2V7.25Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  )
);
Minus.displayName = "Minus";
export { Minus };
