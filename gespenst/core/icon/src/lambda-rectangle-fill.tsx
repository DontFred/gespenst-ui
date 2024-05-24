import { forwardRef } from "react";

import type { Ref, SVGProps } from "react";
/**
 * This is LambdaRectangleFill icon
 * @param LambdaRectangleFillProps - All normal SVG props are expected
 * @returns JSX.Element
 */
const LambdaRectangleFill = forwardRef(
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
        d="M1 0H15V13.5C15 14.8807 13.8807 16 12.5 16H3.5C2.11929 16 1 14.8807 1 13.5V0ZM4.85706 3.45166H5.60706C6.53368 3.45166 7.37801 3.98363 7.77802 4.81948L10.6449 10.8102L10.8629 10.4718L12.1239 11.2843L11.7177 11.9147C11.1642 12.7738 9.88304 12.693 9.4419 11.7712L7.93441 8.62111L6.28439 12.0915L5.96235 12.7688L4.60767 12.1247L4.92972 11.4474L7.05254 6.98258L7.10125 6.88014L6.42497 5.46699C6.27427 5.15208 5.95616 4.95166 5.60706 4.95166H4.85706V3.45166Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  )
);
LambdaRectangleFill.displayName = "LambdaRectangleFill";
export { LambdaRectangleFill };
