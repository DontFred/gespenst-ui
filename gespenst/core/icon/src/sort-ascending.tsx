import { forwardRef } from "react";

import type { Ref, SVGProps } from "react";
/**
 * This is SortAscending icon
 * @param SortAscendingProps - All normal SVG props are expected
 * @returns JSX.Element
 */
const SortAscending = forwardRef(
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
        d="M12.5303 1.21967C12.2374 0.926777 11.7626 0.926777 11.4697 1.21967L9.21967 3.46967L8.68934 4L9.75 5.06066L10.2803 4.53033L11.25 3.56066V13.25V14H12.75V13.25V3.56066L13.7197 4.53033L14.25 5.06066L15.3107 4L14.7803 3.46967L12.5303 1.21967ZM1.75 4H1V5.5H1.75H5.25H6V4H5.25H1.75ZM1.75 8.25H1V9.75H1.75H4.25H5V8.25H4.25H1.75ZM1.75 12.5H1V14H1.75H7.25H8V12.5H7.25H1.75Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  )
);
SortAscending.displayName = "SortAscending";
export { SortAscending };