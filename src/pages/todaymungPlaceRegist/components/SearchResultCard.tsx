import S from '../styles/SearchResultCard.style';
import ReviewCard from './ReviewCard';
import { PlaceCategory } from '@/common/types';

interface SearchResultCardProps {
  place_name: string;
  road_address: string;
  place_id: number;
  place_category: PlaceCategory;
  keywordReviewVisibleId: number | null;
  setKeywordReviewVisibleId: React.Dispatch<
    React.SetStateAction<number | null>
  >;
  scrollRef: React.RefObject<HTMLDivElement>;
}

function SearchResultCard({
  place_name,
  road_address,
  place_id,
  place_category,
  keywordReviewVisibleId,
  setKeywordReviewVisibleId,
}: SearchResultCardProps) {
  const handleClick = () => {
    if (keywordReviewVisibleId === place_id) {
      setKeywordReviewVisibleId(null);
      return;
    }

    setKeywordReviewVisibleId(place_id);

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
    <S.Wrapper id={`item-${place_id}`}>
      <S.ResultWrapper
        kewordReviewVisible={keywordReviewVisibleId === place_id}
        onClick={handleClick}
      >
        <S.IconWrapper />
        <S.ResultText>
          <S.PlaceName>{place_name}</S.PlaceName>
          <S.Address>{road_address}</S.Address>
        </S.ResultText>
      </S.ResultWrapper>
      {keywordReviewVisibleId === place_id && (
        <ReviewCard
          roadAddress={road_address}
          placeName={place_name}
          setKeywordReviewVisibleId={setKeywordReviewVisibleId}
          placeId={place_id}
          category={place_category}
        />
      )}
    </S.Wrapper>
  );
}

export default SearchResultCard;
