import type { SVGProps } from 'react';
const SvgMuseumTag = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 14 14"
    {...props}
  >
    <g strokeLinejoin="round" clipPath="url(#MuseumTag_svg__a)">
      <path
        fill="#000"
        stroke="#000"
        strokeWidth={1.5}
        d="M12.251 4.366c0-.64 0-.96-.16-1.23-.162-.27-.458-.448-1.052-.803l-.755-.452c-.931-.557-1.397-.836-1.757-.663s-.359.675-.359 1.68v9.935h4.083z"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M12.835 12.833H1.168M8.17 5.25H5.835M8.17 8.75H5.835"
      />
      <path
        fill="#000"
        stroke="#000"
        strokeWidth={1.5}
        d="M1.753 4.366c0-.64 0-.96.16-1.23.162-.27.458-.448 1.052-.803l.755-.452c.931-.557 1.397-.836 1.757-.663s.359.675.359 1.68v9.935H1.753z"
      />
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeWidth={2}
        d="M3.794 4.667H3.79M3.794 7H3.79m.005 2.333H3.79M10.208 4.667h-.005M10.208 7h-.005m.005 2.333h-.005"
      />
    </g>
    <defs>
      <clipPath id="MuseumTag_svg__a">
        <path fill="#fff" d="M0 0h14v14H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMuseumTag;
