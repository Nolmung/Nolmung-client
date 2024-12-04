import { Review } from '@/service/apis/user/index.types';
import S from '../styles/ReviewCard.style';
import LabelCard from './LabelCard';
import { FilledStar, TrashcanIcon } from '@/assets/images/svgs';

interface ReviewCardProps {
  data: Review;
  openModal: () => void;
}
function ReviewCard({ data, openModal }: ReviewCardProps) {
  const { placeName, address, rating, reviewLabels } = data;
  return (
    <S.Wrapper>
      <S.PlaceInfoWrapper>
        <S.PlaceNameAddressTrashCanWrapper>
          <S.PlaceNameAddressWrapper>
            <S.PlaceName>{placeName}</S.PlaceName>
            <S.StarIconRateWrapper>
              <FilledStar width={12} />
              <S.Rate>{rating}</S.Rate>
            </S.StarIconRateWrapper>
          </S.PlaceNameAddressWrapper>
          <TrashcanIcon onClick={openModal} width={15} />
        </S.PlaceNameAddressTrashCanWrapper>
        <S.Address>{address}</S.Address>
      </S.PlaceInfoWrapper>
      <S.LabelList>
        {reviewLabels.map((label) => (
          <LabelCard id={label.id} />
        ))}
      </S.LabelList>
    </S.Wrapper>
  );
}

export default ReviewCard;
