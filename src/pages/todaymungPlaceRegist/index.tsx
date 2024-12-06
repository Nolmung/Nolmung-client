import SearchInput from '@/common/components/searchInput';
import S from './styles/index.style';
import { useRef, useState } from 'react';
import SearchResultCard from './components/SearchResultCard';
import { useReviewStore } from './stores/reviewStore';
import VisitedPlaceCard from '../todaymungWrite/components/VisitedPlaceCard';
import { CancelIcon } from '@/assets/images/svgs';
import useSetDocumentTitle from '@/common/hooks/useSetDocumentTitle';
import { useGetPlaceSearch } from './queries';

function TodayMungPlaceRegist() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [keywordReviewVisibleId, setKeywordReviewVisibleId] = useState<
    number | null
  >(null);

  useSetDocumentTitle('오늘멍 장소 등록');

  const [searchKeyword, setSearchKeyword] = useState('');
  const { data, isLoading, error } = useGetPlaceSearch(searchKeyword);

  const handleSearch = () => {
    const keyword = inputRef?.current?.value;
    setSearchKeyword(keyword || '');
  };

  const { reviewlist, deleteReview } = useReviewStore();
  const scrollRef = useRef<HTMLDivElement>(null);
  const handleDeleteButtonClick = (placeId: number) => {
    deleteReview(placeId);
  };

  if (isLoading) return <div>로딩중...</div>;
  if (error) return <div>에러 발생</div>;

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
      {data?.map((place) => (
        <SearchResultCard
          scrollRef={scrollRef}
          keywordReviewVisibleId={keywordReviewVisibleId}
          setKeywordReviewVisibleId={setKeywordReviewVisibleId}
          key={place.placeId}
          placeCategory={place.category}
          placeId={place.placeId}
          placeName={place.placeName}
          roadAddress={place.roadAddress}
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
              placeName={review.placeName}
              roadAddress={review.roadAddress}
              rating={review.rating}
            />
          </S.CardWrapper>
        ))}
      </S.VisitedPlaceCard>
    </S.Wrapper>
  );
}

export default TodayMungPlaceRegist;
