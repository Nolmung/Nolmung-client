import type { SVGProps } from 'react';
const SvgTabBarMapIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 30 30"
    width={props.width || 28}
    height={props.height || 28}
    {...props}
  >
    <path
      fill="#5E5E5E"
      d="M26.97 28.03a.75.75 0 1 0 1.06-1.06zm-2-2 2 2 1.06-1.06-2-2zM27.25 22c0-2.9-2.35-5.25-5.25-5.25v1.5A3.75 3.75 0 0 1 25.75 22zM22 16.75A5.25 5.25 0 0 0 16.75 22h1.5A3.75 3.75 0 0 1 22 18.25zM16.75 22c0 2.9 2.35 5.25 5.25 5.25v-1.5A3.75 3.75 0 0 1 18.25 22zM22 27.25c2.9 0 5.25-2.35 5.25-5.25h-1.5A3.75 3.75 0 0 1 22 25.75z"
    />
    <path
      stroke="#5E5E5E"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M27.5 15.08v-3.558c0-2.425 0-3.637-.732-4.39-.733-.753-1.911-.753-4.268-.753h-2.598c-1.147 0-1.157-.003-2.188-.519L13.55 3.776c-1.739-.87-2.608-1.305-3.535-1.275-.926.03-1.767.522-3.448 1.503L5.032 4.9c-1.235.722-1.853 1.082-2.192 1.682s-.34 1.33-.34 2.791v10.272c0 1.92 0 2.88.428 3.413.285.356.683.595 1.125.674.662.119 1.474-.355 3.097-1.302 1.102-.644 2.163-1.312 3.481-1.13 1.105.151 2.131.848 3.119 1.342M10 5v14M19 8v4"
    />
  </svg>
);
export default SvgTabBarMapIcon;
