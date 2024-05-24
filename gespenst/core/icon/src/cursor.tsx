import { forwardRef } from "react";

import type { Ref, SVGProps } from "react";
/**
 * This is Cursor icon
 * @param CursorProps - All normal SVG props are expected
 * @returns JSX.Element
 */
const Cursor = forwardRef(
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
        d="M0.547184 1.51189L-0.0255737 -0.0255127L1.51183 0.547244L14.2618 5.29724L15.9637 5.93129L14.3103 6.68283L9.79559 8.73499L14.5303 13.4697L13.4697 14.5304L8.73493 9.79565L6.68277 14.3104L5.93123 15.9638L5.29718 14.2619L0.547184 1.51189ZM8.53103 7.6621L12.0363 6.06882L2.52556 2.52562L6.06876 12.0363L7.66204 8.53109C7.83713 8.1459 8.14584 7.83719 8.53103 7.6621Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  )
);
Cursor.displayName = "Cursor";
export { Cursor };
