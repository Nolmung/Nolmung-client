import type { SVGProps } from 'react';
const SvgNoticeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 23"
    {...props}
  >
    <path
      stroke="#080808"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11 5.814v12.33c0 .898-.788 1.625-1.76 1.625-.744 0-1.407-.431-1.657-1.078l-2.147-5.676M18 12.385c1.657 0 3-1.24 3-2.77s-1.343-2.769-3-2.769M5.436 13.015C4.004 12.453 3 11.142 3 9.615c0-2.039 1.79-3.692 4-3.692h1.832c4.1 0 7.625-1.14 9.168-2.77v12.924c-1.543-1.63-5.067-2.77-9.168-2.77H7a4.3 4.3 0 0 1-1.564-.292"
    />
  </svg>
);
export default SvgNoticeIcon;
