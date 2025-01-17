import { forwardRef } from "react";

import type { Ref, SVGProps } from "react";
/**
 * This is Fulcrum icon
 * @param FulcrumProps - All normal SVG props are expected
 * @returns JSX.Element
 */
const Fulcrum = forwardRef(
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
        d="M15.206 1.72114L15.9272 1.5151L15.5151 0.0728149L14.794 0.278856L0.793958 4.27886L0.0728149 4.4849L0.484897 5.92718L1.20604 5.72114L15.206 1.72114ZM7.11102 5.39697L8 4L8.88898 5.39697L14.0455 13.5L15 15H13.222H2.77796H0.999999L1.95454 13.5L7.11102 5.39697ZM3.73251 13.5L8 6.79394L12.2675 13.5H3.73251Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  )
);
Fulcrum.displayName = "Fulcrum";
export { Fulcrum };
