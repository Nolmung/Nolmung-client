import { LiedownDog, TodayMungNoListIcon } from '@/assets/images/svgs';
import SearchResultCard from './SearchResultCard';
import { PlaceSearchResponse } from '@/service/apis/place/index.type';
import S from '../styles/SearchList.style';

interface SearchListProps {
  data: PlaceSearchResponse[];
  searchParams: string;
  scrollRef: React.RefObject<HTMLDivElement>;
  keywordReviewVisibleId: number | null;
  setKeywordReviewVisibleId: React.Dispatch<
    React.SetStateAction<number | null>
  >;
}

function SearchList({
  data,
  scrollRef,
  keywordReviewVisibleId,
  setKeywordReviewVisibleId,
}: SearchListProps) {
  return (
    <>
      {data && data.length > 0 ? (
        data.map((place) => (
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
        ))
      ) : (
        <S.NoResultWrapper>
          <TodayMungNoListIcon />
          <S.NoResultSubText>검색 결과가 없다 멍 !</S.NoResultSubText>
        </S.NoResultWrapper>
      )}
    </>
  );
}

export default SearchList;
