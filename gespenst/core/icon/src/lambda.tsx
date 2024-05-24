import { forwardRef } from "react";

import type { Ref, SVGProps } from "react";
/**
 * This is Lambda icon
 * @param LambdaProps - All normal SVG props are expected
 * @returns JSX.Element
 */
const Lambda = forwardRef(
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
        d="M2.75 0H2V1.5H2.75C3.6834 1.5 4.5339 2.03586 4.93683 2.87781L6.37319 5.87924L6.31873 5.99756L2.31873 14.6864L2.00509 15.3676L3.36764 15.9949L3.68127 15.3136L7.21486 7.63798L10.7173 14.9567C11.3304 16.2379 13.1112 16.3502 13.8805 15.1562L14.2867 14.5257L13.0257 13.7133L12.6195 14.3438C12.486 14.5511 12.1768 14.5316 12.0703 14.3091L6.28987 2.2303C5.63765 0.867411 4.26092 0 2.75 0Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  )
);
Lambda.displayName = "Lambda";
export { Lambda };
