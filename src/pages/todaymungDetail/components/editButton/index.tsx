import { DeleteIcon, EditIcon } from '@/assets/images/svgs';
import { S } from '../../styles/EditButton.style';
import { useNavigate } from 'react-router-dom';
import { ROUTE } from '@/common/constants/route';
import { useTodaymungDelete } from '../../queries';
import { deleteFileFromS3 } from '@/common/utils/uploadImageToS3';

type Media = {
  mediaType: string;
  mediaUrl: string;
};

interface EditButtonProps {
  diaryId: number;
  medias: Media[];
}

const EditButton = ({ diaryId, medias }: EditButtonProps) => {
  const navigate = useNavigate();
  const { mutate: deleteDiary } = useTodaymungDelete(diaryId);
  const handleEditClick = () => {
    navigate(ROUTE.TODAYMUNG_EDIT(diaryId));
  };

  const handleDeleteClick = () => {
    if (window.confirm('정말로 삭제하시겠습니까?')) {
      deleteDiary(diaryId, {
        onSuccess: async () => {
          try {
            await Promise.all(
              medias.map(async (media) => {
                await deleteFileFromS3(media.mediaUrl);
              }),
            );
          } catch (error) {
            console.error('파일 삭제 중 에러 발생:', error);
          }

          navigate(ROUTE.TODAYMUNG(), { replace: true });
          window.location.reload();
        },
      });
    }
  };

  return (
    <S.Wrapper>
      <S.EditArea onClick={handleEditClick}>
        <EditIcon width={16.5} height={16.5} />
        <S.EditText>수정하기</S.EditText>
      </S.EditArea>
      <S.DeleteArea>
        <DeleteIcon width={18} height={18} />
        <S.DeleteText onClick={handleDeleteClick}>삭제하기</S.DeleteText>
      </S.DeleteArea>
    </S.Wrapper>
  );
};

export default EditButton;
