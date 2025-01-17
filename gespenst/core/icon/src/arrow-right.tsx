import { forwardRef } from "react";

import type { Ref, SVGProps } from "react";
/**
 * This is ArrowRight icon
 * @param ArrowRightProps - All normal SVG props are expected
 * @returns JSX.Element
 */
const ArrowRight = forwardRef(
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
        clipRule="evenodd"
        d="M9.53033 2.21968L9 1.68935L7.93934 2.75001L8.46967 3.28034L12.4393 7.25001H1.75H1V8.75001H1.75H12.4393L8.46967 12.7197L7.93934 13.25L9 14.3107L9.53033 13.7803L14.6036 8.70711C14.9941 8.31659 14.9941 7.68342 14.6036 7.2929L9.53033 2.21968Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  )
);
ArrowRight.displayName = "ArrowRight";
export { ArrowRight };
