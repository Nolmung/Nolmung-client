import { CameraIcon, CancelIcon } from '@/assets/images/svgs';
import S from '../styles/MediaGroup.style';
import { useTodayMungStore } from '../stores/todayMungStore';
import { Media, MideaType } from '@/service/apis/diary/index.type';

function MediaGroup() {
  const { medias, addMedias, deleteImages } = useTodayMungStore();
  const MAX_MEDIA_COUNT = 5; // 최대 이미지 개수

  const readFileAsDataURL = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = () => reject(new Error('파일을 읽는 데 실패했습니다.'));
      reader.readAsDataURL(file);
    });
  };

  const handleAddMediaButtonCliick = async () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
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

      const failedFiles: string[] = [];

      for (const file of fileArray) {
        try {
          /** @Todo Base64 파일을 S3에 업로드 한 후 만들어진 URL로 store에 저장해야됨.
           * base64 파일 여러 개를 localstorage에 저장하면 용량 문제로 저장이 제대로 되지 않음.
           * 그래서 모바일에서 여러 이미지를 업로드하고 새로고침하면 일부가 날아가는 문제가 발생합니다.
           */
          const mediaUrl = await readFileAsDataURL(file);

          const media: Media = {
            mediaId: Date.now() + Math.random(),
            mediaType: MideaType.IMAGE,
            mediaUrl,
          };
          addMedias(media);
        } catch (error) {
          console.log(error);
          failedFiles.push(file.name);
        }
      }

      if (failedFiles.length > 0) {
        alert(
          `localstorage 용량 초과로 ${failedFiles.length}개의 파일 등록에 실패했습니다.`,
        );
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
