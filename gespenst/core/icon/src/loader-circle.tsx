import { forwardRef } from "react";

import type { Ref, SVGProps } from "react";
/**
 * This is LoaderCircle icon
 * @param LoaderCircleProps - All normal SVG props are expected
 * @returns JSX.Element
 */
const LoaderCircle = forwardRef(
  (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      height="1em"
      ref={ref}
      strokeLinejoin="round"
      viewBox="0 0 16 16"
      width="1em"
      {...props}
    >
      <g clipPath="url(#clip0_2393_1490)">
        <path d="M8 0V4" stroke="currentColor" strokeWidth={1.5} />
        <path
          d="M8 16V12"
          opacity={0.5}
          stroke="currentColor"
          strokeWidth={1.5}
        />
        <path
          d="M3.29773 1.52783L5.64887 4.7639"
          opacity={0.9}
          stroke="currentColor"
          strokeWidth={1.5}
        />
        <path
          d="M12.7023 1.52783L10.3511 4.7639"
          opacity={0.1}
          stroke="currentColor"
          strokeWidth={1.5}
        />
        <path
          d="M12.7023 14.472L10.3511 11.236"
          opacity={0.4}
          stroke="currentColor"
          strokeWidth={1.5}
        />
        <path
          d="M3.29773 14.472L5.64887 11.236"
          opacity={0.6}
          stroke="currentColor"
          strokeWidth={1.5}
        />
        <path
          d="M15.6085 5.52783L11.8043 6.7639"
          opacity={0.2}
          stroke="currentColor"
          strokeWidth={1.5}
        />
        <path
          d="M0.391602 10.472L4.19583 9.23598"
          opacity={0.7}
          stroke="currentColor"
          strokeWidth={1.5}
        />
        <path
          d="M15.6085 10.4722L11.8043 9.2361"
          opacity={0.3}
          stroke="currentColor"
          strokeWidth={1.5}
        />
        <path
          d="M0.391602 5.52783L4.19583 6.7639"
          opacity={0.8}
          stroke="currentColor"
          strokeWidth={1.5}
        />
      </g>
      <defs>
        <clipPath id="clip0_2393_1490">
          <rect fill="white" height={16} width={16} />
        </clipPath>
      </defs>
    </svg>
  )
);
LoaderCircle.displayName = "LoaderCircle";
export { LoaderCircle };
