/* eslint-disable no-unused-vars */
import { ChangeEvent } from 'react';

import { S } from './index.style';

import { Search } from '@/assets/images/svgs';

interface SearchInputProps {
  placeholder?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  size?: 'small' | 'medium' | 'large';
}

function SearchInput({
  placeholder = '장소를 검색해주세요',
  value,
  onChange,
}: SearchInputProps) {
  return (
    <S.InputWrapper>
      <S.Wrapper placeholder={placeholder} value={value} onChange={onChange} />
      <Search width={22} height={22} />
    </S.InputWrapper>
  );
}

export default SearchInput;
