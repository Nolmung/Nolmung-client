import type { SVGProps } from 'react';
const SvgCafeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeWidth={1.2}
      d="M12.166 7h.926c1.234 0 1.601.177 1.572 1.056-.05 1.456-.706 3.147-3.332 3.61"
    />
    <path
      fill="#fff"
      stroke="#fff"
      strokeLinecap="round"
      strokeWidth={1.2}
      d="M3.963 13.743C1.713 12.013 1.382 9.56 1.333 7c-.021-1.106.3-1.333 1.772-1.333h7.12c1.473 0 1.794.227 1.773 1.333-.05 2.56-.38 5.013-2.63 6.743-.64.492-1.18.59-2.09.59H6.052c-.909 0-1.449-.098-2.09-.59Z"
    />
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.2}
      d="M7.537 1.667c-.365.225-.872 1-.872 2m-1.641-1s-.36.333-.36 1m4.668-1c-.183.113-.335.666-.335 1"
    />
  </svg>
);
export default SvgCafeIcon;
