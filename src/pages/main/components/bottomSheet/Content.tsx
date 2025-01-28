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
import ReactGA from 'react-ga4';
import { useInView } from 'react-intersection-observer';
interface ContentProps {
  place: MapPlace;
  isCard: boolean;
}

interface LazyImageProps {
  src: string;
  alt: string;
  placeholder: string;
}

const LazyImage = ({ src, alt, placeholder, ...props }: LazyImageProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref}>
      {inView ? (
        <img width={120} height={120} src={src} alt={alt} {...props} />
      ) : (
        <img
          width={120}
          height={120}
          src={placeholder}
          alt="로딩 중"
          aria-label="콘텐츠가 로드되는 동안 보여지는 플레이스홀더 이미지"
          {...props}
        />
      )}
    </div>
  );
};

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
    const action = isBookmarked ? 'remove_bookmark' : 'add_bookmark';

    ReactGA.event({
      category: 'Bookmark',
      action: action,
      label: place.placeName,
    });

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
    ReactGA.event({
      category: 'Navigation',
      action: 'View Place Detail',
      label: place.placeName,
    });
  };

  if (place?.isBookmarked === undefined || !place) {
    return <ContentSkeletonUI />;
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // 페이지 80% 이상 스크롤 시 GA 이벤트 트리거
      if (scrollPosition >= documentHeight * 0.8) {
        ReactGA.event({
          category: 'Scroll',
          action: 'Scrolled 80% of the page',
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    place?.isBookmarked !== undefined && (
      <S.Wrapper
        aria-label={`${place?.placeName}의 상세 페이지로 이동`}
        isCard={isCard}
        onClick={navigateToDetail}
      >
        <S.Container>
          <S.PlaceInfoWrapper>
            <S.InfoTextWrapper>
              <S.PlaceNameCategoryWrapper>
                <S.PlaceName
                  aria-label={`장소명: ${place!.placeName}`}
                  title={place!.placeName}
                >
                  {place!.placeName}
                </S.PlaceName>
                <S.PlaceCategory
                  aria-label={`카테고리: ${
                    CATEGORY_OPTIONS?.find(
                      (option) => option.value === (place?.category || 'ETC'),
                    )?.label || '기타'
                  }`}
                >
                  {
                    CATEGORY_OPTIONS?.find(
                      (option) => option.value === (place?.category || 'ETC'),
                    )?.label
                  }
                </S.PlaceCategory>
              </S.PlaceNameCategoryWrapper>
              <S.PlaceAddress
                aria-label={`주소: ${place!.roadAddress}`}
                title={place!.roadAddress}
              >
                {place!.roadAddress}
              </S.PlaceAddress>
              <S.PlaceReviewWrapper>
                <S.TextWrapper
                  aria-label={`평점 ${postDetail?.starRatingAvg}점`}
                >
                  <FilledStar width={14} height={14} />
                  {postDetail?.starRatingAvg}
                </S.TextWrapper>
                <S.PlaceReviewCount
                  aria-label={`리뷰 ${postDetail?.reviewCount}개`}
                >
                  리뷰 {postDetail?.reviewCount}개
                </S.PlaceReviewCount>
              </S.PlaceReviewWrapper>
            </S.InfoTextWrapper>
          </S.PlaceInfoWrapper>
          <S.ImageWrapper>
            <S.PlaceImage
              as={LazyImage}
              src={place!.placeImgUrl}
              alt={place!.placeName}
              placeholder="/path/to/placeholder.jpg"
              aria-label="장소 이미지"
            />

            <S.Like>
              <S.IconWrapper
                aria-label={isBookmarked ? '북마크에서 제거' : '북마크에 추가'}
                onClick={handleLikeClick}
              >
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
