import styled from 'styled-components';

export const Flex = styled.div<{
  direction?: 'row' | 'column';
  justify?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around';
  align?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  webGap?: number;
  mobileGap?: number;
  height?: number;
  heightVh?: number;
  margin?: string;
  padding?: string;
  borderRadius?: number;
  backgroundColor?: string;
}>`
  display: flex;
  flex-direction: ${({ direction }) => direction || 'row'};
  justify-content: ${({ justify }) => justify || 'center'};
  align-items: ${({ align }) => align || 'center'};
  gap: ${({ webGap }) => (webGap ? `${webGap}rem` : '0rem')};
  width: 100%;
  min-width: 320px;
  max-width: 425px; /* 웹뷰 기준 최대 너비 */
  height: ${({ height, heightVh }) =>
    height ? `${height}rem` : heightVh ? `${heightVh}vh` : 'auto'};
  /* margin: 0 auto; */
  padding: ${({ padding }) => (padding ? padding : '0px')};
  box-sizing: border-box;
  border-radius: ${({ borderRadius }) =>
    borderRadius ? `${borderRadius}px` : '0px'};
`;
