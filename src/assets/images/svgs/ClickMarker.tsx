import type { SVGProps } from 'react';
const SvgClickMarker = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 58 72"
    {...props}
  >
    <path
      fill="#D3FBD4"
      stroke="#17AA1A"
      strokeLinejoin="round"
      d="M29 1C13.536 1 1 13.662 1 29.282c0 8.932 3.5 15.876 10.5 22.08 4.934 4.372 10.911 11.634 14.5 17.52 1.721 2.824 4.155 2.824 6 0 3.77-5.769 9.566-13.148 14.5-17.52 7-6.204 10.5-13.148 10.5-22.08C57 13.662 44.464 1 29 1Z"
    />
  </svg>
);
export default SvgClickMarker;
