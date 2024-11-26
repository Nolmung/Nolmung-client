import type { SVGProps } from 'react';
const SvgParkAvailable = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 48 50"
    {...props}
  >
    <ellipse
      cx={24}
      cy={24.533}
      fill="#F0F0F0"
      stroke="#5E5E5E"
      strokeWidth={2}
      rx={20}
      ry={20.444}
    />
    <path
      fill="#5E5E5E"
      d="M20.308 31V18.273h4.535c2.962 0 4.412 1.776 4.412 4.131 0 2.347-1.46 4.131-4.412 4.131H22.24V31h-1.933Zm1.933-6.117h2.408c1.872.009 2.655-1.046 2.655-2.479 0-1.441-.782-2.47-2.655-2.478h-2.408v4.957Z"
    />
  </svg>
);
export default SvgParkAvailable;
