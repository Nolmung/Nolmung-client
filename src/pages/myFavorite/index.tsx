import { PlaceCategory } from '@/common/types';
import S from './styles/index.styles';
import { useState } from 'react';
import { placeMap } from '@/mocks/data/placeMap';
import { IoHeartSharp } from 'react-icons/io5';
import { PlaceCategoryMapping } from './constants/placeCategoryMapping';
import { useNavigate } from 'react-router-dom';
import { ROUTE } from '@/common/constants/route';
import { FilledStar } from '@/assets/images/svgs';

function MyFavorite() {
  const [currentCategory, setCurrentCategory] =
    useState<PlaceCategory>('RESTAURANT');
  const [isLikedId, setIsLikedId] = useState<number>(0);

  const navigate = useNavigate();

  const parsedAddress = (address: string) => {
    const parsed = address.split(' ').slice(0, 2).join(' ');
    return parsed;
  };
  const handleCategoryClick = (value: PlaceCategory) => {
    setCurrentCategory(value);
  };

  {
    /** @Todo API 부착 시, 해당 장소의 즐겨찾기 여부를 토글하도록 변경 */
  }
  const handleLikeClick = (id: number) => {
    if (isLikedId === id) {
      setIsLikedId(0);
    } else {
      setIsLikedId(id);
    }
  };

  const navigateToDetail = (placeId: number) => {
    navigate(ROUTE.DETAIL(placeId));
  };

  return (
    <S.Wrapper>
      <S.CategoryWrapper>
        {PlaceCategoryMapping.map((category) => (
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
        {placeMap
          .filter((place) => currentCategory === place.category) // 조건에 맞는 항목 필터링
          .map((place) => (
            <S.PlaceCard
              onClick={() => navigateToDetail(place.placeId)}
              key={place.placeId}
            >
              <S.ImageWrapper>
                <S.PlaceImage src={place.placeImgUrl} alt={place.placeName} />
                {place.placeId === isLikedId ? (
                  <S.Like onClick={() => handleLikeClick(place.placeId)}>
                    <IoHeartSharp size={24} color="#FF4E3E" />
                  </S.Like>
                ) : (
                  <S.Like onClick={() => handleLikeClick(place.placeId)}>
                    <IoHeartSharp size={24} color="#FFFFFF" />
                  </S.Like>
                )}
              </S.ImageWrapper>
              <S.PlaceInfo>
                <S.PlaceLocation>
                  {parsedAddress(place.roadAddress)}
                </S.PlaceLocation>
                <S.PlaceName>{place.placeName}</S.PlaceName>
                <S.ReviewWrapper>
                  <FilledStar width={14} height={14} />
                  <S.StarRating>{place.starRatingAvg}</S.StarRating>
                  <S.ReviewCount>리뷰 {place.reviewCount}</S.ReviewCount>
                </S.ReviewWrapper>
              </S.PlaceInfo>
            </S.PlaceCard>
          ))}
      </S.PlaceWrapper>
    </S.Wrapper>
  );
}

export default MyFavorite;
