import type { SVGProps } from 'react';
const SvgAccommodationTag = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 17 16"
    {...props}
  >
    <g
      stroke="#5B3615"
      strokeLinecap="round"
      strokeLinejoin="round"
      clipPath="url(#accommodationTag_svg__a)"
    >
      <path
        strokeWidth={1.5}
        d="m1.668 6.666 3.333-4m0 0 3.61 3.61c.192.192.289.289.411.34.123.05.26.05.532.05H15l-2.533-3.04c-.394-.472-.59-.708-.859-.834s-.576-.126-1.19-.126zM7.667 5.333v8H2.334V5.904"
      />
      <path strokeWidth={1.5} d="M7.668 13.333h6.667V6M3.002 5V2.665" />
      <path strokeWidth={2} d="M5.006 8H5" />
      <path strokeWidth={1.5} d="M5.002 13.333v-2.667M10.335 9.333h1.333" />
    </g>
    <defs>
      <clipPath id="accommodationTag_svg__a">
        <path fill="#fff" d="M.334 0h16v16h-16z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgAccommodationTag;
