import { forwardRef } from "react";

import type { Ref, SVGProps } from "react";
/**
 * This is FolderPlus icon
 * @param FolderPlusProps - All normal SVG props are expected
 * @returns JSX.Element
 */
const FolderPlus = forwardRef(
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
        d="M14.5 12.5V4H8.83333C8.29241 4 7.76607 3.82456 7.33333 3.5L6 2.5H1.5V12.5C1.5 13.0523 1.94772 13.5 2.5 13.5H13.5C14.0523 13.5 14.5 13.0523 14.5 12.5ZM1.5 1H0V2.5V12.5C0 13.8807 1.11929 15 2.5 15H13.5C14.8807 15 16 13.8807 16 12.5V4V2.5H14.5H8.83333C8.61696 2.5 8.40643 2.42982 8.23333 2.3L6.76667 1.2C6.59357 1.07018 6.38304 1 6.16667 1H1.5ZM5.25 8H6H7.25V6.75V6H8.75V6.75V8H10H10.75V9.5H10H8.75V10.75V11.5H7.25V10.75V9.5H6H5.25V8Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  )
);
FolderPlus.displayName = "FolderPlus";
export { FolderPlus };
