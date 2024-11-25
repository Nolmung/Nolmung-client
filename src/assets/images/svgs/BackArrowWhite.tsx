import type { SVGProps } from 'react';
const SvgBackArrowWhite = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 21 16"
    {...props}
  >
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9 1 1 8l8 7"
    />
    <path stroke="#fff" strokeLinecap="round" strokeWidth={1.5} d="M2 8h18" />
  </svg>
);
export default SvgBackArrowWhite;
