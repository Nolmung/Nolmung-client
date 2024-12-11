import styled from 'styled-components';
import { ButtonStyleProps } from './Button.type';

export const S = {
  Wrapper: styled.button<ButtonStyleProps>`
    display: ${({ display }) => display};
    justify-content: ${({ justifyContent }) => justifyContent};
    align-items: ${({ alignItems }) => alignItems};
    width: ${({ width }) => (width ? width : '142px')};
    height: ${({ height }) => (height ? height : '48px')};
    font-size: ${({ fontSize }) => (fontSize ? fontSize : '14px')};
    font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : 600)};
    background-color: ${({ backgroundColor }) =>
      backgroundColor ? backgroundColor : '#F5F6F8'};
    color: ${({ color }) => (color ? color : '#5D5D5D')};
    text-align: center;
    border-radius: ${({ borderRadius }) =>
      borderRadius ? borderRadius : '12px'};
    border: ${({ border }) => (border ? border : 'none')};
    white-space: nowrap;
  `,
};
