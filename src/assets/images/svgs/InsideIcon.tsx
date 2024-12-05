import type { SVGProps } from 'react';
const SvgInsideIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 42 42"
    {...props}
  >
    <circle
      cx={21}
      cy={21}
      r={20}
      fill="#F0F0F0"
      stroke="#5E5E5E"
      strokeWidth={2}
    />
    <path
      stroke="#5E5E5E"
      strokeWidth={1.5}
      d="m17.25 33.298-.314-4.354c-.168-2.34 1.7-4.332 4.064-4.332s4.231 1.991 4.063 4.332l-.313 4.354"
    />
    <path
      stroke="#5E5E5E"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.94 22.395c-.442-2.85-.663-4.275-.12-5.539.543-1.263 1.748-2.128 4.156-3.857l1.8-1.291C17.773 9.557 19.271 8.482 21 8.482s3.227 1.075 6.224 3.226l1.8 1.291c2.409 1.73 3.613 2.594 4.156 3.857.543 1.264.322 2.689-.12 5.54l-.376 2.43c-.625 4.04-.938 6.061-2.398 7.266-1.46 1.206-3.594 1.206-7.863 1.206h-2.846c-4.27 0-6.403 0-7.863-1.206-1.46-1.205-1.773-3.225-2.398-7.266l-.377-2.43Z"
    />
  </svg>
);
export default SvgInsideIcon;
