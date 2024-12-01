import { CameraIcon, CancelIcon } from '@/assets/images/svgs';
import S from '../styles/MediaGroup.style';
import { useTodayMungStore } from '../stores/todayMungStore';
import { Media, MideaType } from '@/service/apis/diary/index.type';

function MediaGroup() {
  const { medias, addMedias, deleteImages } = useTodayMungStore();

  const handleAddMediaButtonCliick = () => {
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
            const mediaUrl = (e.target as FileReader).result;
            if (!mediaUrl) alert('사진 등록에 실패하였습니다.');
            else {
              const media: Media = {
                mediaId: new Date().getMilliseconds(),
                mediaType: MideaType.IMAGE,
                mediaUrl: mediaUrl.toString(),
              };
              addMedias(media);
            }
          };
        });
      }
    };
  };

  const handleRemoveMediaButtonClick = (mediaId: number) => {
    if (!mediaId) {
      alert('삭제에 실패하였습니다.');
    } else {
      deleteImages(mediaId);
    }
  };

  return (
    <S.Wrapper>
      <S.AddMediaButton onClick={handleAddMediaButtonCliick}>
        <CameraIcon width={24} height={24} />
      </S.AddMediaButton>
      {medias?.map((media) => (
        <S.MediaWrapper>
          <S.Media src={media.mediaUrl!} />
          <S.IconWrapper
            onClick={() => handleRemoveMediaButtonClick(media.mediaId!)}
          >
            <CancelIcon width={10} />
          </S.IconWrapper>
        </S.MediaWrapper>
      ))}
    </S.Wrapper>
  );
}

export default MediaGroup;
