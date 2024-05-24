import { forwardRef } from "react";

import type { Ref, SVGProps } from "react";
/**
 * This is FolderMinus icon
 * @param FolderMinusProps - All normal SVG props are expected
 * @returns JSX.Element
 */
const FolderMinus = forwardRef(
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
        d="M14.5 4V12.5C14.5 13.0523 14.0523 13.5 13.5 13.5H2.5C1.94772 13.5 1.5 13.0523 1.5 12.5V2.5H6L7.33333 3.5C7.76607 3.82456 8.29241 4 8.83333 4H14.5ZM0 1H1.5H6.16667C6.38304 1 6.59357 1.07018 6.76667 1.2L8.23333 2.3C8.40643 2.42982 8.61696 2.5 8.83333 2.5H14.5H16V4V12.5C16 13.8807 14.8807 15 13.5 15H2.5C1.11929 15 0 13.8807 0 12.5V2.5V1ZM5.75 8H5V9.5H5.75H10.25H11V8H10.25H5.75Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  )
);
FolderMinus.displayName = "FolderMinus";
export { FolderMinus };
