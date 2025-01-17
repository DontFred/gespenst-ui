import { forwardRef } from "react";

import type { Ref, SVGProps } from "react";
/**
 * This is PictureInPicture icon
 * @param PictureInPictureProps - All normal SVG props are expected
 * @returns JSX.Element
 */
const PictureInPicture = forwardRef(
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
        d="M6.75 13.5H1.5V2.5H14.5V6.75V7.5H16V6.75V2C16 1.44772 15.5523 1 15 1H1C0.447714 1 0 1.44772 0 2V14C0 14.5523 0.447716 15 1 15H6.75H7.5V13.5H6.75ZM10.5 10.5H14.5V13.5H10.5V10.5ZM9 9H10.5H14.5H16V10.5V13.5V15H14.5H10.5H9V13.5V10.5V9Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  )
);
PictureInPicture.displayName = "PictureInPicture";
export { PictureInPicture };
