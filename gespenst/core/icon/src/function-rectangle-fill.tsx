import { forwardRef } from "react";

import type { Ref, SVGProps } from "react";
/**
 * This is FunctionRectangleFill icon
 * @param FunctionRectangleFillProps - All normal SVG props are expected
 * @returns JSX.Element
 */
const FunctionRectangleFill = forwardRef(
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
        d="M1 0H15V13.5C15 14.8807 13.8807 16 12.5 16H3.5C2.11929 16 1 14.8807 1 13.5V0ZM9.75 4.5C9.19772 4.5 8.75 4.94772 8.75 5.5V6.5H9.75H10.5V8H9.75H8.75V10.5C8.75 11.8807 7.63071 13 6.25 13H5.5V11.5H6.25C6.80228 11.5 7.25 11.0523 7.25 10.5V8H6.25H5.5V6.5H6.25H7.25V5.5C7.25 4.11929 8.36929 3 9.75 3H10.5V4.5H9.75Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  )
);
FunctionRectangleFill.displayName = "FunctionRectangleFill";
export { FunctionRectangleFill };