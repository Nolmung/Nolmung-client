import type { SVGProps } from 'react';
const SvgTravelClickMarker = (props: SVGProps<SVGSVGElement>) => (
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
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.082 32.406s1.87-.781 5.208-.781c5.209 0 9.375 3.125 15.625 3.125M19.082 37.875h20.833"
    />
    <path
      fill="#fff"
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M30.118 19.362c-2.965.85-4.891 3.776-4.781 6.925.022.654.034.98.313 1.125.28.145.57-.06 1.15-.47l1.293-.914c.194-.137.425-.203.657-.188l3.038.195 2.54-1.795c.194-.137.424-.203.657-.188l1.584.101c.68.044 1.02.066 1.19-.196.168-.262.03-.545-.244-1.11-1.365-2.816-4.417-4.34-7.398-3.485"
    />
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m32.104 25.896 2.084 7.812m-4.39-14.583-.298-1.042"
    />
  </svg>
);
export default SvgTravelClickMarker;
