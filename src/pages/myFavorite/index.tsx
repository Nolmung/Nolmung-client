import { Bookmark, BookmarkCategory } from '@/common/types';
import S from './styles/index.styles';
import { useEffect, useState } from 'react';
import { IoHeartSharp } from 'react-icons/io5';
import { BookmarkCategoryMapping } from './constants/bookmarksCategoryMapping';
import { useNavigate } from 'react-router-dom';
import { ROUTE } from '@/common/constants/route';
import { FilledStar } from '@/assets/images/svgs';
import { useGetBookmarks, useDeleteBookmarks } from './hooks';
import { NoResultStandUI } from '@/common/components/noResultUI';
import ReactGA from 'react-ga4';

function MyFavorite() {
  const [currentCategory, setCurrentCategory] =
    useState<BookmarkCategory>('ALL');

  const navigate = useNavigate();
  const { data: placeMap } = useGetBookmarks(currentCategory);
  const { mutate: deleteBookmarks } = useDeleteBookmarks();

  const handleCategoryClick = (value: BookmarkCategory) => {
    ReactGA.event({
      category: 'MyFavorite',
      action: 'Click Favorite Category',
      label: `User clicked on category: ${value}`,
    });
    navigate(ROUTE.MYFAVORITE() + `?mycategory=${value}`);
  };

  const handleLikeClick = async (
    e: React.MouseEvent<HTMLElement, MouseEvent>,
    id: number,
  ) => {
    e.stopPropagation();
    ReactGA.event({
      category: 'MyFavorite',
      action: 'Remove Bookmark',
      label: `User removed bookmark for place ID: ${id}`,
    });
    deleteBookmarks(id);
  };

  const navigateToDetail = (placeId: number) => {
    ReactGA.event({
      category: 'MyFavorite',
      action: 'Click Favorite Place',
      label: `User clicked on favorite place with ID: ${placeId}`,
    });
    navigate(ROUTE.DETAIL(placeId));
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const category = searchParams.get('mycategory');
    if (category) {
      setCurrentCategory(category as BookmarkCategory);
    }
  }, [location.search]);

  return (
    <S.Wrapper>
      <S.CategoryWrapper>
        {BookmarkCategoryMapping.map((category) => (
          <S.CategoryContainer
            key={category.value}
            isActive={currentCategory === category.value}
            onClick={() => handleCategoryClick(category.value)}
          >
            {category.label}
          </S.CategoryContainer>
        ))}
      </S.CategoryWrapper>
      <S.PlaceWrapper>
        {!placeMap?.length && (
          <NoResultStandUI
            content="즐겨찾기한 장소가 없습니다
            "
          />
        )}

        {placeMap &&
          placeMap.map((place: Bookmark) => (
            <S.PlaceCard
              onClick={() => navigateToDetail(place.placeId)}
              key={place.placeId}
            >
              <S.ImageWrapper>
                <S.PlaceImage src={place.placeImageUrl} alt={place.name} />
                <S.Like onClick={(e) => handleLikeClick(e, place.placeId)}>
                  <IoHeartSharp size={24} color="#FF4E3E" />
                </S.Like>
              </S.ImageWrapper>
              <S.PlaceInfo>
                <S.PlaceLocation>{place.roadAddress}</S.PlaceLocation>
                <S.PlaceName>{place.name}</S.PlaceName>
                <S.ReviewWrapper>
                  <FilledStar width={14} height={14} />
                  <S.StarRating>{place.ratingAvg}</S.StarRating>
                  <S.ReviewCount>리뷰 {place.ratingCount}</S.ReviewCount>
                </S.ReviewWrapper>
              </S.PlaceInfo>
            </S.PlaceCard>
          ))}
      </S.PlaceWrapper>
    </S.Wrapper>
  );
}

export default MyFavorite;
