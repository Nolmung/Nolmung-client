import type { SVGProps } from 'react';
const SvgPlusIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 20 20"
    width={20}
    height={20}
    {...props}
  >
    <path
      stroke="#080808"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.999 3.333v13.333M16.665 10H3.332"
    />
  </svg>
);
export default SvgPlusIcon;
