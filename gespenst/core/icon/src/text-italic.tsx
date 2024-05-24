import { forwardRef } from "react";

import type { Ref, SVGProps } from "react";
/**
 * This is TextItalic icon
 * @param TextItalicProps - All normal SVG props are expected
 * @returns JSX.Element
 */
const TextItalic = forwardRef(
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
        d="M4.25 1H5H13.75H14.5V2.5H13.75H10.5475L7.02746 13.5H11H11.75V15H11H2.25H1.5V13.5H2.25H5.45254L8.97254 2.5H5H4.25V1Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  )
);
TextItalic.displayName = "TextItalic";
export { TextItalic };
