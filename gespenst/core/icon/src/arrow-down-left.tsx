import { forwardRef } from "react";

import type { Ref, SVGProps } from "react";
/**
 * This is ArrowDownLeft icon
 * @param ArrowDownLeftProps - All normal SVG props are expected
 * @returns JSX.Element
 */
const ArrowDownLeft = forwardRef(
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
        d="M4.5595 12.5H10.25H11V14H10.25H3C2.44772 14 2 13.5523 2 13V5.75001V5.00001H3.5V5.75001V11.4382L12.7185 2.21968L13.2488 1.68935L14.3095 2.75001L13.7792 3.28034L4.5595 12.5Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  )
);
ArrowDownLeft.displayName = "ArrowDownLeft";
export { ArrowDownLeft };
