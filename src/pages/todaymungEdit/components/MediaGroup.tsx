import { CameraIcon, CancelIcon, NoImage } from '@/assets/images/svgs';
import S from '../styles/MediaGroup.style';
import { useTodayMungStore } from '../stores/todayMungStore';
import {
  deleteFileFromS3,
  uploadFileToS3,
} from '@/common/utils/uploadImageToS3';
import { Media } from '@/service/apis/diary/index.type';
import { toast } from 'react-toastify';

function MediaGroup() {
  const MAX_IMAGE_COUNT = 5; // 최대 이미지 개수
  const MAX_VIDEO_COUNT = 1;

  const { medias, addMedia, deleteMedia } = useTodayMungStore();

  const handleAddMediaButtonClick = async () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*, video/*';
    input.multiple = true;
    input.click();

    input.onchange = async (e: Event) => {
      const files = (e.target as HTMLInputElement).files;
      if (!files) return;

      const fileArray = Array.from(files);

      const currentImages = medias.filter(
        (media) => media.mediaType === 'IMAGE',
      ).length;
      const currentVideos = medias.filter(
        (media) => media.mediaType === 'VIDEO',
      ).length;

      const newImages = fileArray.filter((file) =>
        file.type.startsWith('image/'),
      );
      const newVideos = fileArray.filter((file) =>
        file.type.startsWith('video/'),
      );

      if (currentImages + newImages.length > MAX_IMAGE_COUNT) {
        toast.error(`최대 ${MAX_IMAGE_COUNT}개의 이미지만 등록할 수 있습니다.`);
        return;
      }

      if (currentVideos + newVideos.length > MAX_VIDEO_COUNT) {
        toast.error(`최대 ${MAX_VIDEO_COUNT}개의 비디오만 등록할 수 있습니다.`);
        return;
      }

      const validFiles = [...newImages, ...newVideos];

      const result = await uploadFileToS3(validFiles);

      result?.forEach((item) => {
        const media: Media = {
          mediaId: Math.floor(new Date().getTime() + Math.random() * 10000),
          mediaType: item.fileType as unknown as Media['mediaType'],
          mediaUrl: item.s3Url,
        };
        addMedia(media);
      });
    };
  };

  /** @Todo 오늘멍 수정, 삭제 API 성공 후 실행되도록 수정*/
  const handleRemoveMediaButtonClick = async (mediaId: number) => {
    const result = await deleteFileFromS3(
      medias.find((media) => media.mediaId === mediaId)!.mediaUrl!,
    );
    if (result) {
      deleteMedia(mediaId);
    }
  };

  return (
    <S.Wrapper>
      <S.AddMediaButton onClick={handleAddMediaButtonClick}>
        <CameraIcon width={24} height={24} />
      </S.AddMediaButton>
      {medias?.map((media) => {
        const isMediaIdValid =
          media.mediaUrl !== undefined && media.mediaUrl.startsWith('https://');
        return (
          <S.MediaWrapper key={media.mediaId}>
            {isMediaIdValid ? (
              <S.Media src={media.mediaUrl} />
            ) : (
              <NoImage width={86} />
            )}
            {isMediaIdValid && (
              <S.IconWrapper
                onClick={() => handleRemoveMediaButtonClick(media.mediaId!)}
              >
                <CancelIcon width={10} />
              </S.IconWrapper>
            )}
          </S.MediaWrapper>
        );
      })}
    </S.Wrapper>
  );
}

export default MediaGroup;
