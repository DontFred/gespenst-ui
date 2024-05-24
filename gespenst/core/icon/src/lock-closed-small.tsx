import { forwardRef } from "react";

import type { Ref, SVGProps } from "react";
/**
 * This is LockClosedSmall icon
 * @param LockClosedSmallProps - All normal SVG props are expected
 * @returns JSX.Element
 */
const LockClosedSmall = forwardRef(
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
        d="M9.5 6V7H6.5V6C6.5 5.17157 7.17157 4.5 8 4.5C8.82843 4.5 9.5 5.17157 9.5 6ZM5 7V6C5 4.34315 6.34315 3 8 3C9.65685 3 11 4.34315 11 6V7H12V11.5C12 12.3284 11.3284 13 10.5 13H5.5C4.67157 13 4 12.3284 4 11.5V7H5Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  )
);
LockClosedSmall.displayName = "LockClosedSmall";
export { LockClosedSmall };
