import type { SVGProps } from 'react';
const SvgDefaultMarker = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <rect width={24} height={24} fill="#5E5E5E" rx={12} />
  </svg>
);
export default SvgDefaultMarker;
