import { DogPaw } from '@/assets/images/svgs';
import S from '../styles/LabelCard.style';
import findLabelNameById from '@/common/utils/findLabelNameById';

interface LabelCardProps {
  id: number;
}
function LabelCard({ id }: LabelCardProps) {
  const labelName = findLabelNameById(id);
  return (
    <S.Wrapper>
      <DogPaw width={14} height={14} />
      <S.Label>{labelName}</S.Label>
    </S.Wrapper>
  );
}

export default LabelCard;
