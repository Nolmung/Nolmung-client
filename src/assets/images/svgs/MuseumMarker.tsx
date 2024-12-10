import type { SVGProps } from 'react';
const SvgMuseumMarker = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <rect width={24} height={24} fill="currentColor"  rx={12} />
    <g strokeLinejoin="round" clipPath="url(#museumMarker_svg__a)">
      <path
        fill="#fff"
        stroke="#fff"
        strokeWidth={1.5}
        d="M17.251 9.366c0-.64 0-.96-.16-1.23-.162-.27-.459-.448-1.052-.803l-.755-.452c-.931-.558-1.397-.836-1.757-.664-.359.173-.359.676-.359 1.68v9.936h4.083z"
      />
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M17.835 17.833H6.168M13.17 10.25h-2.334M13.17 13.75h-2.334"
      />
      <path
        fill="#fff"
        stroke="#fff"
        strokeWidth={1.5}
        d="M6.753 9.366c0-.64 0-.96.16-1.23.162-.27.458-.448 1.052-.803l.755-.452c.931-.558 1.397-.836 1.756-.664.36.173.36.676.36 1.68v9.936H6.753z"
      />
      <path
        stroke="#5E5E5E"
        strokeLinecap="round"
        strokeWidth={2}
        d="M8.794 9.667H8.79M8.794 12H8.79m.005 2.333H8.79M15.208 9.667h-.005M15.208 12h-.005m.005 2.333h-.005"
      />
    </g>
    <defs>
      <clipPath id="museumMarker_svg__a">
        <path fill="#fff" d="M5 5h14v14H5z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMuseumMarker;
