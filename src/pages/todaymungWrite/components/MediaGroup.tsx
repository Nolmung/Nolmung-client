import { CameraIcon, CancelIcon } from '@/assets/images/svgs';
import S from '../styles/MediaGroup.style';
import { useTodayMungStore } from '../stores/todayMungStore';
import {
  deleteFileFromS3,
  uploadFileToS3,
} from '@/common/utils/uploadImageToS3';

function MediaGroup() {
  const MAX_MEDIA_COUNT = 5; // 최대 이미지 개수
  const { medias, addMedia, deleteMedia } = useTodayMungStore();

  const handleAddMediaButtonCliick = async () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*, video/*';
    input.multiple = true;
    input.click();

    input.onchange = async (e: Event) => {
      const files = (e.target as HTMLInputElement).files;
      if (!files) return;

      const fileArray = Array.from(files);
      const remainingSlots = MAX_MEDIA_COUNT - medias.length;

      if (fileArray.length > remainingSlots) {
        alert(`최대 ${MAX_MEDIA_COUNT}개의 이미지만 등록할 수 있습니다.`);
        return;
      }
      uploadFileToS3(fileArray, addMedia);
    };
  };

  const handleRemoveMediaButtonClick = (mediaId: number) => {
    deleteFileFromS3(
      medias.find((media) => media.mediaId === mediaId)!.mediaUrl!,
      mediaId,
      deleteMedia,
    );
  };

  return (
    <S.Wrapper>
      <S.AddMediaButton onClick={handleAddMediaButtonCliick}>
        <CameraIcon width={24} height={24} />
      </S.AddMediaButton>
      {medias?.map((media) => (
        <S.MediaWrapper key={media.mediaId}>
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
