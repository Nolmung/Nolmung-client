import { CATEGORY_OPTIONS } from '@/pages/main/constants/categoryBar';
import S from '../styles/SearchResultCard.style';
import ReviewCard from './ReviewCard';
import { PlaceCategory } from '@/common/types';
import React from 'react';

interface SearchResultCardProps {
  placeName: string;
  roadAddress: string;
  placeId: number;
  category: PlaceCategory;
  keywordReviewVisibleId: number | null;
  setKeywordReviewVisibleId: React.Dispatch<
    React.SetStateAction<number | null>
  >;
  scrollRef: React.RefObject<HTMLDivElement>;
}

function SearchResultCard({
  placeName,
  roadAddress,
  placeId,
  category,
  keywordReviewVisibleId,
  setKeywordReviewVisibleId,
}: SearchResultCardProps) {
  const handleClick = () => {
    if (keywordReviewVisibleId === placeId) {
      setKeywordReviewVisibleId(null);
      return;
    }

    setKeywordReviewVisibleId(placeId);

    /** @Todo 클릭시 해당 메뉴가 최상단으로 오도록 구현 
    const container = scrollRef.current;
    const targetItem = document.getElementById(`item-${place_id}`);

    if (container && targetItem) {
      const targetOffset = targetItem.offsetTop - container.offsetTop;

      container.scrollTo({
        top: targetOffset,
        behavior: 'smooth',
      });
    }
       */
  };

  return (
    <S.Wrapper id={`item-${placeId}`}>
      <S.ResultWrapper
        kewordReviewVisible={keywordReviewVisibleId === placeId}
        onClick={handleClick}
      >
        <S.IconWrapper>
          {CATEGORY_OPTIONS?.find(
            (option) => option.value === category,
          )?.icon &&
            React.createElement(
              CATEGORY_OPTIONS.find(
                (option) => option.value === category,
              )!.icon,
            )}
        </S.IconWrapper>
        <S.ResultText>
          <S.PlaceName>{placeName}</S.PlaceName>
          <S.Address>{roadAddress}</S.Address>
        </S.ResultText>
      </S.ResultWrapper>
      {keywordReviewVisibleId === placeId && (
        <ReviewCard
          roadAddress={roadAddress}
          placeName={placeName}
          setKeywordReviewVisibleId={setKeywordReviewVisibleId}
          placeId={placeId}
          category={category}
        />
      )}
    </S.Wrapper>
  );
}

export default SearchResultCard;
