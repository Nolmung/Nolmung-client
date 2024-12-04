import type { SVGProps } from 'react';
const SvgEditIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 18 18"
    {...props}
  >
    <path
      stroke="#5E5E5E"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m12.862 2.567 1.285-1.285a1.817 1.817 0 0 1 2.57 2.57l-1.285 1.285m-2.57-2.57L8.064 7.365c-.958.958-1.437 1.437-1.764 2.021s-.654 1.962-.968 3.28c1.318-.313 2.697-.641 3.28-.968.585-.326 1.064-.805 2.022-1.763l4.797-4.798m-2.57-2.57 2.57 2.57"
    />
    <path
      stroke="#5E5E5E"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M17.25 9c0 3.89 0 5.834-1.208 7.042S12.889 17.25 9 17.25c-3.89 0-5.834 0-7.042-1.208S.75 12.889.75 9c0-3.89 0-5.834 1.208-7.042S5.111.75 9 .75"
    />
  </svg>
);
export default SvgEditIcon;
