import { forwardRef } from "react";

import type { Ref, SVGProps } from "react";
/**
 * This is Plus icon
 * @param PlusProps - All normal SVG props are expected
 * @returns JSX.Element
 */
const Plus = forwardRef(
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
        d="M8.75 1.75V1H7.25V1.75V6.75H2.25H1.5V8.25H2.25H7.25V13.25V14H8.75V13.25V8.25H13.75H14.5V6.75H13.75H8.75V1.75Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  )
);
Plus.displayName = "Plus";
export { Plus };
