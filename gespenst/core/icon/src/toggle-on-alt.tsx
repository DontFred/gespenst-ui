import { forwardRef } from "react";

import type { Ref, SVGProps } from "react";
/**
 * This is ToggleOnAlt icon
 * @param ToggleOnAltProps - All normal SVG props are expected
 * @returns JSX.Element
 */
const ToggleOnAlt = forwardRef(
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
        d="M6 3.5H10C12.4853 3.5 14.5 5.51472 14.5 8C14.5 10.4853 12.4853 12.5 10 12.5H6C3.51472 12.5 1.5 10.4853 1.5 8C1.5 5.51472 3.51472 3.5 6 3.5ZM0 8C0 4.68629 2.68629 2 6 2H10C13.3137 2 16 4.68629 16 8C16 11.3137 13.3137 14 10 14H6C2.68629 14 0 11.3137 0 8ZM10 11C11.6569 11 13 9.65685 13 8C13 6.34315 11.6569 5 10 5C8.34315 5 7 6.34315 7 8C7 9.65685 8.34315 11 10 11Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  )
);
ToggleOnAlt.displayName = "ToggleOnAlt";
export { ToggleOnAlt };
