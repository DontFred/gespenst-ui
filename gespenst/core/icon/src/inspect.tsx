import { forwardRef } from "react";

import type { Ref, SVGProps } from "react";
/**
 * This is Inspect icon
 * @param InspectProps - All normal SVG props are expected
 * @returns JSX.Element
 */
const Inspect = forwardRef(
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
        d="M4.75 13.5H2.5L2.5 2.5L13.5 2.5V4.75V5.5H15V4.75V2C15 1.44772 14.5523 1 14 1H2C1.44772 1 1 1.44771 1 2V14C1 14.5523 1.44771 15 2 15H4.75H5.5V13.5H4.75ZM7.5 13.4252V12.6752V8.50054C7.5 7.94825 7.94771 7.50054 8.5 7.50054H12.6746H13.4246V9.00054H12.6746H10.0606L15.0298 13.9697L15.5601 14.5L14.4995 15.5607L13.9691 15.0303L9 10.0612V12.6752V13.4252H7.5Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  )
);
Inspect.displayName = "Inspect";
export { Inspect };
