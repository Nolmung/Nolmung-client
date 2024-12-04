/* eslint-disable no-unused-vars */
import React, { ChangeEvent } from 'react';

import { S } from './index.style';

import { Search } from '@/assets/images/svgs';

interface SearchInputProps {
  value?: string;
  width?: number;
  disabled?: boolean;
  onClick?: () => void;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

function SearchInput({
  value,
  width,
  onClick,
  onChange,
  placeholder = '장소를 검색해주세요',
}: SearchInputProps) {
  const handleEnterKeyOn = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && onClick && !e.nativeEvent.isComposing) {
      onClick();
    }
  };
  return (
    <S.InputWrapper width={width ? width : 100}>
      <S.Input
        autoFocus
        placeholder={placeholder}
        value={value}
        onKeyDown={handleEnterKeyOn}
        onChange={onChange}
      />
      <Search onClick={onClick} width={22} height={22} />
    </S.InputWrapper>
  );
}

export default SearchInput;
