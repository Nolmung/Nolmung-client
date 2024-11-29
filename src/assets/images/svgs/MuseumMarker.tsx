import type { SVGProps } from 'react';
const SvgMuseumMarker = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <rect width={24} height={24} fill="#5E5E5E" rx={12} />
    <g
      stroke="#fff"
      strokeLinejoin="round"
      clipPath="url(#museumMarker_svg__a)"
    >
      <path
        strokeWidth={1.5}
        d="M17.25 9.366c0-.64 0-.96-.162-1.23-.16-.271-.457-.449-1.05-.804l-.756-.452c-.931-.557-1.397-.836-1.757-.663s-.359.675-.359 1.68v9.936h4.083z"
      />
      <path
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M17.833 17.833H6.166M13.165 10.25h-2.333M13.165 13.75h-2.333"
      />
      <path
        strokeWidth={1.5}
        d="M6.749 9.366c0-.64 0-.96.16-1.23.162-.271.458-.449 1.052-.804l.755-.452c.931-.557 1.397-.836 1.757-.663s.359.675.359 1.68v9.936H6.749z"
      />
      <path
        strokeLinecap="round"
        strokeWidth={2}
        d="M8.792 9.666h-.005m.005 2.333h-.005m.005 2.334h-.005M15.208 9.666h-.005m.005 2.333h-.005m.005 2.334h-.005"
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
