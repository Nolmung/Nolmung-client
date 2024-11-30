import type { SVGProps } from 'react';
const SvgPlaygroundTag = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <path
      stroke="#141B34"
      strokeWidth={1.5}
      d="M14.333 8A6.667 6.667 0 1 1 1 8a6.667 6.667 0 0 1 13.333 0Z"
    />
    <path
      stroke="#141B34"
      strokeWidth={1.5}
      d="M3 3.333c2.66 2.347 2.673 6.975 0 9.333M12.334 12.666c-2.673-2.358-2.66-6.986 0-9.333"
    />
  </svg>
);
export default SvgPlaygroundTag;
