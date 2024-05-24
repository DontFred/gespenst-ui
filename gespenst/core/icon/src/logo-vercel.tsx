import { forwardRef } from "react";

import type { Ref, SVGProps } from "react";
/**
 * This is LogoVercel icon
 * @param LogoVercelProps - All normal SVG props are expected
 * @returns JSX.Element
 */
const LogoVercel = forwardRef(
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
        d="M8 1L16 15H0L8 1Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  )
);
LogoVercel.displayName = "LogoVercel";
export { LogoVercel };
