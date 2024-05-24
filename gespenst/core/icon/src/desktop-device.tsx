import { forwardRef } from "react";

import type { Ref, SVGProps } from "react";
/**
 * This is DesktopDevice icon
 * @param DesktopDeviceProps - All normal SVG props are expected
 * @returns JSX.Element
 */
const DesktopDevice = forwardRef(
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
        d="M0 2C0 1.44772 0.447715 1 1 1H15C15.5523 1 16 1.44772 16 2V10.5C16 11.0523 15.5523 11.5 15 11.5H8.75V14.5H9.75H10.5V16H9.75H6.25H5.5V14.5H6.25H7.25V11.5H1C0.447714 11.5 0 11.0523 0 10.5V2ZM1.5 2.5V10H14.5V2.5H1.5Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  )
);
DesktopDevice.displayName = "DesktopDevice";
export { DesktopDevice };
