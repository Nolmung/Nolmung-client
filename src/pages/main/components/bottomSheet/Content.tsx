import { S } from '../../styles/Content.style';
import { IoHeartSharp } from 'react-icons/io5';
import { useState } from 'react';
import { MapPlace } from '@/service/apis/place/index.type';
import { useNavigate } from 'react-router-dom';
import { ROUTE } from '@/common/constants/route';
import { FilledStar } from '@/assets/images/svgs';

interface ContentProps {
  place: MapPlace | null;
  isCard: boolean;
}

function Content({ place, isCard }: ContentProps) {
  const navigate = useNavigate();
  const [isLiked, setIsLiked] = useState<Boolean>(false);

  const handleLikeClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.stopPropagation();
    setIsLiked(!isLiked);
  };

  const navigateToDetail = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.stopPropagation();
    navigate(ROUTE.DETAIL(place!.placeId));
  };

  return (
    <S.Wrapper isCard={isCard} onClick={navigateToDetail}>
      <S.Container>
        <S.PlaceInfoWrapper>
          <S.InfoTextWrapper>
            <S.PlaceNameCategoryWrapper>
              <S.PlaceName>{place!.placeName}</S.PlaceName>
              <S.PlaceCategory>{place!.category}</S.PlaceCategory>
            </S.PlaceNameCategoryWrapper>
            <S.PlaceAddress>{place!.roadAddress}</S.PlaceAddress>
            <S.PlaceReviewWrapper>
              <S.TextWrapper>
                <FilledStar width={14} height={14} />
                {place!.starRatingAvg}
              </S.TextWrapper>
              <S.PlaceReviewCount>
                리뷰 {place!.reviewCount}개
              </S.PlaceReviewCount>
            </S.PlaceReviewWrapper>
          </S.InfoTextWrapper>
        </S.PlaceInfoWrapper>
        <S.ImageWrapper>
          <S.PlaceImage src={place!.placeImgUrl} alt={place!.placeName} />
          <S.Like>
            {isLiked ? (
              <S.IconWrapper onClick={handleLikeClick}>
                <IoHeartSharp size={24} color="#FF4E3E" />
              </S.IconWrapper>
            ) : (
              <S.IconWrapper
                onClick={handleLikeClick}
              >
                <IoHeartSharp size={24} color="#a0a0a0c6" />
              </S.IconWrapper>
            )}
          </S.Like>
        </S.ImageWrapper>
      </S.Container>
    </S.Wrapper>
  );
}

export default Content;
