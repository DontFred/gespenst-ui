import { forwardRef } from "react";

import type { Ref, SVGProps } from "react";
/**
 * This is Prism icon
 * @param PrismProps - All normal SVG props are expected
 * @returns JSX.Element
 */
const Prism = forwardRef(
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
        d="M6.14568 3.56625L7 2L7.85432 3.56625L9.03582 5.73233L11.908 2.03954L13.092 2.96046L9.81914 7.16843L9.86518 7.25282L15.5036 5.29163L15.9964 6.70837L10.5933 8.58771L10.6947 8.7736L15.8903 9.76325L15.6097 11.2368L11.6241 10.4776L12.1818 11.5L13 13H11.2914H2.70863H1L1.81818 11.5L3.31818 8.75H0V7.25H4.13636L6.14568 3.56625ZM3.52681 11.5L7 5.13249L10.4732 11.5H3.52681Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  )
);
Prism.displayName = "Prism";
export { Prism };
