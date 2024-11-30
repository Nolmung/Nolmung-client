import type { SVGProps } from 'react';
const SvgGalleryMarker = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <rect width={24} height={24} fill="#5E5E5E" rx={12} />
    <g stroke="#fff" clipPath="url(#galleryMarker_svg__a)">
      <path
        strokeWidth={1.5}
        d="M18.667 12a6.667 6.667 0 1 0-6.666 6.666c.56 0 1.333.078 1.333-.666 0-.406-.211-.72-.421-1.03-.307-.456-.61-.907-.246-1.637.445-.889 1.185-.889 2.321-.889.568 0 1.235 0 2.013-.111 1.4-.2 1.666-1.061 1.666-2.333Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8.668 14.001 8.673 14"
      />
      <circle cx={10.334} cy={9.666} r={1} strokeWidth={1.5} />
      <circle cx={15} cy={10.333} r={1} strokeWidth={1.5} />
    </g>
    <defs>
      <clipPath id="galleryMarker_svg__a">
        <path fill="#fff" d="M4 4h16v16H4z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgGalleryMarker;
