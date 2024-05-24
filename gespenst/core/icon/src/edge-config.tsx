import { forwardRef } from "react";

import type { Ref, SVGProps } from "react";
/**
 * This is EdgeConfig icon
 * @param EdgeConfigProps - All normal SVG props are expected
 * @returns JSX.Element
 */
const EdgeConfig = forwardRef(
  (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      height="1em"
      ref={ref}
      strokeLinejoin="round"
      viewBox="0 0 16 16"
      width="1em"
      {...props}
    >
      <svg
        fill="none"
        height="1em"
        ref={ref}
        viewBox="0 0 16 16"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <g clipPath="url(#clip0_3394_1494)">
          <circle cx={8} cy={6} fill="currentColor" r={1.25} />
          <path
            d="M8 10.5V12.8486C8 13.4364 7.82603 14.011 7.5 14.5M3.5 14.5C2.53351 14.5 1.75 13.7165 1.75 12.75V9.95549C1.75 8.87793 1 8.24999 0 8.24999C1 8.24999 1.75 7.62205 1.75 6.54449V3.75C1.75 2.7835 2.5335 2 3.5 2M12.5 2C13.4665 2 14.25 2.7835 14.25 3.75V6.54449C14.25 7.62159 15 8.24999 16 8.24999C15 8.24999 14.25 8.87795 14.25 9.95551V12.75C14.25 13.7165 13.4665 14.5 12.5 14.5"
            stroke="currentColor"
            strokeLinecap="square"
            strokeLinejoin="round"
            strokeWidth={1.5}
          />
        </g>
        <defs>
          <clipPath id="clip0_3394_1494">
            <rect fill="currentColor" height={16} width={16} />
          </clipPath>
        </defs>
      </svg>
    </svg>
  )
);
EdgeConfig.displayName = "EdgeConfig";
export { EdgeConfig };
