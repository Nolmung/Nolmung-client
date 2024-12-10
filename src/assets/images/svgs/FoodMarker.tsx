import type { SVGProps } from 'react';
const SvgFoodMarker = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <circle cx={12} cy={12} r={12} fill="currentColor" />
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeWidth={1.2}
      d="M17 15.556a3.056 3.056 0 1 1 0-6.112"
    />
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeWidth={1.2}
      d="M17 18a5.5 5.5 0 1 1 0-11"
    />
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.2}
      d="M7.836 7v3.056m0 7.944v-6.111M6.305 10.056H9.36M9.667 7v2.66c0 2.972-3.667 2.972-3.667 0V7"
    />
    <path
      fill="#fff"
      d="M6 9.75h3.667v1.833H6zM14.708 10.667l2.84-1.268.003 6.198-1.468-.347-1.833-1.833z"
    />
  </svg>
);
export default SvgFoodMarker;
