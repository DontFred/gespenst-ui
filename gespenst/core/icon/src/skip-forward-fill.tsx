import { forwardRef } from "react";

import type { Ref, SVGProps } from "react";
/**
 * This is SkipForwardFill icon
 * @param SkipForwardFillProps - All normal SVG props are expected
 * @returns JSX.Element
 */
const SkipForwardFill = forwardRef(
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
        d="M11.6686 8.21092C11.8229 8.11268 11.8229 7.88733 11.6686 7.78909L1.38422 1.24451C1.21779 1.1386 1 1.25815 1 1.45542V14.5446C1 14.7419 1.21779 14.8614 1.38422 14.7555L11.6686 8.21092ZM15 2V1.25H13.5V2V14V14.75H15V14V2Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  )
);
SkipForwardFill.displayName = "SkipForwardFill";
export { SkipForwardFill };
