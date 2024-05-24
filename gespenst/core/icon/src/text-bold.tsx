import { forwardRef } from "react";

import type { Ref, SVGProps } from "react";
/**
 * This is TextBold icon
 * @param TextBoldProps - All normal SVG props are expected
 * @returns JSX.Element
 */
const TextBold = forwardRef(
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
        d="M3 1H2V2V7V8V9V14V15H3H10C12.2091 15 14 13.2091 14 11C14 9.54567 13.2239 8.27263 12.0632 7.57246C12.6478 6.87702 13 5.97964 13 5C13 2.79086 11.2091 1 9 1H3ZM9 7C10.1046 7 11 6.10457 11 5C11 3.89543 10.1046 3 9 3H4V7H9ZM4 9V13H10C11.1046 13 12 12.1046 12 11C12 9.89543 11.1046 9 10 9H9H4Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  )
);
TextBold.displayName = "TextBold";
export { TextBold };
