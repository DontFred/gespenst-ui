import { forwardRef } from "react";

import type { Ref, SVGProps } from "react";
/**
 * This is MenuAltUnread icon
 * @param MenuAltUnreadProps - All normal SVG props are expected
 * @returns JSX.Element
 */
const MenuAltUnread = forwardRef(
  (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      height="1em"
      ref={ref}
      strokeLinejoin="round"
      viewBox="0 0 16 16"
      width="1em"
      {...props}
    >
      <circle cx={13.5} cy={2.5} fill="hsl(var(--gespenst-blue-900)" r={2.5} />
      <path
        clipRule="evenodd"
        d="M9.53095 2H1.75H1V3.5H1.75H9.62602C9.54375 3.18038 9.5 2.8453 9.5 2.5C9.5 2.33067 9.51052 2.1638 9.53095 2ZM1.75 12H1V13.5H1.75H14.25H15V12H14.25H1.75ZM1 7H1.75H14.25H15V8.5H14.25H1.75H1V7Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  )
);
MenuAltUnread.displayName = "MenuAltUnread";
export { MenuAltUnread };
