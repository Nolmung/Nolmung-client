import type { SVGProps } from 'react';
const SvgHotelMarker = (props: SVGProps<SVGSVGElement>) => (
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
      d="m5.334 10.666 3.333-4m0 0 3.61 3.61c.193.192.289.289.411.34.123.05.26.05.532.05h5.447l-2.533-3.04c-.394-.472-.59-.708-.859-.834s-.576-.126-1.19-.126zM11.333 9.333v8H6V9.904"
    />
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.334 17.333h6.667V10M6.668 9V6.665"
    />
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8.672 12h-.006"
    />
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.668 17.333v-2.667M14 13.333h1.334"
    />
  </svg>
);
export default SvgHotelMarker;
