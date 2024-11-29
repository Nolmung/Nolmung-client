import { useState, forwardRef } from 'react';
import S from '../../styles/Filter.style';
import { FilterState, FilterType, FilterValue } from '../../types/filter';
import { FILTER_OPTIONS, FILTER_TYPES } from '../../constants/filter';

function FilterButtonGroup({
  type,
  options,
  selectedValue,
  onClick,
}: {
  type: FilterType;
  options: { value: string; label: string }[];
  selectedValue: FilterValue;
  onClick: (type: FilterType, value: string) => void;
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

const Filter = forwardRef<HTMLDivElement>(function (_, ref) {
  const [selectedFilter, setSelectedFilter] = useState<FilterState>({
    weight: null,
    rating: null,
  });

  const handleFilterClick = (type: FilterType, value: string) => {
    setSelectedFilter({
      ...selectedFilter,
      [type]: value,
    });
  };

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
            onClick={handleFilterClick}
          />
        </S.FilterMenu>
      ))}
    </S.FilterWrapper>
  );
});

export default Filter;
