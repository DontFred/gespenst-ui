import { forwardRef } from "react";

import type { Ref, SVGProps } from "react";
/**
 * This is Header icon
 * @param HeaderProps - All normal SVG props are expected
 * @returns JSX.Element
 */
const Header = forwardRef(
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
        d="M1.5 2.5H14.5V4.995L1.5 4.99499V2.5ZM1.5 6.24499V12.5C1.5 13.0523 1.94772 13.5 2.5 13.5H13.5C14.0523 13.5 14.5 13.0523 14.5 12.5V6.245L1.5 6.24499ZM0 1H1.5H14.5H16V2.5V12.5C16 13.8807 14.8807 15 13.5 15H2.5C1.11929 15 0 13.8807 0 12.5V2.5V1Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  )
);
Header.displayName = "Header";
export { Header };
