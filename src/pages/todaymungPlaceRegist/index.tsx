import SearchInput from '@/common/components/searchInput';
import S from './styles/index.style';
import { useRef, useState } from 'react';
import { useReviewStore } from './stores/reviewStore';
import VisitedPlaceCard from '../todaymungWrite/components/VisitedPlaceCard';
import { CancelIcon } from '@/assets/images/svgs';
import useSetDocumentTitle from '@/common/hooks/useSetDocumentTitle';
import { useGetPlaceSearch } from './queries';
import { useLocation, useNavigate } from 'react-router-dom';
import { ROUTE } from '@/common/constants/route';
import SearchList from './components/SearchList';

function TodayMungPlaceRegist() {
  useSetDocumentTitle('오늘멍 장소 등록');

  const location = useLocation();
  const navigate = useNavigate();

  const searchParams = new URLSearchParams(location.search).get('search') || ''; // URL에서 search 파라미터 읽기

  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const [keywordReviewVisibleId, setKeywordReviewVisibleId] = useState<
    number | null
  >(null);
  const [searchKeyword, setSearchKeyword] = useState<string>(searchParams);

  const { data, isLoading, error } = useGetPlaceSearch(searchParams);
  const { reviewlist, deleteReview } = useReviewStore();

  const handleSearch = () => {
    if (!inputRef?.current?.value.trim()) return;

    setSearchKeyword(inputRef?.current?.value.trim());
    navigate(
      ROUTE.TODAYMUNG_PLACE_REGIST() +
        '?search=' +
        inputRef?.current?.value.trim(),
    );
  };

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
          value={searchKeyword}
          onChange={(e) => setSearchKeyword(e.target.value)}
          inputRef={inputRef}
          autofocus={true}
          onClick={handleSearch}
        />
      </S.SearchInputWrapper>
      <SearchList
      searchParams={searchParams}
        data={data || []}
        scrollRef={scrollRef}
        keywordReviewVisibleId={keywordReviewVisibleId}
        setKeywordReviewVisibleId={setKeywordReviewVisibleId}
      />
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
