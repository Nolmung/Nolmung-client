import { useState, forwardRef } from 'react';
import S from '../../styles/Filter.style';
import {
  FilterState,
  FilterType,
  FilterValue,
  RatingFitlerValue,
} from '../../types/filter';
import { FILTER_OPTIONS, FILTER_TYPES } from '../../constants/filter';
import { DogSize } from '@/service/apis/user/index.types';

function FilterButtonGroup({
  type,
  options,
  selectedValue,
  onClick,
}: {
  type: FilterType;
  options: { value: string; label: string }[];
  selectedValue: DogSize | RatingFitlerValue | null;
  onClick: (type: FilterType, value: string | number) => void;
}) {
  return (
    <S.ButtonWrapper>
      {options.map(({ value, label }) => (
        <S.StyledButton
          key={value}
          onClick={() => onClick(type, value)}
          isActive={selectedValue === value}
        >
          {label}
        </S.StyledButton>
      ))}
    </S.ButtonWrapper>
  );
}

const Filter = forwardRef<
  HTMLDivElement,
  {
    selectedFilter: FilterState;
    onFilterChange: (type: FilterType, value: string | number) => void;
  }
>(function ({ selectedFilter, onFilterChange }, ref) {
  return (
    <S.FilterWrapper ref={ref}>
      {Object.entries(FILTER_OPTIONS).map(([type, options]) => (
        <S.FilterMenu key={type}>
          <S.FilterText>
            {type === FILTER_TYPES.WEIGHT ? '반려견 몸무게' : '평점'}
          </S.FilterText>
          <FilterButtonGroup
            type={type as FilterType}
            options={options}
            selectedValue={selectedFilter[type as FilterType]}
            onClick={onFilterChange}
          />
        </S.FilterMenu>
      ))}
    </S.FilterWrapper>
  );
});

export default Filter;
