import type { SVGProps } from 'react';
const SvgCafeTag = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <g
      stroke="#F75900"
      strokeLinecap="round"
      strokeWidth={1.5}
      clipPath="url(#cafeTag_svg__a)"
    >
      <path d="M12.168 7h.926c1.235 0 1.601.177 1.572 1.056-.05 1.456-.706 3.147-3.332 3.61" />
      <path d="M3.965 13.742C1.715 12.012 1.384 9.56 1.335 7c-.021-1.105.3-1.333 1.772-1.333h7.12c1.473 0 1.794.228 1.773 1.333-.05 2.56-.38 5.014-2.63 6.743-.64.492-1.18.59-2.09.59H6.054c-.909 0-1.449-.098-2.09-.59Z" />
      <path
        strokeLinejoin="round"
        d="M7.54 1.666c-.364.226-.871 1-.871 2m-1.641-1s-.36.333-.36 1m4.667-1c-.182.113-.334.667-.334 1"
      />
    </g>
    <defs>
      <clipPath id="cafeTag_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCafeTag;
