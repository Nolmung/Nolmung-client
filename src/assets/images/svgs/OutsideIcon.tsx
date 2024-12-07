import type { SVGProps } from 'react';
const SvgOutsideIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 42 42"
    {...props}
  >
    <circle
      cx={21}
      cy={21}
      r={20}
      fill="#F0F0F0"
      stroke="#5E5E5E"
      strokeWidth={2}
    />
    <path
      stroke="#5E5E5E"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.75 23.371 11 29.575m0 0-1.25 3.723M11 29.575h3.316c.88 0 1.088.175 1.233 1.037L16 33.298M32.25 23.371 31 29.575m0 0 1.25 3.723M31 29.575h-3.316c-.88 0-1.088.175-1.233 1.037L26 33.298M21 18.408v14.89M11.75 15.191c2.588-1.202 5.19-3.113 7.111-5.017C19.999 9.046 20.568 8.482 21 8.482c.432 0 1.001.564 2.139 1.692 1.92 1.904 4.523 3.815 7.11 5.017.88.409 1.417.913 1.842 1.896.326.75.18 1.321-.707 1.321H10.616c-.887 0-1.033-.57-.707-1.322.425-.982.962-1.486 1.842-1.895ZM19.75 33.298h2.5M17.25 24.612h7.5"
    />
  </svg>
);
export default SvgOutsideIcon;
