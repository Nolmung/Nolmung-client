import type { SVGProps } from 'react';
const SvgRestaurantClickMarker = (props: SVGProps<SVGSVGElement>) => (
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
      d="M38.437 34.556c-2.981 0-5.398-2.488-5.398-5.556s2.417-5.555 5.398-5.555"
    />
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeWidth={1.2}
      d="M38.436 39c-5.367 0-9.717-4.477-9.717-10s4.35-10 9.717-10"
    />
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.2}
      d="M22.242 19v5.556m0 14.444V27.889M19.54 24.556h5.397M25.478 19v4.836c0 5.404-6.478 5.404-6.478 0V19"
    />
    <path
      fill="#fff"
      d="M19 24h6.478l-1.227 3.644-3.941-.066zM33.455 25.667 39 23.38l-.013 11.289L35.884 34l-2.907-3.384z"
    />
  </svg>
);
export default SvgRestaurantClickMarker;
