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
  const navigateToPlaceDetail = () => {
    /**@Todo 현재 data에 placeId가 나와있지 않음, API 연동시 백엔드에게 요청하기 
    navigate(ROUTE.DETAIL(data.placeId));
    */
  };
  return (
    <S.Wrapper onClick={navigateToPlaceDetail}>
      <S.PlaceInfoWrapper>
        <S.PlaceNameAddressTrashCanWrapper>
          <S.PlaceNameAddressWrapper>
            <S.PlaceName>{placeName}</S.PlaceName>
            <S.StarIconRateWrapper>
              <FilledStar width={13} />
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
