import type { SVGProps } from 'react';
const SvgUnderTenKilos = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 48 48"
    {...props}
  >
    <ellipse
      cx={24}
      cy={24}
      fill="#F0F0F0"
      stroke="#5E5E5E"
      strokeWidth={2}
      rx={20}
      ry={19.853}
    />
    <path
      fill="#5E5E5E"
      d="M15.773 18.688V30H14.04v-9.594h-.062l-2.704 1.766v-1.64l2.813-1.845h1.687Zm6.813 11.468c-2.617 0-4.156-2.11-4.156-5.812 0-3.68 1.554-5.813 4.156-5.813 2.594 0 4.148 2.133 4.156 5.813-.008 3.703-1.539 5.812-4.156 5.812Zm-2.438-5.812c-.007 2.82.907 4.328 2.438 4.328 1.523 0 2.437-1.508 2.437-4.328 0-2.813-.921-4.352-2.437-4.36-1.523.008-2.438 1.547-2.438 4.36Z"
    />
    <path
      stroke="#5E5E5E"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M33 29V19M29.25 26.25l3.043 3.043c.333.333.5.5.707.5.207 0 .374-.167.707-.5l3.043-3.043"
    />
  </svg>
);
export default SvgUnderTenKilos;
