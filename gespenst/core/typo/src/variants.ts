import { cva } from "class-variance-authority";

/**
 * Text Variants \
 * Variants for text sizes and styles like heading, copy, label, button, etc.
 * They are spitted into two groups: size and variants. Size is auto using variants like 48 is a heading and 16 is a copy.\
 * Variants and sizes should be used separately.
 */
const textVariants = cva("m-0 font-sans", {
  variants: {
    size: {
      10: "text-[0.625rem] leading-3",
      12: "text-xs font-normal",
      14: "text-sm font-normal",
      16: "text-base font-normal",
      20: "text-xl font-semibold leading-6 tracking-[-0.020625rem]",
      24: "text-2xl font-semibold tracking-[-0.029375rem]",
      32: "text-[2rem] font-semibold leading-10 tracking-[-0.049375rem]",
      48: "text-5xl font-bold leading-[3.5rem] tracking-[-0.066875rem]",
    },
    variant: {
      "button-12": "text-xs font-medium tracking-[0px]",
      "button-14": "text-sm font-medium tracking-[0px]",
      "button-16": "text-base font-medium leading-5 tracking-[0px]",
      "copy-13":
        "text-[0.8125rem] font-normal leading-[1.125rem] tracking-[0px]",
      "copy-14": "text-sm font-normal leading-5 tracking-[0px]",
      "copy-16": "text-base font-normal leading-6 tracking-[0px]",
      "copy-18": "text-lg font-normal leading-7 tracking-[0px]",
      "copy-20": "text-xl font-normal leading-9 tracking-[0px]",
      "copy-24": "text-2xl font-normal leading-9 tracking-[0px]",
      "heading-16": "text-base font-semibold tracking-[-0.32px]",
      "heading-20":
        "text-xl font-semibold leading-[1.625rem] tracking-[-0.4px]",
      "heading-24": "text-2xl font-semibold leading-8 tracking-[-0.96px]",
      "heading-32": "text-[2rem] font-semibold leading-10 tracking-[-1.28px]",
      "heading-40":
        "text-[2.5rem] font-semibold leading-[3rem] tracking-[-2.4px]",
      "heading-48":
        "text-5xl font-semibold leading-[3.5rem] tracking-[-2.88px]",
      "heading-56":
        "text-[3.5rem] font-semibold leading-[3.5rem] tracking-[-3.36px]",
      "heading-64":
        "text-[4rem] font-semibold leading-[4rem] tracking-[-3.84px]",
      "heading-72":
        "text-7xl font-semibold leading-[4.5rem] tracking-[-4.32px]",
      "label-12": "text-xs font-normal tracking-[0px]",
      "label-13": "text-[0.8125rem] font-normal leading-4 tracking-[0px]",
      "label-14": "text-sm font-normal leading-5 tracking-[0px]",
      "label-16": "text-base font-normal leading-5 tracking-[0px]",
      "label-18": "text-lg font-normal leading-5 tracking-[0px]",
      "label-20": "text-xl font-normal leading-8 tracking-[0px]",
    },
  },
});

/**
 * Responsive Text Variants (Variant) \
 * The variants for responsive text styles like heading, copy, label, button, etc. \
 * It uses the same variants as the textVariants but with responsive breakpoints.
 */
const responsiveVariantTextVariants = cva("m-0 font-sans", {
  variants: {
    lg: {
      "button-12": "lg:text-xs lg:font-medium lg:tracking-[0px]",
      "button-14": "lg:text-sm lg:font-medium lg:tracking-[0px]",
      "button-16": "lg:text-base lg:font-medium lg:leading-5 lg:tracking-[0px]",
      "copy-13":
        "lg:text-[0.8125rem] lg:font-normal lg:leading-[1.125rem] lg:tracking-[0px]",
      "copy-14": "lg:text-sm lg:font-normal lg:leading-5 lg:tracking-[0px]",
      "copy-16": "lg:text-base lg:font-normal lg:leading-6 lg:tracking-[0px]",
      "copy-18": "lg:text-lg lg:font-normal lg:leading-7 lg:tracking-[0px]",
      "copy-20": "lg:text-xl lg:font-normal lg:leading-9 lg:tracking-[0px]",
      "copy-24": "lg:text-2xl lg:font-normal lg:leading-9 lg:tracking-[0px]",
      "heading-16": "lg:text-base lg:font-semibold lg:tracking-[-0.32px]",
      "heading-20":
        "lg:text-xl lg:font-semibold lg:leading-[1.625rem] lg:tracking-[-0.4px]",
      "heading-24":
        "lg:text-2xl lg:font-semibold lg:leading-8 lg:tracking-[-0.96px]",
      "heading-32":
        "lg:text-[2rem] lg:font-semibold lg:leading-10 lg:tracking-[-1.28px]",
      "heading-40":
        "lg:text-[2.5rem] lg:font-semibold lg:leading-[3rem] lg:tracking-[-2.4px]",
      "heading-48":
        "lg:text-5xl lg:font-semibold lg:leading-[3.5rem] lg:tracking-[-2.88px]",
      "heading-56":
        "lg:text-[3.5rem] lg:font-semibold lg:leading-[3.5rem] lg:tracking-[-3.36px]",
      "heading-64":
        "lg:text-[4rem] lg:font-semibold lg:leading-[4rem] lg:tracking-[-3.84px]",
      "heading-72":
        "lg:text-7xl lg:font-semibold lg:leading-[4.5rem] lg:tracking-[-4.32px]",
      "label-12": "lg:text-xs lg:font-normal lg:tracking-[0px]",
      "label-13":
        "lg:text-[0.8125rem] lg:font-normal lg:leading-4 lg:tracking-[0px]",
      "label-14": "lg:text-sm lg:font-normal lg:leading-5 lg:tracking-[0px]",
      "label-16": "lg:text-base lg:font-normal lg:leading-5 lg:tracking-[0px]",
      "label-18": "lg:text-lg lg:font-normal lg:leading-5 lg:tracking-[0px]",
      "label-20": "lg:text-xl lg:font-normal lg:leading-8 lg:tracking-[0px]",
    },
    md: {
      "button-12": "sm:text-xs sm:font-medium sm:tracking-[0px]",
      "button-14": "sm:text-sm sm:font-medium sm:tracking-[0px]",
      "button-16": "sm:text-base sm:font-medium sm:leading-5 sm:tracking-[0px]",
      "copy-13":
        "sm:text-[0.8125rem] sm:font-normal sm:leading-[1.125rem] sm:tracking-[0px]",
      "copy-14": "sm:text-sm sm:font-normal sm:leading-5 sm:tracking-[0px]",
      "copy-16": "sm:text-base sm:font-normal sm:leading-6 sm:tracking-[0px]",
      "copy-18": "sm:text-lg sm:font-normal sm:leading-7 sm:tracking-[0px]",
      "copy-20": "sm:text-xl sm:font-normal sm:leading-9 sm:tracking-[0px]",
      "copy-24": "sm:text-2xl sm:font-normal sm:leading-9 sm:tracking-[0px]",
      "heading-16": "sm:text-base sm:font-semibold sm:tracking-[-0.32px]",
      "heading-20":
        "sm:text-xl sm:font-semibold sm:leading-[1.625rem] sm:tracking-[-0.4px]",
      "heading-24":
        "sm:text-2xl sm:font-semibold sm:leading-8 sm:tracking-[-0.96px]",
      "heading-32":
        "sm:text-[2rem] sm:font-semibold sm:leading-10 sm:tracking-[-1.28px]",
      "heading-40":
        "sm:text-[2.5rem] sm:font-semibold sm:leading-[3rem] sm:tracking-[-2.4px]",
      "heading-48":
        "sm:text-5xl sm:font-semibold sm:leading-[3.5rem] sm:tracking-[-2.88px]",
      "heading-56":
        "sm:text-[3.5rem] sm:font-semibold sm:leading-[3.5rem] sm:tracking-[-3.36px]",
      "heading-64":
        "sm:text-[4rem] sm:font-semibold sm:leading-[4rem] sm:tracking-[-3.84px]",
      "heading-72":
        "sm:text-7xl sm:font-semibold sm:leading-[4.5rem] sm:tracking-[-4.32px]",
      "label-12": "sm:text-xs sm:font-normal sm:tracking-[0px]",
      "label-13":
        "sm:text-[0.8125rem] sm:font-normal sm:leading-4 sm:tracking-[0px]",
      "label-14": "sm:text-sm sm:font-normal sm:leading-5 sm:tracking-[0px]",
      "label-16": "sm:text-base sm:font-normal sm:leading-5 sm:tracking-[0px]",
      "label-18": "sm:text-lg sm:font-normal sm:leading-5 sm:tracking-[0px]",
      "label-20": "sm:text-xl sm:font-normal sm:leading-8 sm:tracking-[0px]",
    },
    sm: {
      "button-12": "text-xs font-medium tracking-[0px]",
      "button-14": "text-sm font-medium tracking-[0px]",
      "button-16": "text-base font-medium leading-5 tracking-[0px]",
      "copy-13":
        "text-[0.8125rem] font-normal leading-[1.125rem] tracking-[0px]",
      "copy-14": "text-sm font-normal leading-5 tracking-[0px]",
      "copy-16": "text-base font-normal leading-6 tracking-[0px]",
      "copy-18": "text-lg font-normal leading-7 tracking-[0px]",
      "copy-20": "text-xl font-normal leading-9 tracking-[0px]",
      "copy-24": "text-2xl font-normal leading-9 tracking-[0px]",
      "heading-16": "text-base font-semibold tracking-[-0.32px]",
      "heading-20":
        "text-xl font-semibold leading-[1.625rem] tracking-[-0.4px]",
      "heading-24": "text-2xl font-semibold leading-8 tracking-[-0.96px]",
      "heading-32": "text-[2rem] font-semibold leading-10 tracking-[-1.28px]",
      "heading-40":
        "text-[2.5rem] font-semibold leading-[3rem] tracking-[-2.4px]",
      "heading-48":
        "text-5xl font-semibold leading-[3.5rem] tracking-[-2.88px]",
      "heading-56":
        "text-[3.5rem] font-semibold leading-[3.5rem] tracking-[-3.36px]",
      "heading-64":
        "text-[4rem] font-semibold leading-[4rem] tracking-[-3.84px]",
      "heading-72":
        "text-7xl font-semibold leading-[4.5rem] tracking-[-4.32px]",
      "label-12": "text-xs font-normal tracking-[0px]",
      "label-13": "text-[0.8125rem] font-normal leading-4 tracking-[0px]",
      "label-14": "text-sm font-normal leading-5 tracking-[0px]",
      "label-16": "text-base font-normal leading-5 tracking-[0px]",
      "label-18": "text-lg font-normal leading-5 tracking-[0px]",
      "label-20": "text-xl font-normal leading-8 tracking-[0px]",
    },
  },
});

/**
 * Responsive Text Variants (Size) \
 * The variants for responsive text styles like 10, 12, 14 etc. \
 * It uses the same sizes as the textVariants but with responsive breakpoints.
 */
const responsiveSizeTextVariants = cva("m-0 font-sans", {
  variants: {
    lg: {
      10: "lg:text-[0.625rem] lg:leading-3",
      12: "lg:text-xs lg:font-normal",
      14: "lg:text-sm lg:font-normal",
      16: "lg:text-base lg:font-normal",
      20: "lg:text-xl lg:font-semibold lg:leading-6 lg:tracking-[-0.020625rem]",
      24: "lg:text-2xl lg:font-semibold lg:tracking-[-0.029375rem]",
      32: "lg:text-[2rem] lg:font-semibold lg:leading-10 lg:tracking-[-0.049375rem]",
      48: "lg:text-5xl lg:font-bold lg:leading-[3.5rem] lg:tracking-[-0.066875rem]",
    },
    md: {
      10: "sm:text-[0.625rem] sm:leading-3",
      12: "sm:text-xs sm:font-normal",
      14: "sm:text-sm sm:font-normal",
      16: "sm:text-base sm:font-normal",
      20: "sm:text-xl sm:font-semibold sm:leading-6 sm:tracking-[-0.020625rem]",
      24: "sm:text-2xl sm:font-semibold sm:tracking-[-0.029375rem]",
      32: "sm:text-[2rem] sm:font-semibold sm:leading-10 sm:tracking-[-0.049375rem]",
      48: "sm:text-5xl sm:font-bold sm:leading-[3.5rem] sm:tracking-[-0.066875rem]",
    },
    sm: {
      10: "text-[0.625rem] leading-3",
      12: "text-xs font-normal",
      14: "text-sm font-normal",
      16: "text-base font-normal",
      20: "text-xl font-semibold leading-6 tracking-[-0.020625rem]",
      24: "text-2xl font-semibold tracking-[-0.029375rem]",
      32: "text-[2rem] font-semibold leading-10 tracking-[-0.049375rem]",
      48: "text-5xl font-bold leading-[3.5rem] tracking-[-0.066875rem]",
    },
  },
});

export {
  responsiveSizeTextVariants,
  responsiveVariantTextVariants,
  textVariants,
};
