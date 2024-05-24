import { forwardRef } from "react";

import type { Ref, SVGProps } from "react";
/**
 * This is FunctionMiddleware icon
 * @param FunctionMiddlewareProps - All normal SVG props are expected
 * @returns JSX.Element
 */
const FunctionMiddleware = forwardRef(
  (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      height="1em"
      ref={ref}
      strokeLinejoin="round"
      viewBox="0 0 16 16"
      width="1em"
      {...props}
    >
      <g clipPath="url(#clip0_53_1350pbbcv98e)">
        <path
          clipRule="evenodd"
          d="M2.25 0C1.00736 0 0 1.00736 0 2.25V13.75C0 14.9926 1.00736 16 2.25 16H13.75C14.9926 16 16 14.9926 16 13.75V2.25C16 1.00736 14.9926 0 13.75 0H2.25ZM1.5 2.25C1.5 1.83579 1.83579 1.5 2.25 1.5H13.75C14.1642 1.5 14.5 1.83579 14.5 2.25V13.75C14.5 14.1642 14.1642 14.5 13.75 14.5H2.25C1.83579 14.5 1.5 14.1642 1.5 13.75V2.25ZM5.5 10V7.125C5.5 6.64175 5.89175 6.25 6.375 6.25C6.85825 6.25 7.25 6.64175 7.25 7.125V10.5V11.25H8.75V10.5V7.125V7.12497C8.75 6.64172 9.14175 6.24997 9.625 6.24997C10.1082 6.24997 10.5 6.64172 10.5 7.12497V10.5V11.25H12V10.5V7.12497C12 5.81329 10.9367 4.74997 9.625 4.74997C8.99638 4.74997 8.42481 4.99419 7.99998 5.39292C7.57516 4.99421 7.0036 4.75 6.375 4.75C6.066 4.75 5.77078 4.80901 5.5 4.91638V4.75H4V5.5V7.125V10V10.5V10.75V11.25H5.5V10.75V10.5V10Z"
          fill="currentColor"
          fillRule="evenodd"
        />
      </g>
      <defs>
        <clipPath id="clip0_53_1350pbbcv98e">
          <rect fill="currentColor" height={16} width={16} />
        </clipPath>
      </defs>
    </svg>
  )
);
FunctionMiddleware.displayName = "FunctionMiddleware";
export { FunctionMiddleware };
