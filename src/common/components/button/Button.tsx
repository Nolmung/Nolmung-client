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
  disabled,
  border,
}) => {
  return (
    <S.Wrapper
      disabled={disabled}
      onClick={onClick}
      width={width}
      height={height}
      backgroundColor={backgroundColor}
      color={color}
      fontWeight={fontWeight}
      fontSize={fontSize}
      borderRadius={borderRadius}
      border={border}
    >
      {children}
    </S.Wrapper>
  );
};

export default Button;
