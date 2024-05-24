import { forwardRef } from "react";

import type { Ref, SVGProps } from "react";
/**
 * This is LogoVercelCircle icon
 * @param LogoVercelCircleProps - All normal SVG props are expected
 * @returns JSX.Element
 */
const LogoVercelCircle = forwardRef(
  (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      height="1em"
      ref={ref}
      strokeLinejoin="round"
      viewBox="0 0 16 16"
      width="1em"
      {...props}
    >
      <g clipPath="url(#clip0_872_3186)">
        <circle
          cx={8}
          cy={8}
          fill="currentColor"
          r={7.25}
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
        />
        <path
          clipRule="evenodd"
          d="M8 4.5L11.5 10.625H4.5L8 4.5Z"
          fill="hsl(var(--gespenst-gray-100)"
          fillRule="evenodd"
        />
      </g>
      <defs>
        <clipPath id="clip0_872_3186">
          <rect fill="white" height={16} width={16} />
        </clipPath>
      </defs>
    </svg>
  )
);
LogoVercelCircle.displayName = "LogoVercelCircle";
export { LogoVercelCircle };
