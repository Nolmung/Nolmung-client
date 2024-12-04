import { PlaceCategory } from '@/common/types';
import S from './index.styles';
import { useState } from 'react';
import { placeMap } from '@/mocks/data/placeMap';
import { IoHeartSharp } from 'react-icons/io5';
import { IoHeartOutline } from 'react-icons/io5';
import { StarIcon } from '@/assets/images/svgs';
import { PlaceCategoryMapping } from './constants/placeCategoryMapping';

function MyFavorite() {
  const [value, setValue] = useState<PlaceCategory>('RESTAURANT');
  const [isLikedId, setIsLikedId] = useState<number>(0);
  const parsedAddress = (address: string) => {
    const parsed = address.split(' ').slice(0, 2).join(' ');
    return parsed;
  }
  const handleCategoryClick = (value: PlaceCategory) => {
    setValue(value);
  };

  {/** @Todo API 부착 시, 해당 장소의 즐겨찾기 여부를 토글하도록 변경 */}
  const handleLikeClick = (id: number) => {
    if (isLikedId === id) {
      setIsLikedId(0);
    } else {
      setIsLikedId(id);
    }
  };

  return (
    <S.Wrapper>
      <S.CategoryWrapper>
        {PlaceCategoryMapping.map((category) => (
          <S.CategoryContainer
            key={category.value}
            isActive={value === category.value}
            onClick={() => handleCategoryClick(category.value)}
          >
            {category.label}
          </S.CategoryContainer>
        ))}
      </S.CategoryWrapper>
      <S.PlaceWrapper>
        {placeMap.map((place) => (
          <S.PlaceCard key={place.place_id}>
            <S.ImageWrapper>
              <S.PlaceImage src={place.place_img_url} alt={place.place_name} />
              {place.place_id === isLikedId ? (
                <S.Like onClick={() => handleLikeClick(place.place_id)}>
                  <IoHeartSharp size={24} color="#FF4E3E" />
                </S.Like>
              ) : (
                <S.Like onClick={() => handleLikeClick(place.place_id)}>
                  <IoHeartOutline size={24} color="#FF4E3E" />
                </S.Like>
              )}
            </S.ImageWrapper>
            <S.PlaceInfo>
              <S.PlaceLocation>{parsedAddress(place.road_address)}</S.PlaceLocation>
              <S.PlaceName>{place.place_name}</S.PlaceName>
              <S.ReviewWrapper>
                <StarIcon width={14} height={14}/>
                <S.StarRating>{place.star_rating_avg}</S.StarRating>
                <S.ReviewCount>리뷰 {place.review_count}</S.ReviewCount>
              </S.ReviewWrapper>
            </S.PlaceInfo>
          </S.PlaceCard>
        ))}
      </S.PlaceWrapper>
    </S.Wrapper>
  );
}

export default MyFavorite;
