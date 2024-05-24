import { forwardRef } from "react";

import type { Ref, SVGProps } from "react";
/**
 * This is ArrowUpRightSmall icon
 * @param ArrowUpRightSmallProps - All normal SVG props are expected
 * @returns JSX.Element
 */
const ArrowUpRightSmall = forwardRef(
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
        d="M6.75011 4H6.00011V5.5H6.75011H9.43945L5.46978 9.46967L4.93945 10L6.00011 11.0607L6.53044 10.5303L10.499 6.56182V9.25V10H11.999V9.25V5C11.999 4.44772 11.5512 4 10.999 4H6.75011Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  )
);
ArrowUpRightSmall.displayName = "ArrowUpRightSmall";
export { ArrowUpRightSmall };
