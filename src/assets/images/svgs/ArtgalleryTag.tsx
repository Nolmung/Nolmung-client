import type { SVGProps } from 'react';
const SvgArtgalleryTag = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 17 16"
    {...props}
  >
    <g stroke="#AB40FE" clipPath="url(#artgalleryTag_svg__a)">
      <path
        strokeWidth={1.5}
        d="M15.001 8a6.667 6.667 0 1 0-6.666 6.666c.56 0 1.333.078 1.333-.666 0-.406-.211-.72-.421-1.03-.307-.456-.61-.907-.246-1.637.445-.889 1.186-.889 2.321-.889.568 0 1.235 0 2.013-.111C14.735 10.133 15 9.272 15 8Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5.002 10.001 5.007 10"
      />
      <circle cx={6.668} cy={5.666} r={1} strokeWidth={1.5} />
      <circle cx={11.334} cy={6.333} r={1} strokeWidth={1.5} />
    </g>
    <defs>
      <clipPath id="artgalleryTag_svg__a">
        <path fill="#fff" d="M.334 0h16v16h-16z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgArtgalleryTag;
