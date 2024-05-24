import { forwardRef } from "react";

import type { Ref, SVGProps } from "react";
/**
 * This is SunAlternate icon
 * @param SunAlternateProps - All normal SVG props are expected
 * @returns JSX.Element
 */
const SunAlternate = forwardRef(
  (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      height="1em"
      ref={ref}
      strokeLinejoin="round"
      viewBox="0 0 16 16"
      width="1em"
      {...props}
    >
      <g clipPath="url(#clip0_174_19347)">
        <path
          clipRule="evenodd"
          d="M13.8095 13.5C14.2386 13.0469 14.6152 12.5437 14.9297 12H1.07026C1.38476 12.5437 1.76141 13.0469 2.1905 13.5H13.8095ZM15.9381 9C15.851 9.69864 15.6738 10.3693 15.4185 11H0.581517C0.326218 10.3693 0.149013 9.69864 0.0618937 9H15.9381ZM15.9997 8.06438C15.9999 8.04294 16 8.02148 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8H15.9997V8.06438ZM3.33528 14.5C4.64841 15.444 6.25928 16 8 16C9.74072 16 11.3516 15.444 12.6647 14.5H3.33528Z"
          fill="currentColor"
          fillRule="evenodd"
        />
      </g>
      <defs>
        <clipPath id="clip0_174_19347">
          <rect fill="hsl(var(--gespenst-background)" height={16} width={16} />
        </clipPath>
      </defs>
    </svg>
  )
);
SunAlternate.displayName = "SunAlternate";
export { SunAlternate };