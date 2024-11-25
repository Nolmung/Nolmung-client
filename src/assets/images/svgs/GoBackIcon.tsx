import type { SVGProps } from 'react';
const SvgGoBackIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 21 16"
    width={props.width || 19}
    height={props.height || 14}
    {...props}
  >
    <path
      stroke="#080808"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9 1 1 8l8 7"
    />
    <path
      stroke="#080808"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M2 8h18"
    />
  </svg>
);
export default SvgGoBackIcon;
