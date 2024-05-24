import { forwardRef } from "react";

import type { Ref, SVGProps } from "react";
/**
 * This is ToggleOffAltUnread icon
 * @param ToggleOffAltUnreadProps - All normal SVG props are expected
 * @returns JSX.Element
 */
const ToggleOffAltUnread = forwardRef(
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
        d="M15.62 5.893A6 6 0 0 1 10 14H6A6 6 0 0 1 6 2h3.531a4.039 4.039 0 0 0 .095 1.5H6a4.5 4.5 0 0 0 0 9h4a4.5 4.5 0 0 0 4.22-6.065c.506-.092.98-.279 1.4-.542ZM6 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM6 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
        fill="currentColor"
        fillRule="evenodd"
      />
      <circle cx={13.5} cy={2.5} fill="hsl(var(--gespenst-blue-900)" r={2.5} />
    </svg>
  )
);
ToggleOffAltUnread.displayName = "ToggleOffAltUnread";
export { ToggleOffAltUnread };
