import { forwardRef } from "react";

import type { Ref, SVGProps } from "react";
/**
 * This is Layout icon
 * @param LayoutProps - All normal SVG props are expected
 * @returns JSX.Element
 */
const Layout = forwardRef(
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
        d="M14.5 2.5H1.5V5.005H14.5V2.5ZM14.5 6.255H6.245V13.5H13.5C14.0523 13.5 14.5 13.0523 14.5 12.5V6.255ZM4.995 6.255H1.5V12.5C1.5 13.0523 1.94772 13.5 2.5 13.5H4.995V6.255ZM1.5 1H0V2.5V12.5C0 13.8807 1.11929 15 2.5 15H13.5C14.8807 15 16 13.8807 16 12.5V2.5V1H14.5H1.5Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  )
);
Layout.displayName = "Layout";
export { Layout };
