import type { SVGProps } from 'react';
const SvgGalleryTag = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <g clipPath="url(#galleryTag_svg__a)">
      <path
        fill="#000"
        stroke="#000"
        strokeWidth={1.5}
        d="M14.665 8A6.667 6.667 0 1 0 8 14.667c.56 0 1.333.077 1.333-.667 0-.406-.211-.72-.42-1.03-.308-.456-.612-.906-.247-1.637.445-.889 1.186-.889 2.321-.889.568 0 1.235 0 2.013-.11 1.4-.2 1.666-1.062 1.666-2.334Z"
      />
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M4.664 10.002 4.67 10Z"
        clipRule="evenodd"
      />
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4.664 10.002 4.67 10"
      />
      <circle
        cx={6.332}
        cy={5.667}
        r={1}
        fill="#fff"
        stroke="#fff"
        strokeWidth={1.5}
      />
      <circle
        cx={11}
        cy={6.333}
        r={1}
        fill="#fff"
        stroke="#fff"
        strokeWidth={1.5}
      />
    </g>
    <defs>
      <clipPath id="galleryTag_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgGalleryTag;
