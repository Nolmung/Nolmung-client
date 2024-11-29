import BottomSheetHandle from './Handle';
import useBottomSheet from '../../hooks/useBottomSheet';
import { REF_HEIGHT } from '@/common/constants/ui';
import { S } from '../../styles/BottomSheet.style';
import checkUserDevice from '../../utils/checkUserDevice';
import useMouseBottomSheet from '../../hooks/useMouseBottomSheet';
import { useRef } from 'react';

function BottomSheet() {
  const device = checkUserDevice();

  let bottomSheetRef = useRef<HTMLDivElement>(null);
  let contentRef = useRef<HTMLDivElement>(null);
  if (device == 'Mobile') {
    const { sheet, content } = useBottomSheet({
      setIsBottomSheetOpen: () => {},
    });
    bottomSheetRef = sheet;
    contentRef = content;
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
        <div style={{ height: '100px', position: 'sticky' }}>메뉴</div>
        <S.BottomSheetContentWrapper ref={contentRef} refheight={REF_HEIGHT}>
          <S.BottomSheetContentCard />
          <S.BottomSheetContentCard />
          <S.BottomSheetContentCard />
          <S.BottomSheetContentCard />
          <S.BottomSheetContentCard />
          <S.BottomSheetContentCard />
          <S.BottomSheetContentCard />
          <S.BottomSheetContentCard />
          <S.BottomSheetContentCard />
          <S.BottomSheetContentCard />
          <S.BottomSheetContentCard />
          <S.BottomSheetContentCard />
          <S.BottomSheetContentCard />
          <S.BottomSheetContentCard />
        </S.BottomSheetContentWrapper>
      </S.BottomSheetBody>
    </S.Wrapper>
  );
}

export default BottomSheet;
