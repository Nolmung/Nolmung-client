import type { SVGProps } from 'react';
const SvgTime = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 18 18"
    {...props}
  >
    <g clipPath="url(#Time_svg__a)">
      <circle cx={9} cy={9} r={7.5} stroke="#080808" strokeWidth={1.5} />
      <g fill="#080808">
        <path d="M10.125 9a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1 2.25 0Z" />
        <path d="M9.75 5a.75.75 0 0 0-1.5 0h1.5Zm.905 4.595a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm.815 2.935a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM8.25 5v2.875h1.5V5h-1.5Zm1.345 5.655 1.875 1.875 1.06-1.06-1.875-1.875-1.06 1.06ZM9.375 9A.375.375 0 0 1 9 9.375v1.5c1.036 0 1.875-.84 1.875-1.875h-1.5ZM9 9.375A.375.375 0 0 1 8.625 9h-1.5c0 1.036.84 1.875 1.875 1.875v-1.5ZM8.625 9c0-.207.168-.375.375-.375v-1.5c-1.036 0-1.875.84-1.875 1.875h1.5ZM9 8.625c.207 0 .375.168.375.375h1.5c0-1.036-.84-1.875-1.875-1.875v1.5Z" />
      </g>
    </g>
    <defs>
      <clipPath id="Time_svg__a">
        <path fill="#fff" d="M0 0h18v18H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTime;
