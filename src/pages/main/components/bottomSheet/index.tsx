import BottomSheetHandle from './Handle';
import useBottomSheet from '../../hooks/useBottomSheet';
import { REF_HEIGHT } from '@/common/constants/ui';
import { S } from '../../styles/BottomSheet.style';
import Content from './Content';
import { placeMap } from '@/mocks/data/placeMap';

function BottomSheet() {
  const { sheet, content } = useBottomSheet({
    setIsBottomSheetOpen: () => {},
  });

  return (
    <S.Wrapper ref={sheet}>
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
