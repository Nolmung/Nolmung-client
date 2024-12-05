import type { SVGProps } from 'react';
const SvgGalleryClickMarker = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 58 72"
    {...props}
  >
    <path
      fill="#D3FBD4"
      stroke="#17AA1A"
      strokeLinejoin="round"
      d="M29 1C13.536 1 1 13.662 1 29.282c0 8.932 3.5 15.876 10.5 22.08 4.934 4.372 10.911 11.634 14.5 17.52 1.721 2.824 4.155 2.824 6 0 3.77-5.769 9.566-13.148 14.5-17.52 7-6.204 10.5-13.148 10.5-22.08C57 13.662 44.464 1 29 1Z"
    />
    <ellipse cx={29.5} cy={29} fill="#080808" rx={20.5} ry={20} />
    <path
      fill="#fff"
      stroke="#fff"
      strokeWidth={1.5}
      d="M39.915 29.5c0-5.753-4.663-10.417-10.416-10.417S19.082 23.747 19.082 29.5s4.664 10.417 10.417 10.417c.877 0 2.083.12 2.083-1.042 0-.634-.33-1.124-.658-1.61-.48-.711-.954-1.416-.384-2.557.695-1.389 1.852-1.389 3.627-1.389.887 0 1.929 0 3.144-.173 2.189-.313 2.604-1.658 2.604-3.646Z"
    />
    <path
      fill="#000"
      fillRule="evenodd"
      d="m24.29 32.628.007-.003z"
      clipRule="evenodd"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m24.29 32.628.007-.003"
    />
    <circle
      cx={26.895}
      cy={25.854}
      r={1.563}
      fill="#000"
      stroke="#000"
      strokeWidth={1.5}
    />
    <circle
      cx={34.188}
      cy={26.896}
      r={1.563}
      fill="#000"
      stroke="#000"
      strokeWidth={1.5}
    />
  </svg>
);
export default SvgGalleryClickMarker;
