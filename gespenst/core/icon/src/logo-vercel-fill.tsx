import { forwardRef } from "react";

import type { Ref, SVGProps } from "react";
/**
 * This is LogoVercelFill icon
 * @param LogoVercelFillProps - All normal SVG props are expected
 * @returns JSX.Element
 */
const LogoVercelFill = forwardRef(
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
        d="M8 1L0 15H16L8 1ZM8 4.02335L2.58477 13.5H13.4152L8 4.02335Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  )
);
LogoVercelFill.displayName = "LogoVercelFill";
export { LogoVercelFill };
