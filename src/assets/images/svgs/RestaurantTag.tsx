import type { SVGProps } from 'react';
const SvgRestaurantTag = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 13 13"
    {...props}
  >
    <path
      stroke="#080808"
      strokeLinecap="round"
      strokeWidth={1.2}
      d="M12 9.556a3.056 3.056 0 1 1 0-6.112"
    />
    <path
      stroke="#080808"
      strokeLinecap="round"
      strokeWidth={1.2}
      d="M12 12a5.5 5.5 0 1 1 0-11"
    />
    <path
      stroke="#080808"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.2}
      d="M2.836 1v3.056m0 7.944V5.889M1.305 4.056H4.36M4.667 1v2.66C4.667 6.632 1 6.632 1 3.66V1"
    />
    <path
      fill="#080808"
      d="M1 3.75h3.667v1.833H1zM9.708 4.667l2.84-1.268.003 6.198-1.468-.347L9.25 7.417z"
    />
  </svg>
);
export default SvgRestaurantTag;
