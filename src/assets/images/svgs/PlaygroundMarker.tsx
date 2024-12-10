import type { SVGProps } from 'react';
const SvgPlaygroundMarker = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <rect width={24} height={24} rx={12} fill="currentColor" />
    <path
      fill="#fff"
      stroke="#fff"
      strokeWidth={1.5}
      d="M17.984 12a6 6 0 1 1-12 0 6 6 0 0 1 12 0Z"
    />
    <path
      stroke="#5E5E5E"
      strokeWidth={1.5}
      d="M7.785 7.8c2.394 2.112 2.406 6.277 0 8.4M16.187 16.2c-2.406-2.123-2.394-6.288 0-8.4"
    />
  </svg>
);
export default SvgPlaygroundMarker;
