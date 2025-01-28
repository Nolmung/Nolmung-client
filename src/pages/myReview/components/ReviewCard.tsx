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
            <S.PlaceName
              aria-label={`장소 이름: ${placeName}`}
              title={placeName}
            >
              {placeName}
            </S.PlaceName>
            <S.StarIconRateWrapper aria-label={`평점: ${rating}`}>
              <FilledStar width={13} />
              <S.Rate>{rating}</S.Rate>
            </S.StarIconRateWrapper>
          </S.PlaceNameAddressWrapper>
          <TrashcanIcon
            role="button"
            aria-label={`리뷰 삭제 버튼`}
            onClick={handleTrashcanIconClick}
            width={15}
          />
        </S.PlaceNameAddressTrashCanWrapper>
        <S.Address aria-label={`장소 주소: ${address}`} title={address}>
          {address}
        </S.Address>
      </S.PlaceInfoWrapper>
      <S.LabelList aria-label={`리뷰 라벨 리스트`}>
        {Labels?.map((label) => <LabelCard id={label.labelId} />)}
      </S.LabelList>
    </S.Wrapper>
  );
}

export default ReviewCard;
