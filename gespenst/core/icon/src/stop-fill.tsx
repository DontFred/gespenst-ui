import { forwardRef } from "react";

import type { Ref, SVGProps } from "react";
/**
 * This is StopFill icon
 * @param StopFillProps - All normal SVG props are expected
 * @returns JSX.Element
 */
const StopFill = forwardRef(
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
        d="M4.3934 0.292893C4.58094 0.105357 4.83529 0 5.10051 0H10.8995C11.1647 0 11.4191 0.105357 11.6066 0.292893L15.7071 4.3934C15.8946 4.58093 16 4.83529 16 5.10051V10.8995C16 11.1647 15.8946 11.4191 15.7071 11.6066L11.6066 15.7071C11.4191 15.8946 11.1647 16 10.8995 16H5.10051C4.83529 16 4.58094 15.8946 4.3934 15.7071L0.292894 11.6066C0.105357 11.4191 0 11.1647 0 10.8995V5.10051C0 4.83529 0.105357 4.58094 0.292893 4.3934L4.3934 0.292893ZM8.75 3.75V4.5V8L8.75 8.75H7.25V8V4.5V3.75H8.75ZM8 12C8.55229 12 9 11.5523 9 11C9 10.4477 8.55229 10 8 10C7.44772 10 7 10.4477 7 11C7 11.5523 7.44772 12 8 12Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  )
);
StopFill.displayName = "StopFill";
export { StopFill };