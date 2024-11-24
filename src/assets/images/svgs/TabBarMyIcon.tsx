import type { SVGProps } from 'react';
const SvgTabBarMyIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 23 24"
    width={props.width || 25}
    height={props.height || 25}
    {...props}
  >
    <path
      stroke="#5E5E5E"
      strokeWidth={1.5}
      d="M.813 12c0-4.851 0-7.277 1.565-8.784S6.462 1.708 11.5 1.708s7.557 0 9.122 1.508c1.566 1.507 1.566 3.933 1.566 8.784s0 7.278-1.566 8.785c-1.565 1.507-4.084 1.507-9.122 1.507s-7.557 0-9.122-1.507C.813 19.277.813 16.852.813 12Z"
    />
    <path
      stroke="#5E5E5E"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M6.438 17.417c2.623-2.646 7.473-2.77 10.125 0m-2.256-8.125c0 1.496-1.261 2.708-2.816 2.708-1.556 0-2.817-1.212-2.817-2.708s1.261-2.708 2.817-2.708c1.555 0 2.816 1.212 2.816 2.708Z"
    />
  </svg>
);
export default SvgTabBarMyIcon;
