import type { SVGProps } from 'react';
const SvgTravelTag = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 17 16"
    {...props}
  >
    <g
      stroke="#FFD84D"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      clipPath="url(#TravelTag_svg__a)"
    >
      <path d="M1.668 10.5s1.197-.5 3.333-.5c3.334 0 6 2 10 2M1.668 14h13.333M8.73 2.152c-1.896.544-3.13 2.416-3.06 4.431.015.419.023.628.202.72.178.093.364-.038.735-.3l.828-.585a.66.66 0 0 1 .42-.12l1.945.124 1.625-1.148a.66.66 0 0 1 .42-.121l1.015.065c.435.028.653.042.76-.125.109-.168.02-.35-.155-.711-.873-1.802-2.827-2.777-4.734-2.23M10 6.333l1.334 5M8.524 2l-.19-.667" />
    </g>
    <defs>
      <clipPath id="TravelTag_svg__a">
        <path fill="#fff" d="M.334 0h16v16h-16z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTravelTag;
