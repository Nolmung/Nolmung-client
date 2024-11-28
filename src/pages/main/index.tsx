import BottomSheet from './components/bottomSheet';
import { S } from './styles/index.style';
function Main() {
  return (
    <div style={{ height: '100dvh', width: '100%', backgroundColor: 'pink' }}>
      메인
      <S.Bottom>
        <BottomSheet />
      </S.Bottom>
    </div>
  );
}

export default Main;
