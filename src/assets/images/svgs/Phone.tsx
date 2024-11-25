import type { SVGProps } from 'react';
const SvgPhone = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 14 14"
    {...props}
  >
    <path
      stroke="#080808"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M2.205 6.966c-.553-.964-.82-1.751-.981-2.55-.238-1.18.307-2.333 1.21-3.069.381-.31.818-.205 1.044.2l.51.914c.403.724.605 1.087.565 1.47-.04.384-.312.697-.857 1.323L2.205 6.966Zm0 0a13.424 13.424 0 0 0 4.83 4.83m0 0c.964.553 1.752.82 2.55.981 1.18.239 2.333-.306 3.07-1.21.31-.38.204-.818-.2-1.044l-.915-.509c-.724-.404-1.086-.606-1.47-.566-.384.04-.697.313-1.322.857l-1.713 1.491Z"
    />
  </svg>
);
export default SvgPhone;
