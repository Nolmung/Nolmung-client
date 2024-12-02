import S from '../styles/SearchResultCard.style';

interface SearchResultCardProps {
  place_name: string;
  road_address: string;
}

function SearchResultCard({ place_name, road_address }: SearchResultCardProps) {
  return (
    <S.Wrapper>
      <S.IconWrapper />
      <S.ResultWrapper>
        <S.PlaceName>{place_name}</S.PlaceName>
        <S.Address>{road_address}</S.Address>
      </S.ResultWrapper>
    </S.Wrapper>
  );
}

export default SearchResultCard;
