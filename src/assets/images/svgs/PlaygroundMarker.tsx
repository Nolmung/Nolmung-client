import type { SVGProps } from 'react';
const SvgPlaygroundMarker = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <circle cx={12} cy={12} r={12} fill="#5E5E5E" />
    <path
      stroke="#fff"
      strokeWidth={1.5}
      d="M18.833 12.167a6.667 6.667 0 1 1-13.333 0 6.667 6.667 0 0 1 13.333 0Z"
    />
    <path
      stroke="#fff"
      strokeWidth={1.5}
      d="M7.5 7.5c2.66 2.347 2.673 6.975 0 9.333M16.834 16.833c-2.673-2.358-2.66-6.986 0-9.333"
    />
  </svg>
);
export default SvgPlaygroundMarker;
