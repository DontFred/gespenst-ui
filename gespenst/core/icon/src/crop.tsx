import { forwardRef } from "react";

import type { Ref, SVGProps } from "react";
/**
 * This is Crop icon
 * @param CropProps - All normal SVG props are expected
 * @returns JSX.Element
 */
const Crop = forwardRef(
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
        d="M5 0.75V0H3.5V0.75V3.5H0.75H0V5H0.75H3.5V11.5C3.5 12.0523 3.94771 12.5 4.5 12.5H11V15.25V16H12.5V15.25V12.5H15.25H16V11H15.25H12.5V4.5C12.5 3.94772 12.0523 3.5 11.5 3.5H5V0.75ZM5 5V11H11V5H5Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  )
);
Crop.displayName = "Crop";
export { Crop };
