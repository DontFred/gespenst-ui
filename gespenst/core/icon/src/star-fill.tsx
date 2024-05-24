import { forwardRef } from "react";

import type { Ref, SVGProps } from "react";
/**
 * This is StarFill icon
 * @param StarFillProps - All normal SVG props are expected
 * @returns JSX.Element
 */
const StarFill = forwardRef(
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
        d="M7.99999 0.489502L10.5734 5.20807L15.8562 6.19736L12.1638 10.1029L12.8554 15.4329L7.99999 13.1281L3.1446 15.4329L3.83621 10.1029L0.143799 6.19736L5.42663 5.20807L7.99999 0.489502Z"
        fill="currentColor"
      />
    </svg>
  )
);
StarFill.displayName = "StarFill";
export { StarFill };
