import { forwardRef } from "react";

import type { Ref, SVGProps } from "react";
/**
 * This is Slash icon
 * @param SlashProps - All normal SVG props are expected
 * @returns JSX.Element
 */
const Slash = forwardRef(
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
        d="M14.5 8C14.5 11.5899 11.5899 14.5 8 14.5C4.41015 14.5 1.5 11.5899 1.5 8C1.5 4.41015 4.41015 1.5 8 1.5C11.5899 1.5 14.5 4.41015 14.5 8ZM16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM5.53033 4.46967L5 3.93934L3.93934 5L4.46967 5.53033L10.4697 11.5303L11 12.0607L12.0607 11L11.5303 10.4697L5.53033 4.46967Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  )
);
Slash.displayName = "Slash";
export { Slash };