import type { SVGProps } from 'react';
const SvgCheckEmptyGreen = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <rect
      width={18}
      height={18}
      x={3}
      y={3}
      stroke="#17AA1A"
      strokeWidth={2}
      rx={3}
    />
  </svg>
);
export default SvgCheckEmptyGreen;
