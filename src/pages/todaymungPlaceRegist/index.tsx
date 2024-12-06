import SearchInput from '@/common/components/searchInput';
import S from './styles/index.style';
import { useRef, useState } from 'react';
import { placeMap } from '@/mocks/data/placeMap';
import SearchResultCard from './components/SearchResultCard';
import { useReviewStore } from './stores/reviewStore';
import VisitedPlaceCard from '../todaymungWrite/components/VisitedPlaceCard';
import { CancelIcon } from '@/assets/images/svgs';
import useSetDocumentTitle from '@/common/hooks/useSetDocumentTitle';

function TodayMungPlaceRegist() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [keywordReviewVisibleId, setKeywordReviewVisibleId] = useState<
    number | null
  >(null);

  useSetDocumentTitle('오늘멍 장소 등록');

  const handleSearch = () => {
    console.log('REF', inputRef?.current?.value);
  };
  const { reviewlist, deleteReview } = useReviewStore();
  const scrollRef = useRef<HTMLDivElement>(null);
  const handleDeleteButtonClick = (placeId: number) => {
    deleteReview(placeId);
  };
  return (
    <S.Wrapper
      addPadding={reviewlist.length > 0}
      ref={scrollRef}
      className="scroll-container"
    >
      <S.SearchInputWrapper>
        <SearchInput
          inputRef={inputRef}
          autofocus={true}
          onClick={handleSearch}
        />
      </S.SearchInputWrapper>
      {placeMap.map((place) => (
        <SearchResultCard
          scrollRef={scrollRef}
          keywordReviewVisibleId={keywordReviewVisibleId}
          setKeywordReviewVisibleId={setKeywordReviewVisibleId}
          key={place.place_id}
          place_category={place.category}
          place_id={place.place_id}
          place_name={place.place_name}
          road_address={place.road_address}
        />
      ))}
      <S.VisitedPlaceCard>
        {reviewlist.map((review) => (
          <S.CardWrapper>
            <S.IconWrapper
              onClick={() => handleDeleteButtonClick(review.placeId)}
            >
              <CancelIcon width={10} />
            </S.IconWrapper>
            <VisitedPlaceCard
              key={review.placeId}
              place_name={review.placeName}
              road_address={review.roadAddress}
              my_rate={review.rating}
            />
          </S.CardWrapper>
        ))}
      </S.VisitedPlaceCard>
    </S.Wrapper>
  );
}

export default TodayMungPlaceRegist;
