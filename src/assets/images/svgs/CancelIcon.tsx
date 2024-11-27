import type { SVGProps } from 'react';
const SvgCancelIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 18 18"
    {...props}
  >
    <path
      stroke="#5E5E5E"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m14.25 3.75-10.5 10.5m0-10.5 10.5 10.5"
    />
  </svg>
);
export default SvgCancelIcon;
