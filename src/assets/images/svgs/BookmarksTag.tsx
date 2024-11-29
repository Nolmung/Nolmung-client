import type { SVGProps } from 'react';
const SvgBookmarksTag = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 21 21"
    {...props}
  >
    <circle cx={10} cy={10} r={10} fill="#FF4E3E" />
    <path
      fill="#fff"
      d="M10.018 7.308c.164-.173.318-.355.492-.516.94-.865 2.204-1.037 3.185-.44 1.011.617 1.52 1.912 1.219 3.138-.273 1.114-.937 1.993-1.687 2.814-.916 1.004-1.975 1.842-3.064 2.642-.068.05-.221.075-.278.033-1.496-1.103-2.952-2.253-4.024-3.814-.48-.698-.843-1.452-.86-2.327-.023-1.154.62-2.21 1.588-2.634.972-.424 2.146-.164 2.976.66z"
    />
  </svg>
);
export default SvgBookmarksTag;
