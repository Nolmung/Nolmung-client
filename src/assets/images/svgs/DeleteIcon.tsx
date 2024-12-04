import type { SVGProps } from 'react';
const SvgDeleteIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 20 20"
  
    {...props}
  >
    <path
      stroke="#5E5E5E"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M1 5h18M7.75 9v6m4.5-6v6M2.125 5 3.25 17c0 .53.237 1.04.659 1.414A2.4 2.4 0 0 0 5.5 19h9a2.4 2.4 0 0 0 1.591-.586c.422-.375.659-.884.659-1.414l1.125-12M6.625 5V2c0-.265.119-.52.33-.707A1.2 1.2 0 0 1 7.75 1h4.5a1.2 1.2 0 0 1 .796.293c.21.187.329.442.329.707v3"
    />
  </svg>
);
export default SvgDeleteIcon;
