import SearchInput from '@/common/components/searchInput';
import S from './styles/index.style';
import { useRef } from 'react';
import { placeMap } from '@/mocks/data/placeMap';
import SearchResultCard from './components/SearchResultCard';
import { useReviewStore } from './stores/reviewStore';

function TodayMungPlaceRegist() {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleSearch = () => {
    console.log('REF', inputRef?.current?.value);
  };
  const { reviewlist } = useReviewStore();

  return (
    <S.Wrapper>
      <S.SearchInputWrapper>
        <SearchInput
          inputRef={inputRef}
          autofocus={true}
          onClick={handleSearch}
        />
      </S.SearchInputWrapper>
      {placeMap.map((place) => (
        <SearchResultCard
          key={place.place_id}
          place_category={place.category}
          place_id={place.place_id}
          place_name={place.place_name}
          road_address={place.road_address}
        />
      ))}
      <div
        style={{
          position: 'absolute',
          bottom: '100px',
          height: '100px',
          backgroundColor: 'white',
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        {reviewlist.map((review) => (
          <div key={review.placeId}>
            <div>{review.placeName}</div>
            <div>{review.rating}</div>
            <div>{review.category}</div>
          </div>
        ))}
      </div>
    </S.Wrapper>
  );
}

export default TodayMungPlaceRegist;
