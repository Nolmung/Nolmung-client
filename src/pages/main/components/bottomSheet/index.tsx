import BottomSheetHandle from './Handle';
import useBottomSheet from '../../hooks/useBottomSheet';
import { REF_HEIGHT } from '@/common/constants/ui';
import { S } from '../../styles/BottomSheet.style';
import Content from './Content';
import { placeMap } from '@/mocks/data/placeMap';

import Filter from './Filter';
import checkUserDevice from '../../utils/checkUserDevice';
import useMouseBottomSheet from '../../hooks/useMouseBottomSheet';
import { useRef } from 'react';
function BottomSheet() {
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
  return (
    <S.Wrapper ref={bottomSheetRef}>
      <S.BottomSheetBody>
        <BottomSheetHandle />
        <Filter ref={filterRef} />
        <S.BottomSheetContentWrapper ref={contentRef} refheight={REF_HEIGHT}>
          {placeMap.map((place) => (
            <Content isCard={false} key={place.place_id} place={place} />
          ))}
        </S.BottomSheetContentWrapper>
      </S.BottomSheetBody>
    </S.Wrapper>
  );
}

export default BottomSheet;
