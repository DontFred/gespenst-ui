import { forwardRef } from "react";

import type { Ref, SVGProps } from "react";
/**
 * This is Tag icon
 * @param TagProps - All normal SVG props are expected
 * @returns JSX.Element
 */
const Tag = forwardRef(
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
        d="M1.5 1.5H6.34315C7.00619 1.5 7.64207 1.76339 8.11091 2.23223L13.8787 8L8 13.8787L2.23223 8.11091C1.76339 7.64207 1.5 7.00619 1.5 6.34315V1.5ZM16 8L14.9393 6.93934L9.17157 1.17157C8.42143 0.421427 7.40401 0 6.34315 0H1.5H0V1.5V6.34315C0 7.40401 0.421426 8.42143 1.17157 9.17157L6.93934 14.9393L8 16L9.06066 14.9393L14.9393 9.06066L16 8ZM4.5 5.25C4.91421 5.25 5.25 4.91421 5.25 4.5C5.25 4.08579 4.91421 3.75 4.5 3.75C4.08579 3.75 3.75 4.08579 3.75 4.5C3.75 4.91421 4.08579 5.25 4.5 5.25Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  )
);
Tag.displayName = "Tag";
export { Tag };
