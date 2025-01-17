import { forwardRef } from "react";

import type { Ref, SVGProps } from "react";
/**
 * This is Option icon
 * @param OptionProps - All normal SVG props are expected
 * @returns JSX.Element
 */
const Option = forwardRef(
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
        d="M0.75 3.5H0V5H0.75H4.36513C4.63811 5 4.88953 5.14832 5.02157 5.38724L9.41557 13.3383C9.81168 14.0551 10.5659 14.5 11.3849 14.5H15.25H16V13H15.25H11.3849C11.1119 13 10.8605 12.8517 10.7284 12.6128L6.33443 4.66171C5.93832 3.94495 5.18406 3.5 4.36513 3.5H0.75ZM11.75 3.5H11V5H11.75H15.25H16V3.5H15.25H11.75Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  )
);
Option.displayName = "Option";
export { Option };
