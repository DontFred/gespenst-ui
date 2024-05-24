import { forwardRef } from "react";

import type { Ref, SVGProps } from "react";
/**
 * This is SpeakerFill icon
 * @param SpeakerFillProps - All normal SVG props are expected
 * @returns JSX.Element
 */
const SpeakerFill = forwardRef(
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
        d="M2 11V5C2 4.44772 2.44772 4 3 4H6L14 0V16L6 12H3C2.44772 12 2 11.5523 2 11Z"
        fill="currentColor"
      />
    </svg>
  )
);
SpeakerFill.displayName = "SpeakerFill";
export { SpeakerFill };
