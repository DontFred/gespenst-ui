import { forwardRef } from "react";

import type { Ref, SVGProps } from "react";
/**
 * This is Anchor icon
 * @param AnchorProps - All normal SVG props are expected
 * @returns JSX.Element
 */
const Anchor = forwardRef(
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
        d="M8 1.5C7.17157 1.5 6.5 2.17157 6.5 3C6.5 3.82843 7.17157 4.5 8 4.5C8.82843 4.5 9.5 3.82843 9.5 3C9.5 2.17157 8.82843 1.5 8 1.5ZM5 3C5 1.34315 6.34315 0 8 0C9.65685 0 11 1.34315 11 3C11 4.39788 10.0439 5.57245 8.75 5.90549V14.459C11.7467 14.1291 14.0982 11.846 14.4535 9H13.75H13V7.5H13.75H15.25H16V8.25C16 12.5548 12.3933 16 8 16C3.60675 16 0 12.5548 0 8.25V7.5H0.75H2.25H3V9H2.25H1.54652C1.90183 11.846 4.25327 14.1291 7.25 14.459V5.90549C5.95608 5.57245 5 4.39788 5 3Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  )
);
Anchor.displayName = "Anchor";
export { Anchor };