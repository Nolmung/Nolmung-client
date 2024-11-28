import BottomSheetHandle from './Handle';
import useBottomSheet from '../../hooks/useBottomSheet';
import { FaList } from 'react-icons/fa';
import { REF_HEIGHT } from '@/common/constants/ui';
import { S } from '../../styles/BottomSheet.style';
import Content from './Content';
import { placeMap } from '@/mocks/data/placeMap';

function BottomSheet() {
  const { sheet, handleUp, content } = useBottomSheet({
    setIsBottomSheetOpen: () => {},
  });

  return (
    <S.Wrapper ref={sheet}>
      <S.OpenButton onClick={handleUp}>
        <FaList style={{ width: '16px', height: '16px', flexShrink: '0' }} />
        <S.OpenButtonText> 목록 보기</S.OpenButtonText>
      </S.OpenButton>
      <S.BottomSheetBody>
        <BottomSheetHandle />
        <div
          style={{
            height: '100px',
            position: 'sticky',
            backgroundColor: 'blue',
          }}
        >
          메뉴
        </div>
        <S.BottomSheetContentWrapper ref={content} refheight={REF_HEIGHT}>
          {placeMap.map((place) => (
            <Content key={place.place_id} place={place} />
          ))}
        </S.BottomSheetContentWrapper>
      </S.BottomSheetBody>
    </S.Wrapper>
  );
}

export default BottomSheet;
