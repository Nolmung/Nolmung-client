import { FaStar } from 'react-icons/fa';
import { S } from '../../styles/Content.style';
import { IoHeartSharp } from 'react-icons/io5';
import { IoHeartOutline } from 'react-icons/io5';
import { useState } from 'react';
import { MapPlace } from '@/service/apis/place/index.type';
import { useNavigate } from 'react-router-dom';
import { ROUTE } from '@/common/constants/route';

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
    navigate(ROUTE.DETAIL(place!.place_id));
  };

  return (
    <S.Wrapper isCard={isCard} onClick={navigateToDetail}>
      <S.PlaceInfoWrapper>
        <S.InfoTextWrapper>
          <S.PlaceNameCategoryWrapper>
            <S.PlaceName>{place!.place_name}</S.PlaceName>
            <S.PlaceCategory>{place!.category}</S.PlaceCategory>
          </S.PlaceNameCategoryWrapper>
          <S.PlaceAddress>{place!.road_address}</S.PlaceAddress>
          <S.PlaceReviewWrapper>
            <FaStar style={{ color: '#FFD700' }} />
            {place!.star_rating_avg}
            <S.PlaceReviewCount>
              리뷰 {place!.review_count}개
            </S.PlaceReviewCount>
          </S.PlaceReviewWrapper>
        </S.InfoTextWrapper>
        <S.Like>
          {isLiked ? (
            <S.IconWrapper onClick={handleLikeClick}>
              <IoHeartSharp size={24} color="#FF4E3E" />
            </S.IconWrapper>
          ) : (
            <S.IconWrapper onClick={handleLikeClick}>
              <IoHeartOutline size={24} color="#FF4E3E" />
            </S.IconWrapper>
          )}
        </S.Like>
      </S.PlaceInfoWrapper>
      <S.PlaceImage
        src="https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20210721_132%2F1626855796685XVdK4_JPEG%2FW0db6n6s7HHCHrwhXAk9WPua.jpeg.jpg"
        alt="시설 이미지"
      />
    </S.Wrapper>
  );
}

export default Content;
