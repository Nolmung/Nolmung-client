import type { SVGProps } from 'react';
const SvgPrice = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <g stroke="#080808" strokeLinecap="round" strokeWidth={1.5}>
      <path d="M9.333 12a5.333 5.333 0 1 0 0-10.667 5.333 5.333 0 0 0 0 10.667ZM8.777 13.98A4.932 4.932 0 0 1 2.02 7.222" />
    </g>
  </svg>
);
export default SvgPrice;
