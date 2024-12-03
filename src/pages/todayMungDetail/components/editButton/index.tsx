import { DeleteIcon, EditIcon } from '@/assets/images/svgs';
import { S } from '../../styles/EditButton.style';

const EditButton = () => {
  return (
    <S.Wrapper>
      <S.EditArea>
        <EditIcon width={16.5} height={16.5} />
        <S.EditText>수정하기</S.EditText>
      </S.EditArea>
      <S.DeleteArea>
        <DeleteIcon width={18} height={18} />
        <S.DeleteText>삭제하기</S.DeleteText>
      </S.DeleteArea>
    </S.Wrapper>
  );
};

export default EditButton;
