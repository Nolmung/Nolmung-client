import BottomSheetHandle from './Handle';
import useBottomSheet from '../../hooks/useBottomSheet';
import { REF_HEIGHT } from '@/common/constants/ui';
import { S } from '../../styles/BottomSheet.style';
import Content from './Content';

import Filter from './Filter';
import checkUserDevice from '../../utils/checkUserDevice';
import useMouseBottomSheet from '../../hooks/useMouseBottomSheet';
import { useRef } from 'react';
import { MarkerType } from '../../types';
import { FilterState, FilterType } from '../../types/filter';
import { NoResulLiedownUI } from '@/common/components/noResultUI';
import ReactGA from 'react-ga4';

type BottomSheetProps = {
  placeMap: MarkerType[];
  selectedFilter: FilterState;
  setSelectedFilter: React.Dispatch<React.SetStateAction<FilterState>>;
};

function BottomSheet({
  placeMap,
  selectedFilter,
  setSelectedFilter,
}: BottomSheetProps) {
  const device = checkUserDevice();

  let bottomSheetRef = useRef<HTMLDivElement>(null);
  let contentRef = useRef<HTMLDivElement>(null);
  let filterRef = useRef<HTMLDivElement>(null);
  if (device == 'Mobile') {
    const { sheet, content, filter } = useBottomSheet({
      setIsBottomSheetOpen: () => {},
    });
    bottomSheetRef = sheet;
    contentRef = content;
    filterRef = filter;
  } else if (device == 'Desktop') {
    const { sheet, content } = useMouseBottomSheet({
      setIsBottomSheetOpen: () => {},
    });
    bottomSheetRef = sheet;
    contentRef = content;
  }

  const handleFilterChange = (type: FilterType, value: string | number) => {
    if (selectedFilter[type] === value) {
      setSelectedFilter({
        ...selectedFilter,
        [type]: null,
      });
      ReactGA.event({
        category: 'User',
        action: 'Click Filter',
        label:
          'userClicked FilterType' + type + 'userClicked' + value.toString(),
      });
      return;
    }

    setSelectedFilter((prev) => ({
      ...prev,
      [type]: prev[type] === value ? null : value, // 선택 토글
    }));
    ReactGA.event({
      category: 'User',
      action: 'Click Filter',
      label:
        'userCanceled FilterType' + type + 'userClicked' + value.toString(),
    });
  };

  const filteredPlaceMap = placeMap.filter((place) => {
    // 필터링 로직
    const weightFilter =
      place.acceptSize === 'ALL' || // 'ALL'인 경우 모든 데이터를 포함
      (selectedFilter.weight
        ? place.acceptSize === selectedFilter.weight
        : true);

    const ratingFilter = selectedFilter.rating
      ? place.starRatingAvg >= selectedFilter.rating
      : true;

    return weightFilter && ratingFilter;
  });

  return (
    <S.Wrapper ref={bottomSheetRef}>
      <S.BottomSheetBody>
        <BottomSheetHandle />
        <Filter
          ref={filterRef}
          selectedFilter={selectedFilter}
          onFilterChange={handleFilterChange}
        />
        {filteredPlaceMap.length !== 0 ? (
          <S.BottomSheetContentWrapper ref={contentRef} refheight={REF_HEIGHT}>
            {filteredPlaceMap.map((place) => (
              <Content isCard={false} key={place.placeId} place={place} />
            ))}
          </S.BottomSheetContentWrapper>
        ) : (
          <S.BottomSheetContentWrapper ref={contentRef} refheight={REF_HEIGHT}>
            <div>
              <NoResulLiedownUI content="결과가 없습니다." />
            </div>
          </S.BottomSheetContentWrapper>
        )}
      </S.BottomSheetBody>
    </S.Wrapper>
  );
}

export default BottomSheet;
