import React from 'react';
import { S } from './Button.style';
import { ButtonProps } from './Button.type';

const Button: React.FC<ButtonProps> = ({
  onClick,
  width,
  height,
  backgroundColor,
  color,
  fontSize,
  fontWeight,
  borderRadius,
  children,
}) => {
  return (
    <S.Wrapper
      onClick={onClick}
      width={width}
      height={height}
      backgroundColor={backgroundColor}
      color={color}
      fontWeight={fontWeight}
      fontSize={fontSize}
      borderRadius={borderRadius}
    >
      {children}
    </S.Wrapper>
  );
};

export default Button;
