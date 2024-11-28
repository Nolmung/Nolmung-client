import BottomSheet from './components/bottomSheet';

function Main() {
  return (
    <div style={{ height: '100dvh', width: '100%', backgroundColor: 'pink' }}>
      메인
      <div style={{ position: 'absolute', bottom: '300px', width: '100%' }}>
        <BottomSheet />
      </div>
    </div>
  );
}

export default Main;
