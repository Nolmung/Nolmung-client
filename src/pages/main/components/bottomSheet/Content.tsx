import { S } from '../../styles/Content.style';
import { IoHeartSharp } from 'react-icons/io5';
import { MapPlace } from '@/service/apis/place/index.type';
import { useNavigate } from 'react-router-dom';
import { ROUTE } from '@/common/constants/route';
import { FilledStar } from '@/assets/images/svgs';
import { usePostBookmarks } from '../../queries';
import { CATEGORY_OPTIONS } from '../../constants/categoryBar';
import { useDeleteBookmarks } from '@/pages/myFavorite/hooks';
import { useEffect, useState } from 'react';
import getIsLogin from '@/common/utils/getIsLogin';
import { ContentSkeletonUI } from '@/common/components/skeleton';
import { useGetPostDetail } from '@/pages/detail/querys';
import { useQueryClient } from '@tanstack/react-query';
import { useLoginPromptModalStore } from '@/stores/useLoginPromptModalStore';

interface ContentProps {
  place: MapPlace;
  isCard: boolean;
}

function Content({ place, isCard }: ContentProps) {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: addBookmarks } = usePostBookmarks();
  const { mutate: deleteBookmarks } = useDeleteBookmarks();
  const [isBookmarked, setIsBookmarked] = useState<boolean>(
    place?.isBookmarked ?? false,
  );

  const { data: postDetail, refetch: refetchPostDetail } = useGetPostDetail(
    place.placeId,
  );
  const { open } = useLoginPromptModalStore();

  useEffect(() => {
    if (postDetail) {
      setIsBookmarked(postDetail.isBookmarked!);
    }
  }, [postDetail]);

  const isLoggedIn = getIsLogin();

  const handleLikeClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.stopPropagation();

    if (!isLoggedIn) {
      open();
      return;
    }

    if (isBookmarked) {
      deleteBookmarks(place!.placeId, {
        onSuccess: (data) => {
          if (data.status === 'SUCCESS') {
            queryClient.invalidateQueries({
              queryKey: ['postDetail'],
              placeId: place.placeId,
            });
            refetchPostDetail();
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
            queryClient.invalidateQueries({
              queryKey: ['postDetail'],
              placeId: place.placeId,
            });
            refetchPostDetail();
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

  if (place?.isBookmarked === undefined || !place) {
    return <ContentSkeletonUI />;
  }

  return (
    place?.isBookmarked !== undefined && (
      <S.Wrapper isCard={isCard} onClick={navigateToDetail}>
        <S.Container>
          <S.PlaceInfoWrapper>
            <S.InfoTextWrapper>
              <S.PlaceNameCategoryWrapper>
                <S.PlaceName>{place!.placeName}</S.PlaceName>
                <S.PlaceCategory>
                  {
                    CATEGORY_OPTIONS?.find(
                      (option) => option.value === (place?.category || 'ETC'),
                    )?.label
                  }
                </S.PlaceCategory>
              </S.PlaceNameCategoryWrapper>
              <S.PlaceAddress>{place!.roadAddress}</S.PlaceAddress>
              <S.PlaceReviewWrapper>
                <S.TextWrapper>
                  <FilledStar width={14} height={14} />
                  {postDetail?.starRatingAvg}
                </S.TextWrapper>
                <S.PlaceReviewCount>
                  리뷰 {postDetail?.reviewCount}개
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
                  color={isBookmarked ? '#FF4E3E' : '#a0a0a0c6'}
                />
              </S.IconWrapper>
            </S.Like>
          </S.ImageWrapper>
        </S.Container>
      </S.Wrapper>
    )
  );
}

export default Content;
