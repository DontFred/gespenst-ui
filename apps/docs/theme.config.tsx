import { useRouter } from "next/router";
import { ThemeSwitch, useConfig } from "nextra-theme-docs";
import { Fragment } from "react";

import type { DocsThemeConfig } from "nextra-theme-docs";

const logo = (
  <Fragment>
    <svg
      fill="none"
      height="35"
      viewBox="0 0 498 105"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M154.373 40.4485C153.923 38.8842 153.291 37.502 152.477 36.302C151.662 35.0805 150.666 34.0519 149.487 33.2162C148.33 32.359 147.001 31.7054 145.501 31.2554C144.023 30.8054 142.383 30.5804 140.583 30.5804C137.219 30.5804 134.262 31.4161 131.712 33.0876C129.183 34.7591 127.211 37.1913 125.797 40.3843C124.383 43.5558 123.676 47.4345 123.676 52.0204C123.676 56.6062 124.372 60.5063 125.765 63.7207C127.158 66.9351 129.129 69.3888 131.679 71.0817C134.23 72.7532 137.24 73.5889 140.712 73.5889C143.862 73.5889 146.551 73.0318 148.78 71.9174C151.03 70.7817 152.744 69.1852 153.923 67.128C155.123 65.0708 155.723 62.6386 155.723 59.8313L158.552 60.2492H141.58V49.7703H169.127V58.0634C169.127 63.8493 167.906 68.8209 165.463 72.9782C163.02 77.114 159.655 80.307 155.37 82.5571C151.084 84.7857 146.176 85.9 140.648 85.9C134.476 85.9 129.054 84.5393 124.383 81.8178C119.711 79.0748 116.068 75.1854 113.454 70.1495C110.861 65.0922 109.564 59.092 109.564 52.1489C109.564 46.813 110.336 42.0557 111.879 37.877C113.443 33.6769 115.629 30.1196 118.436 27.2053C121.243 24.2909 124.511 22.0729 128.24 20.5515C131.969 19.03 136.008 18.2692 140.358 18.2692C144.087 18.2692 147.559 18.8157 150.773 19.9086C153.987 20.9801 156.837 22.5015 159.323 24.473C161.83 26.4445 163.877 28.791 165.463 31.5125C167.048 34.2126 168.066 37.1913 168.516 40.4485H154.373ZM196.666 85.9643C191.587 85.9643 187.216 84.9357 183.551 82.8785C179.908 80.7999 177.101 77.8641 175.13 74.0711C173.158 70.2567 172.172 65.7458 172.172 60.5385C172.172 55.4597 173.158 51.0025 175.13 47.1666C177.101 43.3308 179.876 40.3414 183.455 38.1985C187.055 36.0555 191.277 34.9841 196.12 34.9841C199.377 34.9841 202.409 35.5091 205.216 36.5591C208.045 37.5877 210.509 39.1414 212.609 41.22C214.731 43.2986 216.381 45.913 217.56 49.0631C218.738 52.1918 219.327 55.8562 219.327 60.0563V63.8172H177.637V55.3312H206.438C206.438 53.3597 206.009 51.6132 205.152 50.0917C204.295 48.5702 203.105 47.3809 201.584 46.5237C200.084 45.6451 198.337 45.2058 196.345 45.2058C194.266 45.2058 192.423 45.688 190.816 46.6523C189.23 47.5952 187.987 48.8702 187.087 50.4774C186.187 52.0632 185.726 53.8311 185.705 55.7812V63.8493C185.705 66.2922 186.155 68.403 187.055 70.1817C187.976 71.9603 189.273 73.3318 190.944 74.2961C192.616 75.2604 194.598 75.7426 196.891 75.7426C198.412 75.7426 199.805 75.5283 201.07 75.0997C202.334 74.6711 203.416 74.0282 204.316 73.171C205.216 72.3139 205.902 71.2638 206.373 70.0209L219.038 70.8567C218.395 73.8996 217.077 76.5569 215.084 78.8284C213.113 81.0784 210.563 82.8356 207.434 84.1C204.327 85.3429 200.738 85.9643 196.666 85.9643ZM264.184 49.706L251.648 50.4774C251.433 49.406 250.973 48.4417 250.266 47.5845C249.558 46.7059 248.626 46.0094 247.469 45.4951C246.333 44.9594 244.973 44.6915 243.387 44.6915C241.265 44.6915 239.476 45.1416 238.019 46.0416C236.562 46.9202 235.833 48.0988 235.833 49.5774C235.833 50.756 236.304 51.7525 237.247 52.5668C238.19 53.3811 239.808 54.0347 242.101 54.5276L251.037 56.3276C255.837 57.3134 259.416 58.8991 261.773 61.0849C264.13 63.2707 265.309 66.1422 265.309 69.6995C265.309 72.9353 264.355 75.7747 262.448 78.2176C260.562 80.6606 257.969 82.5678 254.669 83.9393C251.391 85.2893 247.608 85.9643 243.322 85.9643C236.787 85.9643 231.579 84.6036 227.701 81.882C223.843 79.1391 221.582 75.4104 220.918 70.696L234.386 69.9888C234.794 71.9817 235.779 73.5032 237.344 74.5532C238.908 75.5818 240.912 76.0961 243.355 76.0961C245.755 76.0961 247.683 75.6354 249.141 74.7139C250.619 73.7711 251.369 72.5603 251.391 71.0817C251.369 69.8388 250.844 68.8209 249.816 68.028C248.787 67.2137 247.201 66.5923 245.058 66.1637L236.508 64.46C231.686 63.4957 228.097 61.8242 225.74 59.4456C223.404 57.0669 222.236 54.0347 222.236 50.3489C222.236 47.1773 223.093 44.4451 224.808 42.1522C226.543 39.8592 228.976 38.0913 232.104 36.8484C235.254 35.6055 238.94 34.9841 243.162 34.9841C249.398 34.9841 254.305 36.302 257.884 38.9378C261.484 41.5736 263.584 45.163 264.184 49.706ZM268.772 103.515V35.627H282.272V43.9201H282.883C283.483 42.5915 284.351 41.2414 285.487 39.87C286.644 38.4771 288.144 37.3199 289.987 36.3984C291.851 35.4555 294.166 34.9841 296.93 34.9841C300.53 34.9841 303.852 35.927 306.895 37.8127C309.938 39.6771 312.37 42.495 314.191 46.2666C316.013 50.0167 316.924 54.7204 316.924 60.3778C316.924 65.8851 316.034 70.5352 314.256 74.3282C312.498 78.0998 310.098 80.9606 307.055 82.9106C304.034 84.8393 300.648 85.8036 296.898 85.8036C294.241 85.8036 291.98 85.3643 290.116 84.4857C288.273 83.6071 286.762 82.5035 285.583 81.1749C284.405 79.8248 283.505 78.4641 282.883 77.0926H282.465V103.515H268.772ZM282.176 60.3135C282.176 63.2493 282.583 65.8101 283.398 67.9959C284.212 70.1817 285.39 71.8853 286.933 73.1068C288.476 74.3068 290.351 74.9068 292.559 74.9068C294.787 74.9068 296.673 74.2961 298.216 73.0746C299.759 71.8317 300.927 70.1174 301.72 67.9316C302.534 65.7244 302.941 63.185 302.941 60.3135C302.941 57.4634 302.545 54.9562 301.752 52.7918C300.959 50.6274 299.791 48.9345 298.248 47.7131C296.705 46.4916 294.809 45.8809 292.559 45.8809C290.33 45.8809 288.444 46.4702 286.901 47.6488C285.38 48.8274 284.212 50.4989 283.398 52.6632C282.583 54.8276 282.176 57.3777 282.176 60.3135ZM343.394 85.9643C338.315 85.9643 333.943 84.9357 330.279 82.8785C326.636 80.7999 323.829 77.8641 321.857 74.0711C319.886 70.2567 318.9 65.7458 318.9 60.5385C318.9 55.4597 319.886 51.0025 321.857 47.1666C323.829 43.3308 326.604 40.3414 330.183 38.1985C333.783 36.0555 338.004 34.9841 342.847 34.9841C346.105 34.9841 349.137 35.5091 351.944 36.5591C354.773 37.5877 357.237 39.1414 359.337 41.22C361.459 43.2986 363.109 45.913 364.287 49.0631C365.466 52.1918 366.055 55.8562 366.055 60.0563V63.8172H324.365V55.3312H353.165C353.165 53.3597 352.737 51.6132 351.88 50.0917C351.023 48.5702 349.833 47.3809 348.312 46.5237C346.812 45.6451 345.065 45.2058 343.072 45.2058C340.994 45.2058 339.151 45.688 337.544 46.6523C335.958 47.5952 334.715 48.8702 333.815 50.4774C332.915 52.0632 332.454 53.8311 332.433 55.7812V63.8493C332.433 66.2922 332.883 68.403 333.783 70.1817C334.704 71.9603 336.001 73.3318 337.672 74.2961C339.344 75.2604 341.326 75.7426 343.619 75.7426C345.14 75.7426 346.533 75.5283 347.797 75.0997C349.062 74.6711 350.144 74.0282 351.044 73.171C351.944 72.3139 352.63 71.2638 353.101 70.0209L365.766 70.8567C365.123 73.8996 363.805 76.5569 361.812 78.8284C359.841 81.0784 357.291 82.8356 354.162 84.1C351.055 85.3429 347.465 85.9643 343.394 85.9643ZM383.525 56.4562V85H369.832V35.627H382.882V44.338H383.461C384.554 41.4664 386.386 39.1949 388.957 37.5234C391.529 35.8305 394.647 34.9841 398.311 34.9841C401.74 34.9841 404.729 35.7341 407.279 37.2342C409.829 38.7342 411.812 40.8771 413.226 43.6629C414.64 46.4273 415.347 49.7274 415.347 53.5633V85H401.654V56.0062C401.676 52.9847 400.904 50.6274 399.34 48.9345C397.775 47.2202 395.622 46.363 392.879 46.363C391.036 46.363 389.407 46.7595 387.993 47.5523C386.6 48.3452 385.507 49.5024 384.714 51.0239C383.943 52.5239 383.546 54.3347 383.525 56.4562ZM462.06 49.706L449.524 50.4774C449.31 49.406 448.849 48.4417 448.142 47.5845C447.435 46.7059 446.503 46.0094 445.345 45.4951C444.21 44.9594 442.849 44.6915 441.263 44.6915C439.142 44.6915 437.352 45.1416 435.895 46.0416C434.438 46.9202 433.709 48.0988 433.709 49.5774C433.709 50.756 434.181 51.7525 435.124 52.5668C436.067 53.3811 437.684 54.0347 439.977 54.5276L448.913 56.3276C453.714 57.3134 457.292 58.8991 459.649 61.0849C462.007 63.2707 463.185 66.1422 463.185 69.6995C463.185 72.9353 462.232 75.7747 460.324 78.2176C458.439 80.6606 455.846 82.5678 452.546 83.9393C449.267 85.2893 445.485 85.9643 441.199 85.9643C434.663 85.9643 429.456 84.6036 425.577 81.882C421.72 79.1391 419.459 75.4104 418.795 70.696L432.263 69.9888C432.67 71.9817 433.656 73.5032 435.22 74.5532C436.784 75.5818 438.788 76.0961 441.231 76.0961C443.631 76.0961 445.56 75.6354 447.017 74.7139C448.496 73.7711 449.246 72.5603 449.267 71.0817C449.246 69.8388 448.721 68.8209 447.692 68.028C446.663 67.2137 445.078 66.5923 442.935 66.1637L434.384 64.46C429.563 63.4957 425.973 61.8242 423.616 59.4456C421.28 57.0669 420.112 54.0347 420.112 50.3489C420.112 47.1773 420.97 44.4451 422.684 42.1522C424.42 39.8592 426.852 38.0913 429.981 36.8484C433.131 35.6055 436.817 34.9841 441.038 34.9841C447.274 34.9841 452.181 36.302 455.76 38.9378C459.36 41.5736 461.46 45.163 462.06 49.706ZM492.91 35.627V45.913H463.177V35.627H492.91ZM469.927 23.798H483.62V69.8281C483.62 71.0924 483.813 72.0781 484.199 72.7853C484.585 73.4711 485.12 73.9532 485.806 74.2318C486.513 74.5104 487.328 74.6497 488.249 74.6497C488.892 74.6497 489.535 74.5961 490.178 74.4889C490.821 74.3604 491.313 74.2639 491.656 74.1996L493.81 84.3893C493.124 84.6036 492.16 84.85 490.917 85.1286C489.674 85.4286 488.163 85.6107 486.385 85.675C483.085 85.8036 480.192 85.3643 477.706 84.3571C475.242 83.3499 473.324 81.7856 471.952 79.6641C470.581 77.5426 469.906 74.864 469.927 71.6281V23.798Z"
        fill="currentColor"
      />
      <path
        clipRule="evenodd"
        d="M41 13.1531C18.3563 13.1531 0 31.5095 0 54.1531V79.1989C0 88.8472 10.4837 94.8433 18.7999 89.9515C22.5796 87.7282 27.249 87.6526 31.0986 89.7524L33.0999 90.844C38.0242 93.5299 43.9758 93.5299 48.9 90.844L50.9014 89.7523C54.751 87.6526 59.4204 87.7282 63.2 89.9515C71.5163 94.8433 82 88.8472 82 79.1989V54.1531C82 31.5093 63.6436 13.1531 41 13.1531ZM8.7857 54.1531C8.7857 36.3617 23.2086 21.9388 41 21.9388C58.7914 21.9388 73.2143 36.3614 73.2143 54.1531V75.6691C73.2143 82.027 65.6688 85.3649 60.9642 81.0881C58.6554 78.9892 55.2702 78.5836 52.5309 80.0778L47.9882 82.5556C43.6323 84.9316 38.3677 84.9316 34.0118 82.5556L29.4691 80.0778C26.7298 78.5836 23.3446 78.9892 21.0357 81.0881C16.3312 85.3649 8.7857 82.027 8.7857 75.6691V54.1531Z"
        fill="currentColor"
        fillRule="evenodd"
      />
      <path
        clipRule="evenodd"
        d="M34.5937 47.7469C34.5937 50.5773 32.2992 52.8719 29.4687 52.8719C26.6383 52.8719 24.3437 50.5773 24.3437 47.7469C24.3437 44.9164 26.6383 42.6219 29.4687 42.6219C32.2992 42.6219 34.5937 44.9164 34.5937 47.7469ZM52.5312 52.8719C55.3617 52.8719 57.6562 50.5773 57.6562 47.7469C57.6562 44.9164 55.3617 42.6219 52.5312 42.6219C49.7007 42.6219 47.4062 44.9164 47.4062 47.7469C47.4062 50.5773 49.7007 52.8719 52.5312 52.8719Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  </Fragment>
);

const theme: DocsThemeConfig = {
  editLink: {
    component: null,
  },
  feedback: { content: null },
  footer: {
    text: (
      <div className="flex w-full items-center sm:items-start">
        <p className="mt-6 text-xs">
          © {new Date().getFullYear()} Gespenst | Grimm Integrations.
        </p>
      </div>
    ),
  },
  head: function useHead() {
    const {
      frontMatter,
    }: { frontMatter: { description: string; title: string } } = useConfig();
    return (
      <Fragment>
        <link href="/favicon.ico" rel="shortcut icon" />
        <link
          href="/apple-touch-icon.png"
          rel="apple-touch-icon"
          sizes="180x180"
        />
        <link
          href="/android-chrome-192x192.png"
          rel="icon"
          sizes="192x192"
          type="image/png"
        />
        <link
          href="/android-chrome-512x512.png"
          rel="icon"
          sizes="512x512"
          type="image/png"
        />
        <link color="#000000" href="/safari-pinned-tab.svg" rel="mask-icon" />
        <link
          href="/favicon-32x32.png"
          rel="icon"
          sizes="32x32"
          type="image/png"
        />
        <link
          href="/favicon-16x16.png"
          rel="icon"
          sizes="16x16"
          type="image/png"
        />
        <meta content="en" httpEquiv="Content-Language" />
        <meta content="#fff" name="msapplication-TileColor" />
        <meta content="Gespenst" name="apple-mobile-web-title" />
        <meta content={`/og.png`} property="og:url" />
        <meta
          content={frontMatter.title || "Gespenst - Ge·spenst [/Gespénst/]"}
          property="og:title"
        />
        <meta
          content={
            frontMatter.description ||
            "Scary UI Library for Next.js or any other React based framework."
          }
          property="og:description"
        />
        <meta
          content={
            frontMatter.description ||
            "Scary UI Library for Next.js or any other React based framework."
          }
          name="description"
        />
      </Fragment>
    );
  },
  logo,
  themeSwitch: {
    component: ({ className, lite }) => (
      <ThemeSwitch className={`${className} font-arial`} lite={lite} />
    ),
  },
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== "/docs") {
      return {
        titleTemplate: "%s – Gespenst",
      };
    }
  },
};

export default theme;
