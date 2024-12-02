import { useState } from 'react';
import S from '../styles/SearchResultCard.style';
import ReviewCard from './ReviewCard';

interface SearchResultCardProps {
  place_name: string;
  road_address: string;
}

function SearchResultCard({ place_name, road_address }: SearchResultCardProps) {
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
      {kewordReviewVisible && <ReviewCard category={'CAFE'} />}
    </S.Wrapper>
  );
}

export default SearchResultCard;
