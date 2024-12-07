import { S } from '../../styles/Content.style';
// import { IoHeartSharp } from 'react-icons/io5';
import { useState } from 'react';
import { MapPlace } from '@/service/apis/place/index.type';
import { useNavigate } from 'react-router-dom';
import { ROUTE } from '@/common/constants/route';
import { BookmarksTag, FilledStar } from '@/assets/images/svgs';
import { usePostBookmarks } from '../../queries';
import { CATEGORY_OPTIONS } from '../../constants/categoryBar';

interface ContentProps {
  place: MapPlace | null;
  isCard: boolean;
}

function Content({ place, isCard }: ContentProps) {
  const navigate = useNavigate();
  const [isLiked, setIsLiked] = useState<Boolean>(false);
  const { mutate } = usePostBookmarks();

  const handleLikeClick = async (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.stopPropagation();
    mutate(place!.placeId);
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
              <S.PlaceCategory>
                {
                  CATEGORY_OPTIONS?.find((option) =>
                    option.value === place?.category ? place?.category : 'ETC',
                  )?.label
                }
              </S.PlaceCategory>
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
            {/** @Todo 장소 데이터에 isBookmarked 속성 추가되면 해당 코드 삭제 */}
            <S.IconWrapper onClick={handleLikeClick}>
              <BookmarksTag width={26} height={26}/>
            </S.IconWrapper>
            {/** @Todo 장소 데이터에 isBookmarked 속성 추가되면 해당 코드 주석 해제 */}
            {/* {isLiked ? (
              <S.IconWrapper onClick={handleLikeClick}>
                <IoHeartSharp size={24} color="#FF4E3E" />
              </S.IconWrapper>
            ) : (
              <S.IconWrapper onClick={handleLikeClick}>
                <IoHeartSharp size={24} color="#a0a0a0c6" />
              </S.IconWrapper>
            )} */}
          </S.Like>
        </S.ImageWrapper>
      </S.Container>
    </S.Wrapper>
  );
}

export default Content;
