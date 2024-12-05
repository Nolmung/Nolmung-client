import type { SVGProps } from 'react';
const SvgTravelMarker = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <rect width={24} height={24} fill="#5E5E5E" rx={12} />
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.332 14.5s1.197-.5 3.333-.5c3.334 0 6 2 10 2M5.332 18h13.333"
    />
    <path
      fill="#fff"
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.395 6.152c-1.897.544-3.13 2.416-3.06 4.431.015.419.022.628.2.72.18.093.365-.038.736-.3l.828-.585a.66.66 0 0 1 .42-.12l1.945.124 1.625-1.148a.66.66 0 0 1 .42-.121l1.015.065c.435.028.653.042.76-.125.109-.168.021-.35-.155-.711-.873-1.802-2.827-2.777-4.734-2.23"
    />
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m13.667 10.333 1.333 5M12.19 6 12 5.333"
    />
  </svg>
);
export default SvgTravelMarker;
