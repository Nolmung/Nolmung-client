import type { SVGProps } from 'react';
const SvgCurrentLocationMarker = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 30 31"
    {...props}
  >
    <circle cx={15} cy={15} r={15} fill="#17AA1A" opacity={0.3} />
    <g filter="url(#CurrentLocationMarker_svg__a)">
      <circle cx={15} cy={15} r={6.25} fill="#17AA1A" />
      <circle cx={15} cy={15} r={7.25} stroke="#fff" strokeWidth={2} />
    </g>
    <defs>
      <filter
        id="CurrentLocationMarker_svg__a"
        width={28.5}
        height={28.5}
        x={0.75}
        y={1.75}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={1} />
        <feGaussianBlur stdDeviation={3} />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_831_2777"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_831_2777"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
export default SvgCurrentLocationMarker;
