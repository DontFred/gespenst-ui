import { forwardRef } from "react";

import type { Ref, SVGProps } from "react";
/**
 * This is Notes icon
 * @param NotesProps - All normal SVG props are expected
 * @returns JSX.Element
 */
const Notes = forwardRef(
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
        d="M13 2.5H3V4.5H13V2.5ZM3 7.5V5.75H4.75L4.75 7.5H3ZM4.75 8.75H3V10.5H4.75V8.75ZM6 10.5L6 8.75H13V10.5H6ZM4.75 11.75H3V12.5C3 13.0523 3.44772 13.5 4 13.5H4.75V11.75ZM6 13.5V11.75H13V12.5C13 13.0523 12.5523 13.5 12 13.5H6ZM6 7.5V5.75H13V7.5H6ZM3 1H1.5V2.5V12.5C1.5 13.8807 2.61929 15 4 15H12C13.3807 15 14.5 13.8807 14.5 12.5V2.5V1H13H3Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  )
);
Notes.displayName = "Notes";
export { Notes };
