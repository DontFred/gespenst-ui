import { forwardRef } from "react";

import type { Ref, SVGProps } from "react";
/**
 * This is LogoVercelApi icon
 * @param LogoVercelApiProps - All normal SVG props are expected
 * @returns JSX.Element
 */
const LogoVercelApi = forwardRef(
  (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      height="1em"
      ref={ref}
      strokeLinejoin="round"
      viewBox="0 0 16 16"
      width="1em"
      {...props}
    >
      <g clipPath="url(#clip0_872_3535)">
        <path
          clipRule="evenodd"
          d="M8 2L15 14.5H1L8 2Z"
          fill="transparent"
          fillRule="evenodd"
          stroke="currentColor"
          strokeDasharray="1.25 1.25"
          strokeWidth={1.25}
        />
      </g>
      <defs>
        <clipPath id="clip0_872_3535">
          <rect fill="white" height={16} width={16} />
        </clipPath>
      </defs>
    </svg>
  )
);
LogoVercelApi.displayName = "LogoVercelApi";
export { LogoVercelApi };
