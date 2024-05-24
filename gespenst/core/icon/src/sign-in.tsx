import { forwardRef } from "react";

import type { Ref, SVGProps } from "react";
/**
 * This is SignIn icon
 * @param SignInProps - All normal SVG props are expected
 * @returns JSX.Element
 */
const SignIn = forwardRef(
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
        d="M13.5 2.5L9.25 2.5V1H14C14.5523 1 15 1.44771 15 2L15 14C15 14.5523 14.5523 15 14 15H9.25V13.5H13.5L13.5 2.5ZM8.43934 7.24999L6.46967 5.28031L5.93934 4.74998L7 3.68932L7.53033 4.21965L10.6036 7.29288C10.9941 7.6834 10.9941 8.31657 10.6036 8.70709L7.53033 11.7803L7 12.3106L5.93934 11.25L6.46967 10.7197L8.43934 8.74999L1.75 8.74999H1V7.24999H1.75L8.43934 7.24999Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  )
);
SignIn.displayName = "SignIn";
export { SignIn };
