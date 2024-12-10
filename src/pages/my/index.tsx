import S from './index.styles';
import kakaoIcon from '@/assets/images/pngs/kakao_icon_image.png';
import {
  HeartIcon,
  LogoutIcon,
  NoticeIcon,
  ReviewListIcon,
  UserEditIcon,
} from '@/assets/images/svgs';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTE } from '@/common/constants/route';
import useSetDocumentTitle from '@/common/hooks/useSetDocumentTitle';
import { useGetDogsList, useGetUser } from './hooks';
import PetProfileCard from './components/profile';

function Mypage() {
  useSetDocumentTitle('마이페이지');

  const [editId, setEditId] = useState<number>(0);
  const navigate = useNavigate();
  const navigateToMyReview = () => {
    navigate(ROUTE.MY_REVIEW());
  };

  const { data: userData } = useGetUser();
  const { data: dogData } = useGetDogsList();

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
                  <UserEditIcon width={15} height={15} />
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
          {dogData && dogData.length > 0 ? (
            dogData.map((data) => (
              <PetProfileCard
                data={data}
                editId={editId}
                setEditId={setEditId}
                key={data.dogId}
              />
            ))
          ) : (
            <PetProfileCard editId={editId} setEditId={setEditId} />
          )}
        </S.PetProfileWrapper>
      </S.ProfileWrapper>
      <S.ListWrapper>
        <S.ListContainer onClick={() => navigate('/my/favorite')}>
          <HeartIcon width={19} height={19} />
          즐겨찾기 목록
        </S.ListContainer>
        <S.ListContainer>
          <NoticeIcon width={20} height={20} />
          공지사항
        </S.ListContainer>
        <S.ListContainer onClick={navigateToMyReview}>
          <ReviewListIcon width={19} height={19} />내 리뷰 모아보기
        </S.ListContainer>
        <S.ListContainer>
          <LogoutIcon width={19} height={19} />
          로그아웃
        </S.ListContainer>
      </S.ListWrapper>
    </S.Wrapper>
  );
}

export default Mypage;
