import { S } from '../../styles/Content.style';
import { IoHeartSharp } from 'react-icons/io5';
import { MapPlace } from '@/service/apis/place/index.type';
import { useNavigate } from 'react-router-dom';
import { ROUTE } from '@/common/constants/route';
import { FilledStar } from '@/assets/images/svgs';
import { usePostBookmarks } from '../../queries';
import { CATEGORY_OPTIONS } from '../../constants/categoryBar';
import { useDeleteBookmarks } from '@/pages/myFavorite/hooks';

interface ContentProps {
  place: MapPlace | null;
  isCard: boolean;
}

function Content({ place, isCard }: ContentProps) {
  const navigate = useNavigate();
  const { mutate: addBookmarks } = usePostBookmarks();
  const { mutate: deleteBookmarks } = useDeleteBookmarks();

  const handleLikeClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.stopPropagation();

    if (place?.isBookmarked) {
      deleteBookmarks(place!.placeId, {
        onSuccess: (data) => {
          if (data.status === 'SUCCESS') {
            if (place) place.isBookmarked = false;
          }
        },
        onError: (error) => {
          console.error('Failed to delete bookmark:', error);
        },
      });
    } else {
      addBookmarks(place!.placeId, {
        onSuccess: (data) => {
          if (data.status === 'SUCCESS') {
            if (place) place.isBookmarked = true;
          }
        },
        onError: (error) => {
          console.error('Failed to add bookmark:', error);
        },
      });
    }
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
            <S.IconWrapper onClick={handleLikeClick}>
              <IoHeartSharp
                size={24}
                color={place!.isBookmarked ? '#FF4E3E' : '#a0a0a0c6'}
              />
            </S.IconWrapper>
          </S.Like>
        </S.ImageWrapper>
      </S.Container>
    </S.Wrapper>
  );
}

export default Content;
