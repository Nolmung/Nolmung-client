import type { SVGProps } from 'react';
const SvgRefresh = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 12 12"
    {...props}
  >
    <g clipPath="url(#refresh_svg__a)">
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.005 1v1.566a.157.157 0 0 1-.278.1A5 5 0 1 0 11 6"
      />
    </g>
    <defs>
      <clipPath id="refresh_svg__a">
        <path fill="#fff" d="M0 0h12v12H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgRefresh;
