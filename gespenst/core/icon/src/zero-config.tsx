import { forwardRef } from "react";

import type { Ref, SVGProps } from "react";
/**
 * This is ZeroConfig icon
 * @param ZeroConfigProps - All normal SVG props are expected
 * @returns JSX.Element
 */
const ZeroConfig = forwardRef(
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
        d="M15.5303 1.53032L16.0607 0.999991L15 -0.0606689L14.4697 0.469661L12.3911 2.54823C11.1902 1.57978 9.66282 0.999991 7.99999 0.999991C4.134 0.999991 0.999991 4.134 0.999991 7.99999C0.999991 9.66282 1.57978 11.1902 2.54823 12.3911L0.469661 14.4697L-0.0606689 15L0.999991 16.0607L1.53032 15.5303L3.60889 13.4517C4.80975 14.4202 6.33716 15 7.99999 15C11.866 15 15 11.866 15 7.99999C15 6.33716 14.4202 4.80975 13.4517 3.60889L15.5303 1.53032ZM11.3226 3.61669C10.3996 2.91589 9.24835 2.49999 7.99999 2.49999C4.96243 2.49999 2.49999 4.96243 2.49999 7.99999C2.49999 9.24834 2.91589 10.3996 3.61669 11.3226L11.3226 3.61669ZM4.67735 12.3833L12.3833 4.67735C13.0841 5.60042 13.5 6.75164 13.5 7.99999C13.5 11.0376 11.0376 13.5 7.99999 13.5C6.75164 13.5 5.60042 13.0841 4.67735 12.3833Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  )
);
ZeroConfig.displayName = "ZeroConfig";
export { ZeroConfig };
