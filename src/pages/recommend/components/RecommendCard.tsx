import { MapPlace } from '@/service/apis/place/index.type';
import S from '../styles/RecommendCard.style';

interface RecommendCardProps {
  title: string;
  explanation: string;
  data: MapPlace[];
}

function RecommendCard({ data, title, explanation }: RecommendCardProps) {
  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      <S.TitleExplanation>{explanation}</S.TitleExplanation>
      <S.PlaceList>
        {data.map((mock) => (
          <S.PlaceWrapper>
            <S.PlaceImage src={mock.place_img_url} alt="장소 이미지" />
            <S.NameAddressWrapper>
              <S.PlaceName>{mock.place_name}</S.PlaceName>
              <S.PlaceAddress>{mock.road_address.split(' ')[1]}</S.PlaceAddress>
            </S.NameAddressWrapper>
            <S.PlaceExplanation>
              MZ 강아지만 출입 가능한 애견 카페
            </S.PlaceExplanation>
          </S.PlaceWrapper>
        ))}
      </S.PlaceList>
    </S.Wrapper>
  );
}

export default RecommendCard;
