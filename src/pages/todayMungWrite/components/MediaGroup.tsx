import { CameraIcon } from '@/assets/images/svgs';
import S from '../styles/MediaGroup.style';

function MediaGroup() {
  return (
    <S.Wrapper>
      <S.AddMediaButton>
        <CameraIcon width={24} height={24} />
      </S.AddMediaButton>
      <S.Media src="https://dimg.donga.com/wps/NEWS/IMAGE/2022/01/28/111500268.2.jpg" />
      <S.Media src="https://dimg.donga.com/wps/NEWS/IMAGE/2022/01/28/111500268.2.jpg" />
      <S.Media src="https://dimg.donga.com/wps/NEWS/IMAGE/2022/01/28/111500268.2.jpg" />
    </S.Wrapper>
  );
}

export default MediaGroup;
