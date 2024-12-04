import type { SVGProps } from 'react';
const SvgTrashcanIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 17 17"
    {...props}
  >
    <path
      stroke="#6F6A6A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M1 4.333h15M6.625 7.667v5m3.75-5v5M1.937 4.333l.938 10c0 .442.198.866.55 1.179A2 2 0 0 0 4.75 16h7.5a2 2 0 0 0 1.326-.488c.351-.313.549-.737.549-1.179l.938-10m-9.376 0v-2.5a.79.79 0 0 1 .275-.589A1 1 0 0 1 6.625 1h3.75a1 1 0 0 1 .663.244.79.79 0 0 1 .274.59v2.5"
    />
  </svg>
);
export default SvgTrashcanIcon;
