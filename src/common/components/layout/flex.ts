import styled from 'styled-components';

/**  
 * 공용으로 사용 할 FLEX 사실상 Container
*/
export const Flex = styled.div<{
  $direction?: 'row' | 'column';
  $justify?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around';
  $align?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
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
  flex-direction: ${({ $direction }) => $direction || 'row'};
  justify-content: ${({ $justify }) => $justify || 'center'};
  align-items: ${({ $align }) => $align || 'center'};
  gap: ${({ webGap }) => (webGap ? `${webGap}rem` : '0rem')};
  width: 100%;
  max-width: 425px;
  min-width: 320px;
  max-width: 600px;
  height: ${({ height, heightVh }) =>
    height ? `${height}rem` : heightVh ? `${heightVh}vh` : 'auto'};
  padding: ${({ padding }) => (padding ? padding : '0px')};
  border-radius: ${({ borderRadius }) =>
    borderRadius ? `${borderRadius}px` : '0px'};
  flex: 1;
`;
