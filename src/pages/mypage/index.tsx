import S from './index.styles';
import { userData } from '@/mocks/data/userData';
import { dogData } from '@/mocks/data/dogData';
import kakaoIcon from '@/assets/images/pngs/kakao_icon_image.png';
import PetProfile from './components/profile';
import { HeartIcon, LogoutIcon, NoticeIcon, ReviewListIcon, UserEditIcon } from '@/assets/images/svgs';
import { useState } from 'react';

function Mypage() {
  const [editId, setEditId] = useState<number>(0);

  return (
    <S.Wrapper>
      <S.ProfileWrapper>
        <S.MyProfileCard>
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
        </S.MyProfileCard>
        <S.PetProfileWrapper>
          {dogData.length &&
            dogData.map((data) => (
              <PetProfile
                isActive={data.dogId === editId}
                data={data}
                editId={editId}
                setEditId={setEditId}
              />
            ))}
        </S.PetProfileWrapper>
      </S.ProfileWrapper>
      <S.ListWrapper>
        <S.ListContainer>
          <HeartIcon width={19} height={19} />
          즐겨찾기 목록
        </S.ListContainer>
        <S.ListContainer>
          <NoticeIcon width={22} height={22} />
          공지사항
        </S.ListContainer>
        <S.ListContainer>
          <ReviewListIcon width={19} height={19} />
          내 리뷰 모아보기
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
