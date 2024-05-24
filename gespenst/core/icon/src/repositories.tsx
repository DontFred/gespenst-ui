import { forwardRef } from "react";

import type { Ref, SVGProps } from "react";
/**
 * This is Repositories icon
 * @param RepositoriesProps - All normal SVG props are expected
 * @returns JSX.Element
 */
const Repositories = forwardRef(
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
        d="M4.25 0C3.00736 0 2 1.00736 2 2.25V11V11.25V11.5C2 12.5252 2.61705 13.4062 3.5 13.792V11.5V11.25V11C3.5 10.4477 3.94772 10 4.5 10H12.5V11.2305V12.5H10.5V14H12.5H14V12.5V11.2305V10V8.5V0.75V0H13.25H4.25ZM12.5 8.5V1.5H4.25C3.83579 1.5 3.5 1.83579 3.5 2.25V8.70802C3.80623 8.57422 4.14445 8.5 4.5 8.5H12.5ZM5.5 11.5C5.22386 11.5 5 11.7239 5 12V16L7 14.75L9 16V12C9 11.7239 8.77614 11.5 8.5 11.5H5.5Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  )
);
Repositories.displayName = "Repositories";
export { Repositories };
