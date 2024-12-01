import { S } from './styles/dogs.styles';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function Dogs() {
  const { state } = useLocation();
  const { nickname } = state || {};
  const [size, setSize] = useState<number | null>(null);

  const handleCircleClick = (size: number) => {
    setSize((prev) => (prev === size ? null : size)); // 같은 값 클릭 시 선택 해제
  };

  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // 이전 페이지로 이동
  };
  return (
    <>
      <S.ContainerWrapper>
        <S.UserTitle>
          반가워요,
          <br />
          {nickname}님의 반려견을 등록해주세요
        </S.UserTitle>
        <S.ContentTitleText>이름</S.ContentTitleText>
        <S.UserInfoInput
        //   value={nickname}
        //   onChange={(e) => setNickname(e.target.value)}
        //   placeholder="닉네임을 입력해주세요"
        ></S.UserInfoInput>
        <S.ContentTitleText>나이</S.ContentTitleText>
        <S.UserInfoInput
        //   value={addressProvince}
        //   onChange={(e) => setAddressProvince(e.target.value)}
        //   placeholder="주소를 시 단위로 입력해주세요 ex)서울시"
        ></S.UserInfoInput>
        <S.ContentTitleText>몸무게</S.ContentTitleText>
        <S.AgeChoiceContainer>
          <S.AgeFlex>
            <S.AgeChoice
              isSelected={size === 1}
              onClick={() => handleCircleClick(1)}
            >
              소형
            </S.AgeChoice>
            <S.AgeChoiceText>10kg 미만</S.AgeChoiceText>
          </S.AgeFlex>
          <S.AgeFlex>
            <S.AgeChoice
              isSelected={size === 2}
              onClick={() => handleCircleClick(2)}
            >
              중형
            </S.AgeChoice>
            <S.AgeChoiceText>10kg - 25kg 미만</S.AgeChoiceText>
          </S.AgeFlex>
          <S.AgeFlex>
            <S.AgeChoice
              isSelected={size === 3}
              onClick={() => handleCircleClick(3)}
            >
              대형
            </S.AgeChoice>
            <S.AgeChoiceText>25kg 이상</S.AgeChoiceText>
          </S.AgeFlex>
        </S.AgeChoiceContainer>
        <S.NextButton onClick={handleBack}>놀멍 시작하기</S.NextButton>
      </S.ContainerWrapper>
    </>
  );
}

export default Dogs;
