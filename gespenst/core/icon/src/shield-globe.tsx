import { forwardRef } from "react";

import type { Ref, SVGProps } from "react";
/**
 * This is ShieldGlobe icon
 * @param ShieldGlobeProps - All normal SVG props are expected
 * @returns JSX.Element
 */
const ShieldGlobe = forwardRef(
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
        d="M11.25 4.25V3.5C9.35033 2.86678 6 2.58921 6 0C6 2.58921 2.64967 2.86678 0.75 3.5V9.52717C0.75 11.2011 1.67915 12.7367 3.16197 13.5134L4.5 14.2143"
        fill="transparent"
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
      />
      <circle
        cx={11.5}
        cy={11.5}
        fill="transparent"
        r={3.875}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.25}
      />
      <path d="M8 11.5H15.25" stroke="currentColor" strokeLinejoin="bevel" />
      <path
        d="M10.75 15V15C10.0964 12.7124 10.0964 10.2876 10.75 8V8"
        stroke="currentColor"
        strokeLinejoin="bevel"
      />
      <path
        d="M12.25 15V15C12.9036 12.7124 12.9036 10.2876 12.25 8V8"
        stroke="currentColor"
        strokeLinejoin="bevel"
      />
    </svg>
  )
);
ShieldGlobe.displayName = "ShieldGlobe";
export { ShieldGlobe };
