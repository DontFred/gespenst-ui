import { forwardRef } from "react";

import type { Ref, SVGProps } from "react";
/**
 * This is LogoTurbopack icon
 * @param LogoTurbopackProps - All normal SVG props are expected
 * @returns JSX.Element
 */
const LogoTurbopack = forwardRef(
  (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      height="1em"
      ref={ref}
      strokeLinejoin="round"
      viewBox="0 0 16 16"
      width="1em"
      {...props}
    >
      <g clipPath="url(#clip0_872_3187)">
        <path
          clipRule="evenodd"
          d="M7.26824e-06 2.99332C2.42358e-06 2.99555 0 2.99777 0 3V13C0 13.6479 0.205396 14.2479 0.554626 14.7383L2.03387 13.259C2.01178 13.1764 2 13.0896 2 13V8H7.26824e-06V2.99332ZM8.00001 2H13C13.5523 2 14 2.44772 14 3V13C14 13.5523 13.5523 14 13 14H8.50001V16H13C14.6569 16 16 14.6569 16 13V3C16 1.34315 14.6569 0 13 0H8.00001V2ZM7.50001 16V14H3C2.91042 14 2.82359 13.9882 2.74098 13.9661L1.26173 15.4454C1.75214 15.7946 2.35208 16 3 16H7.50001Z"
          fill="url(#paint0_linear_872_3187)"
          fillRule="evenodd"
        />
        <mask fill="white" id="path-2-inside-1_872_3187">
          <rect height={9} rx={0.5} width={9} x={3.5} y={3.5} />
        </mask>
        <rect
          fill="transparent"
          height={9}
          mask="url(#path-2-inside-1_872_3187)"
          rx={0.5}
          stroke="hsl(var(--gespenst-gray-1000))"
          strokeWidth={4}
          width={9}
          x={3.5}
          y={3.5}
        />
      </g>
      <defs>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id="paint0_linear_872_3187"
          x1={8.68832}
          x2={1.79792}
          y1={1.98437}
          y2={8.82805}
        >
          <stop stopColor="#0096FF" />
          <stop offset={1} stopColor="#FF1E56" />
        </linearGradient>
        <clipPath id="clip0_872_3187">
          <rect fill="white" height={16} width={16} />
        </clipPath>
      </defs>
    </svg>
  )
);
LogoTurbopack.displayName = "LogoTurbopack";
export { LogoTurbopack };
