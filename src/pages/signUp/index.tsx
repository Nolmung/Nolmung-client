import { S } from './styles/signUp.styles';

function SignUp() {
  return (
    <>
      <S.ContainerWrapper>
        <S.UserTitle>
          안녕하세요,
          <br />
          견주님에 대해 알려주세요
        </S.UserTitle>
        <S.DescriptionText>
          개인정보는 견주님과 반려견을 위한 장소 추천 서비스에 활용됩니다
        </S.DescriptionText>
        <S.ContentTitleText>닉네임</S.ContentTitleText>
        <S.UserInfoInput></S.UserInfoInput>
        <S.ContentTitleText>주소</S.ContentTitleText>
        <S.UserInfoInput></S.UserInfoInput>
        <S.ContentTitleText>연령</S.ContentTitleText>
        <S.AgeChoiceContainer>
          <S.AgeFlex>
            <S.AgeChoice>10</S.AgeChoice>
            <S.AgeChoiceText>10대</S.AgeChoiceText>
          </S.AgeFlex>
          <S.AgeFlex>
            <S.AgeChoice>20</S.AgeChoice>
            <S.AgeChoiceText>20대</S.AgeChoiceText>
          </S.AgeFlex>
          <S.AgeFlex>
            <S.AgeChoice>30</S.AgeChoice>
            <S.AgeChoiceText>30대</S.AgeChoiceText>
          </S.AgeFlex>
        </S.AgeChoiceContainer>
        <S.AgeChoiceContainer>
          <S.AgeFlex>
            <S.AgeChoice>40</S.AgeChoice>
            <S.AgeChoiceText>40대</S.AgeChoiceText>
          </S.AgeFlex>
          <S.AgeFlex>
            <S.AgeChoice>50</S.AgeChoice>
            <S.AgeChoiceText>50대 이상</S.AgeChoiceText>
          </S.AgeFlex>
        </S.AgeChoiceContainer>
        <S.NextButton>반려견 등록으로 넘어가기</S.NextButton>
      </S.ContainerWrapper>
    </>
  );
}

export default SignUp;
