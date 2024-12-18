import { MapPlace } from '@/service/apis/place/index.type';
import S from '../styles/RecommendCard.style';
import { useNavigate } from 'react-router-dom';
import { ROUTE } from '@common/constants/route';
import ReactGA from 'react-ga4';
import { CATEGORY_OPTIONS } from '@pages/main/constants/categoryBar';
import Imgix from 'react-imgix';

interface RecommendCardProps {
  title: string;
  explanation: string;
  data: MapPlace[];
  isBlurred?: boolean;
}

function RecommendCard({
  data,
  title,
  explanation,
  isBlurred,
}: RecommendCardProps) {
  const navigate = useNavigate();
  const navigateToDetail = (placeId: number) => {
    ReactGA.event({
      category: 'User',
      action: 'Recommend Card Clicked',
      label: `User clicked on ${title} card`,
    });
    if (isBlurred) return;
    navigate(ROUTE.DETAIL(placeId));
  };

  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      <S.TitleExplanation>{explanation}</S.TitleExplanation>
      <S.PlaceList>
        {data.map((mock) => {
          return (
            <S.PlaceWrapper
              isBlurred={isBlurred ?? false}
              onClick={() => navigateToDetail(mock.placeId)}
              key={mock.placeId}
            >
              <S.PlaceImage
                src={mock.placeImageUrl}
                loading="lazy"
                alt="장소 이미지"
              />
              <S.NameCategoryWrapper>
                <S.PlaceName>{mock.placeName}</S.PlaceName>
                <S.PlaceAddress>
                  {
                    CATEGORY_OPTIONS?.find(
                      (option) => option.value === (mock?.category || 'ETC'),
                    )?.label
                  }
                </S.PlaceAddress>
              </S.NameCategoryWrapper>
              <S.PlaceExplanation>
                {mock.Address?.split(' ')[0] +
                  ' ' +
                  mock.Address?.split(' ')[1] +
                  ' ' +
                  mock.Address?.split(' ')[2]}
              </S.PlaceExplanation>
            </S.PlaceWrapper>
          );
        })}
      </S.PlaceList>
    </S.Wrapper>
  );
}

export default RecommendCard;
