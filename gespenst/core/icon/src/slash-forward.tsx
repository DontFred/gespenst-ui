import { forwardRef } from "react";

import type { Ref, SVGProps } from "react";
/**
 * This is SlashForward icon
 * @param SlashForwardProps - All normal SVG props are expected
 * @returns JSX.Element
 */
const SlashForward = forwardRef(
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
        d="M4.01526 15.3939L4.3107 14.7046L10.3107 0.704556L10.6061 0.0151978L11.9849 0.606077L11.6894 1.29544L5.68942 15.2954L5.39398 15.9848L4.01526 15.3939Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  )
);
SlashForward.displayName = "SlashForward";
export { SlashForward };
