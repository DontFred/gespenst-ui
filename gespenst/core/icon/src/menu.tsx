import { forwardRef } from "react";

import type { Ref, SVGProps } from "react";
/**
 * This is Menu icon
 * @param MenuProps - All normal SVG props are expected
 * @returns JSX.Element
 */
const Menu = forwardRef(
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
        d="M1.75 4H1V5.5H1.75H14.25H15V4H14.25H1.75ZM1.75 10.5H1V12H1.75H14.25H15V10.5H14.25H1.75Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  )
);
Menu.displayName = "Menu";
export { Menu };
