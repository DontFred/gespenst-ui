import { forwardRef } from "react";

import type { Ref, SVGProps } from "react";
/**
 * This is Status icon
 * @param StatusProps - All normal SVG props are expected
 * @returns JSX.Element
 */
const Status = forwardRef(
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
        d="M13 8C13 10.7614 10.7614 13 8 13C5.23858 13 3 10.7614 3 8C3 5.23858 5.23858 3 8 3C10.7614 3 13 5.23858 13 8Z"
        fill="currentColor"
      />
    </svg>
  )
);
Status.displayName = "Status";
export { Status };
