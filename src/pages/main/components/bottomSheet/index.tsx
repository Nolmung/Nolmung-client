import BottomSheetHandle from './Handle';
import useBottomSheet from '../../hooks/useBottomSheet';
import { REF_HEIGHT } from '@/common/constants/ui';
import { S } from '../../styles/BottomSheet.style';
import Filter from './Filter';

function BottomSheet() {
  const { sheet, content } = useBottomSheet({
    setIsBottomSheetOpen: () => {},
  });

  return (
    <S.Wrapper ref={sheet}>
      <S.BottomSheetBody>
        <BottomSheetHandle />
        <div style={{ height: '100px', position: 'sticky' }}>
          <Filter />
        </div>
        <S.BottomSheetContentWrapper ref={content} refheight={REF_HEIGHT}>
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
