import type { HTMLArkProps } from "@ark-ui/react/factory";
import type { Ref } from "react";

export interface DescriptionProps extends HTMLArkProps<"dl"> {
  detailsClassName?: string;
  detailsRef?: Ref<HTMLElement>;
  detailsTextClassName?: string;
  detailsTextRef?: Ref<HTMLDivElement>;
  label?: string;
  labelClassName?: string;
  labelRef?: Ref<HTMLElement>;
  labelTextClassName?: string;
  labelTextRef?: Ref<HTMLSpanElement>;
  tooltip?: string;
  tooltipClassName?: string;
  tooltipIconClassName?: string;
  tooltipIconRef?: Ref<SVGSVGElement>;
  tooltipRef?: Ref<HTMLDivElement>;
}
