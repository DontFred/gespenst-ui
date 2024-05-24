import { forwardRef } from "react";

import type { Ref, SVGProps } from "react";
/**
 * This is MenuAlt icon
 * @param MenuAltProps - All normal SVG props are expected
 * @returns JSX.Element
 */
const MenuAlt = forwardRef(
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
        d="M1 2H1.75H14.25H15V3.5H14.25H1.75H1V2ZM1 12.5H1.75H14.25H15V14H14.25H1.75H1V12.5ZM1.75 7.25H1V8.75H1.75H14.25H15V7.25H14.25H1.75Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  )
);
MenuAlt.displayName = "MenuAlt";
export { MenuAlt };
