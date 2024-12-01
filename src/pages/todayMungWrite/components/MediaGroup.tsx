import { CameraIcon } from '@/assets/images/svgs';
import S from '../styles/MediaGroup.style';

function MediaGroup() {
  const handleCliick = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.multiple = true;
    input.click();

    input.onchange = (e: Event) => {
      const files = (e.target as HTMLInputElement).files;
      if (files) {
        const fileArray = Array.from(files);
        fileArray.forEach((file) => {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = (e) => {
            console.log((e.target as FileReader).result);
          };
        });
      }
    };
  };

  return (
    <S.Wrapper>
      <S.AddMediaButton onClick={handleCliick}>
        <CameraIcon width={24} height={24} />
      </S.AddMediaButton>
      <S.Media src="https://dimg.donga.com/wps/NEWS/IMAGE/2022/01/28/111500268.2.jpg" />
      <S.Media src="https://dimg.donga.com/wps/NEWS/IMAGE/2022/01/28/111500268.2.jpg" />
      <S.Media src="https://dimg.donga.com/wps/NEWS/IMAGE/2022/01/28/111500268.2.jpg" />
    </S.Wrapper>
  );
}

export default MediaGroup;
