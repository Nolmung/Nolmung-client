import RecommendCard from './RecommendCard';
import S from '../styles/index.style';
import useSetDocumentTitle from '@common/hooks/useSetDocumentTitle';
import { useRecommendBookmarks } from '../queries';
import {
  DogSizeRecommend,
  NearBy,
  PersonalRecommend,
} from '@/mocks/data/recommend';
import { MapPlace } from '@service/apis/place/index.type';
import Button from '@common/components/button/Button';
import { LoadingSkeletonLottie } from '@common/components/lottie';
import { useNavigate } from 'react-router-dom';
import { ROUTE } from '@common/constants/route';
import ReactGA from 'react-ga4';

function GuestRecommend() {
  useSetDocumentTitle('추천');
  const naviagte = useNavigate();
  const {
    data: bookmarks,
    isLoading: bookmarksLoading,
    isError: bookmarkError,
  } = useRecommendBookmarks();

  if (bookmarksLoading) {
    return <LoadingSkeletonLottie />;
  }

  if (bookmarkError) {
    return <div>Error...</div>;
  }

  const handleKakaoLoginButtonClick = () => {
    ReactGA.event({
      category: 'User',
      action: 'Kakao Login Clicked',
      label: 'User clicked Kakao login on the GuestRecommend page',
    });
    naviagte(ROUTE.LOGIN());
  };

  return (
    <S.Wrapper>
      <S.BlurWrapper>
        {bookmarks.length > 0 && (
          <RecommendCard
            title="다른 집사들이 좋아요를 많이 누른 공간"
            explanation="아니 글쎄 ~ 여기가 그렇게 핫플이래~"
            data={bookmarks}
            isBlurred={false}
          />
        )}
        <S.PositionRelative>
          <S.LoginModalWrapper>
            <S.LoginModal>
              <S.LoginModalText>
                지금 가입하고
                <br />
                <S.LoginTextWrapper>
                  <S.LoginEmphasisText>
                    우리 아이만을 위한 추천
                  </S.LoginEmphasisText>
                  을 받아보세요 !
                </S.LoginTextWrapper>
              </S.LoginModalText>
              <Button
                onClick={handleKakaoLoginButtonClick}
                width="80%"
                height="40px"
                borderRadius="32px"
                backgroundColor="#FFEB00"
              >
                카카오로 로그인
              </Button>
            </S.LoginModal>
          </S.LoginModalWrapper>
          <RecommendCard
            title={`우리 아이 취향저격 공간`}
            explanation="반려견의 취향을 분석해 딱 맞는 공간을 추천해드려요."
            data={PersonalRecommend as MapPlace[]}
            isBlurred={true}
          />

          <RecommendCard
            title={`근처 핫 플레이스`}
            explanation="옆집 강아지들은 이미 다 가본데라고?"
            data={NearBy as MapPlace[]}
            isBlurred={true}
          />
          <RecommendCard
            title="우리 아이 친구들이 다 가본 곳"
            explanation="우리 아이들이 갈 수 있는 곳을 추천해드려요"
            data={DogSizeRecommend as MapPlace[]}
            isBlurred={true}
          />
        </S.PositionRelative>
      </S.BlurWrapper>
    </S.Wrapper>
  );
}

export default GuestRecommend;
