import { forwardRef } from "react";

import type { Ref, SVGProps } from "react";
/**
 * This is ArrowDownRight icon
 * @param ArrowDownRightProps - All normal SVG props are expected
 * @returns JSX.Element
 */
const ArrowDownRight = forwardRef(
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
        d="M12.4994 11.4399V5.74999V4.99999H13.9994V5.74999V12.9994C13.9994 13.5517 13.5517 13.9994 12.9994 13.9994H5.74999H4.99999V12.4994H5.74999H11.4376L2.21908 3.28092L1.68875 2.75059L2.74941 1.68993L3.27974 2.22026L12.4994 11.4399Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  )
);
ArrowDownRight.displayName = "ArrowDownRight";
export { ArrowDownRight };
