import { forwardRef } from "react";

import type { Ref, SVGProps } from "react";
/**
 * This is BranchPlus icon
 * @param BranchPlusProps - All normal SVG props are expected
 * @returns JSX.Element
 */
const BranchPlus = forwardRef(
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
        d="M10 0a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h.854a5.25 5.25 0 0 1-3.969 3.175 3.006 3.006 0 0 0-2.135-2.08V1h-1.5V9.095a3.001 3.001 0 1 0 3.671 3.592A6.75 6.75 0 0 0 12.447 8H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2h-4Zm.25 3.375h-.625v1.25h1.75v1.75h1.25v-1.75h1.75v-1.25h-1.75v-1.75h-1.25v1.75H10.25ZM5.5 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  )
);
BranchPlus.displayName = "BranchPlus";
export { BranchPlus };
