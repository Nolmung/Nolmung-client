import type { SVGProps } from 'react';
const SvgTravelTag = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M1.332 10.5s1.197-.5 3.333-.5c3.334 0 6 2 10 2M1.332 14h13.333"
    />
    <path
      fill="#000"
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.395 2.152c-1.897.544-3.13 2.416-3.06 4.431.015.419.022.628.2.72.18.093.365-.038.736-.3l.828-.585a.66.66 0 0 1 .42-.12l1.945.124 1.625-1.148a.66.66 0 0 1 .42-.121l1.015.065c.435.028.653.042.76-.125.109-.168.021-.35-.155-.711-.873-1.802-2.827-2.777-4.734-2.23"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m9.667 6.333 1.333 5M8.19 2 8 1.333"
    />
  </svg>
);
export default SvgTravelTag;
