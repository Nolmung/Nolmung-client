import type { SVGProps } from 'react';
const SvgParkTag = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <circle cx={8} cy={8} r={4} stroke="#080808" strokeWidth={1.5} />
    <path
      stroke="#080808"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m5.332 14.667 1.79-5.1C7.488 8.524 7.672 8 7.999 8s.51.523.877 1.568l1.79 5.099"
    />
    <path
      fill="#080808"
      stroke="#080808"
      d="M9.335 2.667a1.333 1.333 0 1 1-2.667 0 1.333 1.333 0 0 1 2.667 0ZM12.667 6.667a1.333 1.333 0 1 1 0-2.667 1.333 1.333 0 0 1 0 2.667ZM4.667 10.667a1.333 1.333 0 1 1-2.667 0 1.333 1.333 0 0 1 2.667 0ZM4.667 5.167a1.333 1.333 0 1 1-2.667 0 1.333 1.333 0 0 1 2.667 0ZM13.999 10.667a1.333 1.333 0 1 1-2.667 0 1.333 1.333 0 0 1 2.667 0Z"
    />
  </svg>
);
export default SvgParkTag;
