import { forwardRef } from "react";

import type { Ref, SVGProps } from "react";
/**
 * This is LogoNext icon
 * @param LogoNextProps - All normal SVG props are expected
 * @returns JSX.Element
 */
const LogoNext = forwardRef(
  (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      height="1em"
      ref={ref}
      strokeLinejoin="round"
      viewBox="0 0 16 16"
      width="1em"
      {...props}
    >
      <g clipPath="url(#clip0_53_108)">
        <circle
          cx={8}
          cy={8}
          fill="black"
          r={7.375}
          stroke="hsl(var(--gespenst-gray-1000))"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.25}
        />
        <path
          d="M10.63 11V5"
          stroke="url(#paint0_linear_53_1088u8s8wz83)"
          strokeMiterlimit={1.41421}
          strokeWidth={1.25}
        />
        <path
          clipRule="evenodd"
          d="M5.995 5.00087V5H4.745V11H5.995V6.96798L12.3615 14.7076C12.712 14.4793 13.0434 14.2242 13.353 13.9453L5.99527 5.00065L5.995 5.00087Z"
          fill="url(#paint1_linear_53_1088u8s8wz83)"
          fillRule="evenodd"
        />
      </g>
      <defs>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id="paint0_linear_53_1088u8s8wz83"
          x1={11.13}
          x2={11.13}
          y1={5}
          y2={11}
        >
          <stop stopColor="white" />
          <stop offset={0.609375} stopColor="white" stopOpacity={0.57} />
          <stop offset={0.796875} stopColor="white" stopOpacity={0} />
          <stop offset={1} stopColor="white" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id="paint1_linear_53_1088u8s8wz83"
          x1={9.9375}
          x2={13.5574}
          y1={9.0625}
          y2={13.3992}
        >
          <stop stopColor="white" />
          <stop offset={1} stopColor="white" stopOpacity={0} />
        </linearGradient>
        <clipPath id="clip0_53_108">
          <rect fill="red" height={16} width={16} />
        </clipPath>
      </defs>
    </svg>
  )
);
LogoNext.displayName = "LogoNext";
export { LogoNext };
