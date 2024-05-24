import { forwardRef } from "react";

import type { Ref, SVGProps } from "react";
/**
 * This is FloppyDisk icon
 * @param FloppyDiskProps - All normal SVG props are expected
 * @returns JSX.Element
 */
const FloppyDisk = forwardRef(
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
        d="M13.5 4.72094V13.5C13.5 14.0523 13.0523 14.5 12.5 14.5H11.5V11C11.5 10.4477 11.0523 10 10.5 10H5.5C4.94772 10 4.5 10.4477 4.5 11V14.5H3.5C2.94772 14.5 2.5 14.0523 2.5 13.5V1.5H5V3.25V4H6.5V3.25V1.5H9.47383L13.5 4.72094ZM6 14.5H10V11.5H6V14.5ZM4.5 16H3.5C2.11929 16 1 14.8807 1 13.5V1.5V0H2.5H9.64922C9.87629 0 10.0966 0.0772807 10.2739 0.219131L14.6247 3.69976C14.8619 3.88953 15 4.17684 15 4.48062V13.5C15 14.8807 13.8807 16 12.5 16H11.5H10H6H4.5Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  )
);
FloppyDisk.displayName = "FloppyDisk";
export { FloppyDisk };
