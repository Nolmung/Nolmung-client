import { useState } from 'react';
import S from '../styles/SearchResultCard.style';
import ReviewCard from './ReviewCard';
import { PlaceCategory } from '@/common/types';

interface SearchResultCardProps {
  place_name: string;
  road_address: string;
  place_id: number;
  place_category: PlaceCategory;
}

function SearchResultCard({
  place_name,
  road_address,
  place_id,
  place_category,
}: SearchResultCardProps) {
  const [kewordReviewVisible, setKeywordReviewVisible] = useState(false);
  const handleClick = () => {
    setKeywordReviewVisible(!kewordReviewVisible);
  };
  return (
    <S.Wrapper>
      <S.ResultWrapper
        kewordReviewVisible={kewordReviewVisible}
        onClick={handleClick}
      >
        <S.IconWrapper />
        <S.ResultText>
          <S.PlaceName>{place_name}</S.PlaceName>
          <S.Address>{road_address}</S.Address>
        </S.ResultText>
      </S.ResultWrapper>
      {kewordReviewVisible && (
        <ReviewCard
          placeName={place_name}
          setKeywordReviewVisible={setKeywordReviewVisible}
          placeId={place_id}
          category={place_category}
        />
      )}
    </S.Wrapper>
  );
}

export default SearchResultCard;
