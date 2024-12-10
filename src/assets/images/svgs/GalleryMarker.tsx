import type { SVGProps } from 'react';
const SvgGalleryMarker = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <rect width={24} height={24} fill="currentColor"  rx={12} />
    <g clipPath="url(#galleryMarker_svg__a)">
      <path
        fill="#fff"
        stroke="#fff"
        strokeWidth={1.5}
        d="M18.665 12A6.667 6.667 0 1 0 12 18.667c.56 0 1.333.077 1.333-.667 0-.406-.211-.72-.42-1.03-.308-.456-.612-.906-.247-1.637.445-.889 1.186-.889 2.321-.889.568 0 1.235 0 2.013-.11 1.4-.2 1.666-1.062 1.666-2.334Z"
      />
      <path
        fill="#5E5E5E"
        fillRule="evenodd"
        d="M8.664 14.002 8.67 14z"
        clipRule="evenodd"
      />
      <path
        stroke="#5E5E5E"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8.664 14.002 8.67 14"
      />
      <circle
        cx={10.332}
        cy={9.667}
        r={1}
        fill="#5E5E5E"
        stroke="#5E5E5E"
        strokeWidth={1.5}
      />
      <circle
        cx={15}
        cy={10.333}
        r={1}
        fill="#5E5E5E"
        stroke="#5E5E5E"
        strokeWidth={1.5}
      />
    </g>
    <defs>
      <clipPath id="galleryMarker_svg__a">
        <path fill="#fff" d="M4 4h16v16H4z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgGalleryMarker;
