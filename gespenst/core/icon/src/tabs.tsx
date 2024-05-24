import { forwardRef } from "react";

import type { Ref, SVGProps } from "react";
/**
 * This is Tabs icon
 * @param TabsProps - All normal SVG props are expected
 * @returns JSX.Element
 */
const Tabs = forwardRef(
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
        d="M13.5 13.5C14.0523 13.5 14.5 13.0523 14.5 12.5V7H9.14987C8.1619 7 7.2666 6.41816 6.86534 5.51535L5.52519 2.5H1.5V12.5C1.5 13.0523 1.94772 13.5 2.5 13.5H13.5ZM7.16667 2.5L8.23606 4.90614C8.39656 5.26727 8.75468 5.5 9.14987 5.5H14.5V2.5H7.16667ZM13.5 15C14.8807 15 16 13.8807 16 12.5V6.5V2.5V1H14.5H6.5H1.5H0V2.5V12.5C0 13.8807 1.11929 15 2.5 15H13.5Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  )
);
Tabs.displayName = "Tabs";
export { Tabs };
