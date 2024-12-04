import type { SVGProps } from 'react';
const SvgLocationButtonIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 38 38"
    {...props}
  >
    <path
      fill="#080808"
      d="M38 19c0 10.493-8.507 19-19 19S0 29.493 0 19 8.507 0 19 0s19 8.507 19 19"
    />
    <path
      stroke="#D9D9D9"
      strokeWidth={1.5}
      d="M27.578 19a8.564 8.564 0 1 1-17.129 0 8.564 8.564 0 0 1 17.129 0Z"
    />
    <path
      stroke="#D9D9D9"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M29.582 19h-2.016M10.437 19H8.422M19 8.42v2.016M19 27.564v2.016"
    />
    <path
      stroke="#D9D9D9"
      strokeWidth={1.5}
      d="M22.026 19a3.023 3.023 0 1 1-6.045 0 3.023 3.023 0 0 1 6.045 0Z"
    />
  </svg>
);
export default SvgLocationButtonIcon;
