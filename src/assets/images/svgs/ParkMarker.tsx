import type { SVGProps } from 'react';
const SvgParkMarker = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <rect width={24} height={24} fill="currentColor"  rx={12} />
    <circle cx={12} cy={12} r={4} stroke="#fff" strokeWidth={1.5} />
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m9.332 18.667 1.79-5.1c.366-1.044.55-1.567.877-1.567s.51.523.877 1.568l1.79 5.099"
    />
    <path
      fill="#fff"
      stroke="#fff"
      d="M13.335 6.667a1.333 1.333 0 1 1-2.667 0 1.333 1.333 0 0 1 2.667 0ZM16.667 10.667a1.333 1.333 0 1 1 0-2.667 1.333 1.333 0 0 1 0 2.667ZM8.667 14.667a1.333 1.333 0 1 1-2.667 0 1.333 1.333 0 0 1 2.667 0ZM8.667 9.167a1.333 1.333 0 1 1-2.667 0 1.333 1.333 0 0 1 2.667 0ZM17.999 14.667a1.333 1.333 0 1 1-2.667 0 1.333 1.333 0 0 1 2.667 0Z"
    />
  </svg>
);
export default SvgParkMarker;
