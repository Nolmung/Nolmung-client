import type { SVGProps } from 'react';
const SvgAccommodationMarker = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <rect width={24} height={24} fill="currentColor"  rx={12} />
    <path
      fill="#fff"
      d="m12.275 10.276-3.61-3.61h5.418c.614 0 .921 0 1.19.127.269.125.465.361.859.833l2.533 3.04h-5.447c-.273 0-.41 0-.532-.05s-.219-.147-.411-.34"
    />
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m5.332 10.667 3.333-4m0 0 3.61 3.61c.192.192.289.288.411.339.123.05.26.05.532.05h5.447l-2.533-3.04c-.394-.472-.59-.708-.859-.833-.269-.126-.576-.126-1.19-.126z"
    />
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.333 9.333v8H6V9.905"
    />
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.332 17.333h6.667V10M6.664 9V6.667"
    />
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8.672 12h-.006"
    />
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.664 17.333v-2.666"
    />
    <path
      stroke="#5E5E5E"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.999 13.333h1.333"
    />
  </svg>
);
export default SvgAccommodationMarker;
