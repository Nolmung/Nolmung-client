import S from './index.styles';

function Mypage() {
  return (
    <S.Wrapper>
      <S.ProfileWrapper>
        <S.MyProfileCard>
          {/** @Todo userInfo */}
        </S.MyProfileCard>
        <S.PetProfileWrapper>
          {/** @Todo petInfo map 돌기, 펫 카드 프로필 따로 분리하여 관리하기 */}
        <S.PetProfileCard></S.PetProfileCard>
        </S.PetProfileWrapper>
      </S.ProfileWrapper>
      {/** @Todo 목록 버튼 컴포넌트 구현 */}
      {/** @Todo 로그아웃 버튼 컴포넌트 구현 */}
    </S.Wrapper>
  )
}

export default Mypage;