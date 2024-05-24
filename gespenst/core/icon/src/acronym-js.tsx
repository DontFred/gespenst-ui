import { forwardRef } from "react";

import type { Ref, SVGProps } from "react";
/**
 * This is AcronymJs icon
 * @param AcronymJsProps - All normal SVG props are expected
 * @returns JSX.Element
 */
const AcronymJs = forwardRef(
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
        d="M0 2.5C0 1.11929 1.11929 0 2.5 0H13.5C14.8807 0 16 1.11929 16 2.5V13.5C16 14.8807 14.8807 16 13.5 16H2.5C1.11929 16 0 14.8807 0 13.5V2.5ZM7.5 8V12.125C7.5 12.3321 7.33211 12.5 7.125 12.5C6.91789 12.5 6.75 12.3321 6.75 12.125V11.75H5.25V12.125C5.25 13.1605 6.08947 14 7.125 14C8.16053 14 9 13.1605 9 12.125V8H7.5ZM11.75 9.875C11.75 9.66789 11.9179 9.5 12.125 9.5H13.5V8H12.125C11.0895 8 10.25 8.83947 10.25 9.875C10.25 10.9105 11.0895 11.75 12.125 11.75C12.3321 11.75 12.5 11.9179 12.5 12.125C12.5 12.3321 12.3321 12.5 12.125 12.5H10.5V14H12.125C13.1605 14 14 13.1605 14 12.125C14 11.0895 13.1605 10.25 12.125 10.25C11.9179 10.25 11.75 10.0821 11.75 9.875Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  )
);
AcronymJs.displayName = "AcronymJs";
export { AcronymJs };
