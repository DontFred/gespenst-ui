import { forwardRef } from "react";

import type { Ref, SVGProps } from "react";
/**
 * This is SlashBack icon
 * @param SlashBackProps - All normal SVG props are expected
 * @returns JSX.Element
 */
const SlashBack = forwardRef(
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
        d="M11.9849 15.3939L11.6894 14.7046L5.68942 0.704556L5.39398 0.0151978L4.01526 0.606077L4.3107 1.29544L10.3107 15.2954L10.6061 15.9848L11.9849 15.3939Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  )
);
SlashBack.displayName = "SlashBack";
export { SlashBack };
