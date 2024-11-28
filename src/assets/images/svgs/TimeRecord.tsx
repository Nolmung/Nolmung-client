import type { SVGProps } from 'react';
const SvgTimeRecord = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 22 22"
    {...props}
  >
    <path
      stroke="#A7A7A7"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m17.952 7.606 2.51-.152C18.662 2.704 13.497 0 8.46 1.344 3.096 2.777-.09 8.261 1.343 13.595c1.434 5.332 6.945 8.493 12.31 7.061A10.036 10.036 0 0 0 21 12.485"
    />
    <path
      stroke="#A7A7A7"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11 7v4l2 2"
    />
  </svg>
);
export default SvgTimeRecord;
