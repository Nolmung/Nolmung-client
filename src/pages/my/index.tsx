import S from './index.styles';
import kakaoIcon from '@/assets/images/pngs/kakao_icon_image.png';
import {
  HeartIcon,
  KakaoChannelIcon,
  LogoutIcon,
  NoticeIcon,
  ReviewListIcon,
  UserEditIcon,
} from '@/assets/images/svgs';
import { useNavigate } from 'react-router-dom';
import { ROUTE } from '@/common/constants/route';
import useSetDocumentTitle from '@/common/hooks/useSetDocumentTitle';
import { useGetDogsList, useGetUser } from './hooks';
import PetProfileCard from './components/profile';
import { LoadingSpinnerLottie } from '@/common/components/lottie';
import ReactGA from 'react-ga4';

function Mypage() {
  useSetDocumentTitle('마이페이지');

  const navigate = useNavigate();
  const navigateToMyReview = () => {
    navigate(ROUTE.MY_REVIEW());
  };

  const { data: userData, isLoading: userLoading } = useGetUser();
  const { data: dogData } = useGetDogsList();
  if (userLoading) {
    return <LoadingSpinnerLottie />;
  }
  const navigateToEditPage = () => {
    ReactGA.event({
      category: 'User',
      action: 'Navigate to Edit Profile',
      label: 'User clicked on Edit Profile button',
    });
    navigate('/useredit', { state: { userId: userData?.userId } });
  };
  const handleResearchClick = () => {
    ReactGA.event({
      category: 'User',
      action: 'Click Survey',
      label: 'User clicked on Survey link',
    });
    window.open(
      'https://docs.google.com/forms/d/e/1FAIpQLSc1KVR_ZgzuEIcGN6OffKmN4OeQqkMH5Iq91fzvyB-F9R_yFQ/viewform?usp=sharing',
      '_blank',
    );
  };

  const handleLoginClick = () => {
    ReactGA.event({
      category: 'User',
      action: 'Logout',
      label: 'User clicked on Logout button',
    });
    localStorage.removeItem('accessToken');
    navigate(ROUTE.LOGIN());
  };

  const handleChannelClick = () => {
    ReactGA.event({
      category: 'User',
      action: 'Click Kakao Channel',
      label: 'User clicked on Kakao Channel link',
    });
    window.open('http://pf.kakao.com/_iMxbdn');
  };

  return (
    <S.Wrapper>
      <S.ProfileWrapper>
        <S.MyProfileCard>
          {userData && (
            <>
              <S.ProfileImg
                width={50}
                height={50}
                src={userData.userProfileImage}
              />
              <S.ProfileTextWrapper>
                <S.NameWrapper>
                  <S.ProfileName>{userData.userNickname}</S.ProfileName>
                  <UserEditIcon
                    width={20}
                    height={20}
                    style={{ cursor: 'pointer' }}
                    onClick={navigateToEditPage}
                  />
                </S.NameWrapper>
                <S.ProfileEmailWrapper>
                  <S.KaKaoIconImg src={kakaoIcon} />
                  <S.ProfileEmail>{userData.userEmail}</S.ProfileEmail>
                </S.ProfileEmailWrapper>
              </S.ProfileTextWrapper>
            </>
          )}
        </S.MyProfileCard>
        <S.PetProfileWrapper>
          <S.PetProfilePlusButton
            onClick={() => {
              navigate(ROUTE.MY_DOGS(), {
                state: { dogData: dogData, nickname: userData!.userNickname },
              });
            }}
          >
            반려견 전체보기
          </S.PetProfilePlusButton>
          {dogData && dogData.length > 0 ? (
            <PetProfileCard
              data={dogData[0]}
              key={dogData[0].dogId}
              userNickname={userData!.userNickname}
              isFirstDog={true}
            />
          ) : (
            <PetProfileCard />
          )}
        </S.PetProfileWrapper>
      </S.ProfileWrapper>
      <S.ListWrapper>
        <S.ListContainer onClick={() => navigate('/my/favorite')}>
          <HeartIcon width={19} height={19} />
          즐겨찾기 목록
        </S.ListContainer>
        <S.ListContainer onClick={navigateToMyReview}>
          <ReviewListIcon width={19} height={19} />내 리뷰 모아보기
        </S.ListContainer>
        <S.ListContainer onClick={handleResearchClick}>
          <NoticeIcon width={20} height={20} />
          설문
        </S.ListContainer>
        <S.ListContainer onClick={handleChannelClick}>
          <KakaoChannelIcon width={19} height={19} />
          카카오톡 채널
        </S.ListContainer>
        <S.ListContainer onClick={handleLoginClick}>
          <LogoutIcon width={19} height={19} />
          로그아웃
        </S.ListContainer>
      </S.ListWrapper>
    </S.Wrapper>
  );
}

export default Mypage;
