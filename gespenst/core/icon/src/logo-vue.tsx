import { forwardRef } from "react";

import type { Ref, SVGProps } from "react";
/**
 * This is LogoVue icon
 * @param LogoVueProps - All normal SVG props are expected
 * @returns JSX.Element
 */
const LogoVue = forwardRef(
  (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      height="1em"
      ref={ref}
      strokeLinejoin="round"
      viewBox="0 0 16 16"
      width="1em"
      {...props}
    >
      <g clipPath="url(#clip0_872_3155)">
        <path
          d="M9.71934 0.916722L7.87183 4.11672L6.02431 0.916722H-0.128174L7.87183 14.7733L15.8718 0.916722H9.71934Z"
          fill="#41B883"
        />
        <path
          d="M9.71929 0.916724L7.87178 4.11672L6.02426 0.916724H3.07178L7.87178 9.2305L12.6718 0.916724H9.71929Z"
          fill="#34495E"
        />
      </g>
      <defs>
        <clipPath id="clip0_872_3155">
          <rect fill="white" height={16} width={16} />
        </clipPath>
      </defs>
    </svg>
  )
);
LogoVue.displayName = "LogoVue";
export { LogoVue };
