import type { SVGProps } from 'react';
const SvgPlusIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <path
      stroke="#17AA1A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.999 3.333v13.334M16.665 10H3.332"
    />
  </svg>
);
export default SvgPlusIcon;
