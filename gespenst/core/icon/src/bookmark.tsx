import { forwardRef } from "react";

import type { Ref, SVGProps } from "react";
/**
 * This is Bookmark icon
 * @param BookmarkProps - All normal SVG props are expected
 * @returns JSX.Element
 */
const Bookmark = forwardRef(
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
        d="M11 1.5H5C4.44772 1.5 4 1.94772 4 2.5V13.4732L7.16201 11.7485C7.68434 11.4635 8.31566 11.4635 8.83799 11.7485L12 13.4732V2.5C12 1.94772 11.5523 1.5 11 1.5ZM13.5 14.2914V2.5C13.5 1.11929 12.3807 0 11 0H5C3.61929 0 2.5 1.11929 2.5 2.5V14.2914V16L4 15.1818L7.88029 13.0653C7.95491 13.0246 8.04509 13.0246 8.11971 13.0653L12 15.1818L13.5 16V14.2914Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  )
);
Bookmark.displayName = "Bookmark";
export { Bookmark };
