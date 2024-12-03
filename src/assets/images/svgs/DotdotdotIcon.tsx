import type { SVGProps } from 'react';
const SvgDotdotdotIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 3 15"
    width={3}
    height={15}
    {...props}
    style={{ cursor: 'pointer' }}
  >
    <path
      fill="#7E7E7E"
      d="M1.5 2.935c-.828 0-1.5-.657-1.5-1.468S.672 0 1.5 0 3 .657 3 1.467s-.672 1.468-1.5 1.468M1.5 8.967C.672 8.967 0 8.31 0 7.5s.672-1.467 1.5-1.467S3 6.69 3 7.5s-.672 1.467-1.5 1.467M1.5 15C.672 15 0 14.343 0 13.533s.672-1.468 1.5-1.468 1.5.657 1.5 1.468S2.328 15 1.5 15"
    />
  </svg>
);
export default SvgDotdotdotIcon;
