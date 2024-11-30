import type { SVGProps } from 'react';
const SvgSearch = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 22 22"
    {...props}
  >
    <path
      stroke="#5E5E5E"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m16.5 16.5 4.583 4.583"
    />
    <path
      stroke="#5E5E5E"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.332 10.083a8.25 8.25 0 1 0-16.5 0 8.25 8.25 0 0 0 16.5 0Z"
    />
  </svg>
);
export default SvgSearch;
