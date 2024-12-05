import type { SVGProps } from 'react';
const SvgPlaygroundTag = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 14 14"
    {...props}
  >
    <path
      fill="#000"
      stroke="#000"
      strokeWidth={1.5}
      d="M13 7A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z"
    />
    <path
      stroke="#fff"
      strokeWidth={1.5}
      d="M2.8 2.8c2.395 2.112 2.407 6.277 0 8.4M11.202 11.2c-2.406-2.123-2.394-6.288 0-8.4"
    />
  </svg>
);
export default SvgPlaygroundTag;
