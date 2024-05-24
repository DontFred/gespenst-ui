import { forwardRef } from "react";

import type { Ref, SVGProps } from "react";
/**
 * This is Users icon
 * @param UsersProps - All normal SVG props are expected
 * @returns JSX.Element
 */
const Users = forwardRef(
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
        d="M2.5 3.25C2.5 1.45507 3.95507 0 5.75 0H6.25C8.04493 0 9.5 1.45507 9.5 3.25V3.75C9.5 5.54493 8.04493 7 6.25 7H5.75C3.95507 7 2.5 5.54493 2.5 3.75V3.25ZM5.75 1.5C4.7835 1.5 4 2.2835 4 3.25V3.75C4 4.7165 4.7835 5.5 5.75 5.5H6.25C7.2165 5.5 8 4.7165 8 3.75V3.25C8 2.2835 7.2165 1.5 6.25 1.5H5.75ZM1.5 14.5V13.1709C2.31958 11.5377 3.99308 10.5 5.82945 10.5H6.17055C8.00692 10.5 9.68042 11.5377 10.5 13.1709V14.5H1.5ZM5.82945 9C3.35483 9 1.10604 10.4388 0.0690305 12.6857L0 12.8353V13V15.25V16H0.75H11.25H12V15.25V13V12.8353L11.931 12.6857C10.894 10.4388 8.64517 9 6.17055 9H5.82945ZM15.931 12.6857C15.3706 11.4715 14.4561 10.4931 13.3439 9.85058L12.5935 11.1494C13.399 11.6148 14.0681 12.3101 14.5 13.1709V14.5H13.5V16H15.25H16V15.25V13V12.8352L15.931 12.6857ZM11.25 0H10.5V1.5H11.25C12.2165 1.5 13 2.2835 13 3.25V3.75C13 4.7165 12.2165 5.5 11.25 5.5H10.5V7H11.25C13.0449 7 14.5 5.54493 14.5 3.75V3.25C14.5 1.45507 13.0449 0 11.25 0Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  )
);
Users.displayName = "Users";
export { Users };
