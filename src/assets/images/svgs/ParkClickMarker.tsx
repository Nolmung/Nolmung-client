import type { SVGProps } from 'react';
const SvgParkClickMarker = (props: SVGProps<SVGSVGElement>) => (
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
    <ellipse cx={29.5} cy={29} fill="#080808" rx={20.5} ry={20} />
    <circle cx={29.5} cy={28} r={6.5} stroke="#fff" strokeWidth={1.5} />
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m25.168 38.833 2.908-8.285C28.672 28.849 28.97 28 29.5 28s.83.85 1.426 2.548l2.908 8.285"
    />
    <path
      fill="#fff"
      stroke="#fff"
      d="M31.665 19.333a2.167 2.167 0 1 1-4.333 0 2.167 2.167 0 0 1 4.333 0ZM37.083 25.833a2.167 2.167 0 1 1 0-4.333 2.167 2.167 0 0 1 0 4.333ZM24.083 32.333a2.167 2.167 0 1 1-4.333 0 2.167 2.167 0 0 1 4.333 0ZM24.083 23.396a2.167 2.167 0 1 1-4.333 0 2.167 2.167 0 0 1 4.333 0ZM39.251 32.333a2.167 2.167 0 1 1-4.333 0 2.167 2.167 0 0 1 4.333 0Z"
    />
  </svg>
);
export default SvgParkClickMarker;
