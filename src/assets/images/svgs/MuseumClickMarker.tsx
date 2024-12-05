import type { SVGProps } from 'react';
const SvgMuseumClickMarker = (props: SVGProps<SVGSVGElement>) => (
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
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M38.5 23.485c0-1.098 0-1.646-.276-2.11s-.785-.767-1.802-1.376l-1.294-.774c-1.597-.956-2.396-1.434-3.012-1.138s-.616 1.158-.616 2.88V38h7z"
    />
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M39.5 38h-20M31.5 25h-4M31.5 31h-4"
    />
    <path
      fill="#fff"
      stroke="#fff"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.5 23.485c0-1.098 0-1.646.276-2.11s.785-.767 1.802-1.376l1.294-.774c1.597-.956 2.396-1.434 3.012-1.138s.616 1.158.616 2.88V38h-7z"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M24.001 24h-.009m.01 4h-.01m.01 4h-.01M35.001 24h-.009m.01 4h-.01m.01 4h-.01"
    />
  </svg>
);
export default SvgMuseumClickMarker;
