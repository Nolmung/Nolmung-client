import type { SVGProps } from 'react';
const SvgRestaurantTag = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <path
      stroke="#F75900"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M14 11.334a3.333 3.333 0 0 1 0-6.667"
    />
    <path
      stroke="#F75900"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M14 14a6 6 0 0 1 0-12"
    />
    <path
      stroke="#F75900"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4 2v3.333M4 14V7.333M2.334 5.333h3.333M6 2v2.901c0 3.243-4 3.243-4 0V2"
    />
  </svg>
);
export default SvgRestaurantTag;
