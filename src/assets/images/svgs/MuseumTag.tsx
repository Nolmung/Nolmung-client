import type { SVGProps } from 'react';
const SvgMuseumTag = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 15 14"
    {...props}
  >
    <g
      stroke="#7C7C7C"
      strokeLinejoin="round"
      clipPath="url(#museumTag_svg__a)"
    >
      <path
        strokeWidth={1.5}
        d="M12.583 4.366c0-.64 0-.96-.16-1.23-.162-.271-.459-.449-1.052-.804l-.755-.452c-.931-.557-1.397-.836-1.757-.663s-.359.675-.359 1.68v9.936h4.083z"
      />
      <path
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M13.167 12.833H1.5M8.5 5.25H6.165M8.5 8.75H6.165"
      />
      <path
        strokeWidth={1.5}
        d="M2.083 4.366c0-.64 0-.96.16-1.23.162-.271.458-.449 1.052-.804l.755-.452c.931-.557 1.397-.836 1.757-.663s.359.675.359 1.68v9.936H2.083z"
      />
      <path
        strokeLinecap="round"
        strokeWidth={2}
        d="M4.126 4.666h-.005m.005 2.333h-.005m.005 2.334h-.005M10.542 4.666h-.005m.005 2.333h-.005m.005 2.334h-.005"
      />
    </g>
    <defs>
      <clipPath id="museumTag_svg__a">
        <path fill="#fff" d="M.334 0h14v14h-14z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMuseumTag;
