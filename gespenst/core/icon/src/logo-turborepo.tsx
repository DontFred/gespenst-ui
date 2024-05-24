import { forwardRef } from "react";

import type { Ref, SVGProps } from "react";
/**
 * This is LogoTurborepo icon
 * @param LogoTurborepoProps - All normal SVG props are expected
 * @returns JSX.Element
 */
const LogoTurborepo = forwardRef(
  (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      height="1em"
      ref={ref}
      strokeLinejoin="round"
      viewBox="0 0 16 16"
      width="1em"
      {...props}
    >
      <g clipPath="url(#clip0_872_3188)">
        <path
          clipRule="evenodd"
          d="M8 0V2C11.3137 2 14 4.68629 14 8C14 11.1453 11.5798 13.7254 8.5 13.9795V15.9846C12.6854 15.7265 16 12.2504 16 8C16 3.58172 12.4183 0 8 0ZM7.5 15.9846V13.9795C6.2188 13.8738 5.05174 13.3655 4.12558 12.5815L2.70769 13.9994C4.00133 15.1415 5.66717 15.8716 7.5 15.9846ZM2.00058 13.2923C0.755509 11.882 0 10.0292 0 8H2C2 9.47685 2.53358 10.8291 3.41847 11.8744L2.00058 13.2923Z"
          fill="url(#paint0_linear_872_3188)"
          fillRule="evenodd"
        />
        <rect
          fill="transparent"
          height={7}
          rx={3.5}
          stroke="hsl(var(--gespenst-gray-1000))"
          strokeWidth={2}
          width={7}
          x={4.5}
          y={4.5}
        />
      </g>
      <defs>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id="paint0_linear_872_3188"
          x1={8.68832}
          x2={1.79792}
          y1={1.98437}
          y2={8.82805}
        >
          <stop stopColor="#0096FF" />
          <stop offset={1} stopColor="#FF1E56" />
        </linearGradient>
        <clipPath id="clip0_872_3188">
          <rect fill="white" height={16} width={16} />
        </clipPath>
      </defs>
    </svg>
  )
);
LogoTurborepo.displayName = "LogoTurborepo";
export { LogoTurborepo };
