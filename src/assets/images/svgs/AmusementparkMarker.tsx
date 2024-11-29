import type { SVGProps } from 'react';
const SvgAmusementparkMarker = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <rect width={24} height={24} fill="#5E5E5E" rx={12} />
    <circle cx={12} cy={12} r={4} stroke="#fff" strokeWidth={1.5} />
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m9.334 18.667 1.79-5.1C11.49 12.524 11.674 12 12 12s.51.523.877 1.568l1.79 5.099"
    />
    <path
      stroke="#fff"
      strokeWidth={1.5}
      d="M13.333 6.667a1.333 1.333 0 1 1-2.667 0 1.333 1.333 0 0 1 2.667 0ZM16.667 10.667a1.333 1.333 0 1 1 0-2.667 1.333 1.333 0 0 1 0 2.667ZM8.667 14.667a1.333 1.333 0 1 1-2.667 0 1.333 1.333 0 0 1 2.667 0ZM8.667 9.167a1.333 1.333 0 1 1-2.667 0 1.333 1.333 0 0 1 2.667 0ZM18 14.667a1.333 1.333 0 1 1-2.666 0 1.333 1.333 0 0 1 2.667 0Z"
    />
  </svg>
);
export default SvgAmusementparkMarker;
