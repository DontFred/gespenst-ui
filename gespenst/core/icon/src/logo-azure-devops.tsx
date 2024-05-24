import { forwardRef } from "react";

import type { Ref, SVGProps } from "react";
/**
 * This is LogoAzureDevops icon
 * @param LogoAzureDevopsProps - All normal SVG props are expected
 * @returns JSX.Element
 */
const LogoAzureDevops = forwardRef(
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
        d="M16 2.99657V12.5L12 16L6 14V15.9806L2 11.5L12 12.5V3.5L16 2.99657ZM12 3.5L7 0V2.28686L1.5 4L0 5.56457V10.5L2 11.5V5.56457L12 3.5Z"
        fill="#0078D4"
      />
    </svg>
  )
);
LogoAzureDevops.displayName = "LogoAzureDevops";
export { LogoAzureDevops };
