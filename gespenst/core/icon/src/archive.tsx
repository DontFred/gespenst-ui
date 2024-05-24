import { forwardRef } from "react";

import type { Ref, SVGProps } from "react";
/**
 * This is Archive icon
 * @param ArchiveProps - All normal SVG props are expected
 * @returns JSX.Element
 */
const Archive = forwardRef(
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
        d="M1.5 3.5H14.5V5.5H13.5H2.5H1.5V3.5ZM1 7H0V5.5V3.5V2H1.5H14.5H16V3.5V5.5V7H15V12.5C15 13.8807 13.8807 15 12.5 15H3.5C2.11929 15 1 13.8807 1 12.5V7ZM2.5 7V12.5C2.5 13.0523 2.94772 13.5 3.5 13.5H12.5C13.0523 13.5 13.5 13.0523 13.5 12.5V7H2.5ZM6 9.5H6.75H9.25H10V11H9.25H6.75H6V9.5Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  )
);
Archive.displayName = "Archive";
export { Archive };
