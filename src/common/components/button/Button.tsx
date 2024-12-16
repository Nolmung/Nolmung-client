import React from 'react';
import { S } from './Button.style';
import { ButtonProps } from './Button.type';

/**
 * 공용으로 사용하는 버튼 컴포넌트입니다.
 *
 * @param {() => void} onClick - 버튼 클릭 시 호출할 함수
 * @param {string} width - 버튼의 가로 크기
 * @param {string} height - 버튼의 세로 크기
 * @param {string} backgroundColor - 버튼의 배경색
 * @param {string} color - 버튼 텍스트의 색상
 * @param {string} fontSize - 폰트 크기
 * @param {number} fontWeight - 폰트 두께
 * @param {string} borderRadius - 버튼의 테두리 둥글기
 * @param {boolean} disabled - 버튼 활성화 여부
 * @param {string} border - 버튼 테두리 스타일
 * @param {string} display - 버튼의 display 스타일
 * @param {string} justifyContent - 가로 정렬 방식
 * @param {string} alignItems - 세로 정렬 방식
 *
 */

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
  display,
  justifyContent,
  alignItems,
}) => {
  return (
    <S.Wrapper
      display={display}
      justifyContent={justifyContent}
      alignItems={alignItems}
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
