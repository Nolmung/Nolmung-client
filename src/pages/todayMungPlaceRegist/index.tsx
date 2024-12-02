import SearchInput from '@/common/components/searchInput';
import S from './styles/index.style';
import { useRef } from 'react';
import { placeMap } from '@/mocks/data/placeMap';
import SearchResultCard from './components/searchResultCard';

function TodayMungPlaceRegist() {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleSearch = () => {
    console.log('REF', inputRef?.current?.value);
  };

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
          place_name={place.place_name}
          road_address={place.road_address}
        />
      ))}
    </S.Wrapper>
  );
}

export default TodayMungPlaceRegist;
