import BottomSheetHandle from './Handle';
import useBottomSheet from '../../hooks/useBottomSheet';
import { FaList } from 'react-icons/fa';
import { BOTTOM_NAV_HEIGHT, WINDOW_HEIGHT } from '@/common/constants/ui';
import { S } from '../../styles/BottomSheet.style';

function BottomSheet() {
  const { sheet, handleUp, content } = useBottomSheet({
    setIsBottomSheetOpen: () => {},
  });
  const refheight = WINDOW_HEIGHT - BOTTOM_NAV_HEIGHT;
  return (
    <S.Wrapper ref={sheet}>
      <S.OpenButton onClick={handleUp}>
        <FaList style={{ width: '16px', height: '16px', flexShrink: '0' }} />
        <S.OpenButtonText> 목록 보기</S.OpenButtonText>
      </S.OpenButton>
      <S.BottomSheetBody>
        <BottomSheetHandle />
        <S.BottomSheetContentWrapper refheight={refheight}>
          <S.BottomSheetContentRef ref={content}></S.BottomSheetContentRef>
        </S.BottomSheetContentWrapper>
      </S.BottomSheetBody>
    </S.Wrapper>
  );
}

export default BottomSheet;
