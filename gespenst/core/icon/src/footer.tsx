import { forwardRef } from "react";

import type { Ref, SVGProps } from "react";
/**
 * This is Footer icon
 * @param FooterProps - All normal SVG props are expected
 * @returns JSX.Element
 */
const Footer = forwardRef(
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
        d="M1.5 2.5H14.5V9.75501L1.5 9.755V2.5ZM1.5 11.005V12.5C1.5 13.0523 1.94772 13.5 2.5 13.5H13.5C14.0523 13.5 14.5 13.0523 14.5 12.5V11.005L1.5 11.005ZM0 1H1.5H14.5H16V2.5V12.5C16 13.8807 14.8807 15 13.5 15H2.5C1.11929 15 0 13.8807 0 12.5V2.5V1Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  )
);
Footer.displayName = "Footer";
export { Footer };
