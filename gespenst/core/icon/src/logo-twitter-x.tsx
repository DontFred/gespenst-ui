import { forwardRef } from "react";

import type { Ref, SVGProps } from "react";
/**
 * This is LogoTwitterX icon
 * @param LogoTwitterXProps - All normal SVG props are expected
 * @returns JSX.Element
 */
const LogoTwitterX = forwardRef(
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
        d="M0.5 0.5H5.75L9.48421 5.71053L14 0.5H16L10.3895 6.97368L16.5 15.5H11.25L7.51579 10.2895L3 15.5H1L6.61053 9.02632L0.5 0.5ZM12.0204 14L3.42043 2H4.97957L13.5796 14H12.0204Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  )
);
LogoTwitterX.displayName = "LogoTwitterX";
export { LogoTwitterX };
