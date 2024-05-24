import { forwardRef } from "react";

import type { Ref, SVGProps } from "react";
/**
 * This is StatusSmall icon
 * @param StatusSmallProps - All normal SVG props are expected
 * @returns JSX.Element
 */
const StatusSmall = forwardRef(
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
        d="M12 8C12 10.2091 10.2091 12 8 12C5.79086 12 4 10.2091 4 8C4 5.79086 5.79086 4 8 4C10.2091 4 12 5.79086 12 8Z"
        fill="currentColor"
      />
    </svg>
  )
);
StatusSmall.displayName = "StatusSmall";
export { StatusSmall };
