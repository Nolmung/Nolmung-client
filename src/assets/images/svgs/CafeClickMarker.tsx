import type { SVGProps } from 'react';
const SvgCafeClickMarker = (props: SVGProps<SVGSVGElement>) => (
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
      stroke="#fff"
      strokeLinecap="round"
      strokeWidth={1.2}
      d="M37.01 26.938h1.447c1.929 0 2.502.276 2.456 1.65-.077 2.274-1.103 4.917-5.206 5.641"
    />
    <path
      fill="#fff"
      stroke="#fff"
      strokeLinecap="round"
      strokeWidth={1.2}
      d="M24.193 37.474c-3.515-2.703-4.033-6.536-4.11-10.536-.032-1.728.47-2.084 2.769-2.084h11.127c2.3 0 2.801.356 2.768 2.084-.076 4-.594 7.833-4.109 10.536-1 .769-1.844.922-3.265.922h-1.915c-1.42 0-2.265-.153-3.265-.922Z"
    />
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.2}
      d="M29.778 18.604c-.57.353-1.363 1.563-1.363 3.125m-2.564-1.562s-.562.52-.562 1.562m7.293-1.562c-.285.176-.522 1.041-.522 1.562"
    />
  </svg>
);
export default SvgCafeClickMarker;
