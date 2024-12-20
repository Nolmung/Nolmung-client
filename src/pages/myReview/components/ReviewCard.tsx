import S from '../styles/ReviewCard.style';
import LabelCard from './LabelCard';
import { FilledStar, TrashcanIcon } from '@/assets/images/svgs';
import { GetReviewResponse } from '@/service/apis/review/index.type';
import { useNavigate } from 'react-router-dom';
import { ROUTE } from '@/common/constants/route';

interface ReviewCardProps {
  data: GetReviewResponse;
  openModal: () => void;
  setDeleteReviewId: (id: number) => void;
}
function ReviewCard({ data, openModal, setDeleteReviewId }: ReviewCardProps) {
  const { placeId, placeName, address, rating, Labels } = data;
  const navigate = useNavigate();
  const navigateToPlaceDetail = () => {
    navigate(ROUTE.DETAIL(placeId));
  };

  const handleTrashcanIconClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setDeleteReviewId(data.reviewId);
    openModal();
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
          <TrashcanIcon onClick={handleTrashcanIconClick} width={15} />
        </S.PlaceNameAddressTrashCanWrapper>
        <S.Address>{address}</S.Address>
      </S.PlaceInfoWrapper>
      <S.LabelList>
        {Labels?.map((label) => <LabelCard id={label.labelId} />)}
      </S.LabelList>
    </S.Wrapper>
  );
}

export default ReviewCard;
