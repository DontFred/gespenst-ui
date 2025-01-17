import { forwardRef } from "react";

import type { Ref, SVGProps } from "react";
/**
 * This is PaperAirplane icon
 * @param PaperAirplaneProps - All normal SVG props are expected
 * @returns JSX.Element
 */
const PaperAirplane = forwardRef(
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
        d="M14.7477 0.293701L0.747695 5.2937L0.730713 6.70002L6.81589 9.04047C6.88192 9.06586 6.93409 9.11804 6.95948 9.18406L9.29994 15.2692L10.7063 15.2523L15.7063 1.25226L14.7477 0.293701ZM7.31426 7.62503L3.15693 6.02605L12.1112 2.8281L7.31426 7.62503ZM8.37492 8.68569L9.9739 12.843L13.1719 3.88876L8.37492 8.68569Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  )
);
PaperAirplane.displayName = "PaperAirplane";
export { PaperAirplane };
