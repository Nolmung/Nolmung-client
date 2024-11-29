import type { SVGProps } from 'react';
const SvgParkTag = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 17 16"
    {...props}
  >
    <circle cx={8.334} cy={8} r={4} stroke="#F85ECD" strokeWidth={1.5} />
    <path
      stroke="#F85ECD"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m5.668 14.667 1.79-5.1C7.823 8.524 8.007 8 8.334 8s.51.523.877 1.568l1.79 5.099"
    />
    <path
      stroke="#F85ECD"
      strokeWidth={1.5}
      d="M9.667 2.667a1.333 1.333 0 1 1-2.667 0 1.333 1.333 0 0 1 2.667 0ZM13 6.667A1.333 1.333 0 1 1 13 4a1.333 1.333 0 0 1 0 2.667ZM5 10.667a1.333 1.333 0 1 1-2.666 0 1.333 1.333 0 0 1 2.667 0ZM5 5.167a1.333 1.333 0 1 1-2.666 0 1.333 1.333 0 0 1 2.667 0ZM14.335 10.667a1.333 1.333 0 1 1-2.667 0 1.333 1.333 0 0 1 2.667 0Z"
    />
  </svg>
);
export default SvgParkTag;
