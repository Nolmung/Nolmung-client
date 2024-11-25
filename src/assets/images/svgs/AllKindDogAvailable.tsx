import type { SVGProps } from 'react';
const SvgAllKindDogAvailable = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 48 48"
    {...props}
  >
    <circle
      cx={24}
      cy={24}
      r={20}
      fill="#F0F0F0"
      stroke="#5E5E5E"
      strokeLinejoin="round"
      strokeWidth={2}
    />
    <path
      fill="#5E5E5E"
      d="M15.704 30h-2.056l4.57-12.727h2.232L25.038 30h-2.057l-1.16-3.357h-4.957L15.704 30Zm1.714-4.975h3.84l-1.88-5.431h-.088l-1.872 5.431Zm10.96-7.752V30h-1.88V17.273h1.88Zm4.166 0V30h-1.88V17.273h1.88Z"
    />
  </svg>
);
export default SvgAllKindDogAvailable;
