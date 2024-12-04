import { S } from './styles/signUp.styles';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const locations = [
  '서울특별시',
  '부산시',
  '대구시',
  '인천광역시',
  '광주시',
  '대전시',
  '울산시',
  '세종시',
  '경기도',
  '충청북도',
  '충청남도',
  '전라남도',
  '경상북도',
  '경상남도',
  '강원특별자치도',
  '전북특별자치도',
  '제주특별자치도',
];

function SignUp() {
  const navigate = useNavigate();
  const [nickname, setNickname] = useState('');
  const [addressProvince, setAddressProvince] = useState('');
  const [selectedAge, setSelectedAge] = useState<number | null>(20);
  const [filteredLocations, setFilteredLocations] = useState<string[]>([]);
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isAddressValid, setAddressValid] = useState(true);

  const handleCircleClick = (age: number) => {
    setSelectedAge((prev) => (prev === age ? null : age)); // 같은 값 클릭 시 선택 해제
  };

  const handleNext = () => {
    if (!nickname || !addressProvince || !selectedAge) {
      alert('모든 정보를 입력해주세요!');
      return;
    }
    navigate('/dogs', {
      state: { nickname, addressProvince, selectedAge },
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setAddressProvince(value);

    if (value) {
      const filtered = locations.filter((location) => location.includes(value));
      setFilteredLocations(filtered);
      setDropdownVisible(filtered.length > 0); // 드롭다운 보이기 조건
    } else {
      setFilteredLocations([]);
      setDropdownVisible(false);
    }

    setAddressValid(locations.some((location) => location.includes(value)));
  };

  const handleSuggestionClick = (suggestion: string) => {
    setAddressProvince(suggestion); // 선택한 값으로 입력 필드 업데이트
    setFilteredLocations([]);
    setDropdownVisible(false); // 드롭다운 숨기기
    setAddressValid(true);
  };

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
        <S.UserInfoInput
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          placeholder="닉네임을 입력해주세요"
        ></S.UserInfoInput>
        <S.ContentTitleText>
          주소
          {!isAddressValid && (
            <S.ErrorMessage>*유효한 주소를 입력해주세요</S.ErrorMessage>
          )}
        </S.ContentTitleText>
        <S.UserInfoInput
          value={addressProvince}
          onChange={handleInputChange}
          placeholder="주소를 시,도 단위로 입력해주세요 ex)서울특별시"
          isDropdownVisible={isDropdownVisible}
        />

        {isDropdownVisible && filteredLocations.length > 0 && (
          <S.Dropdown>
            {filteredLocations.map((location) => (
              <S.Suggestion
                key={location}
                onClick={() => handleSuggestionClick(location)}
              >
                {location}
              </S.Suggestion>
            ))}
          </S.Dropdown>
        )}
        <S.ContentTitleText>연령</S.ContentTitleText>
        <S.AgeChoiceContainer>
          <S.AgeFlex>
            <S.AgeChoice
              isSelected={selectedAge === 10}
              onClick={() => handleCircleClick(10)}
            >
              10
            </S.AgeChoice>
            <S.AgeChoiceText>10대</S.AgeChoiceText>
          </S.AgeFlex>
          <S.AgeFlex>
            <S.AgeChoice
              isSelected={selectedAge === 20}
              onClick={() => handleCircleClick(20)}
            >
              20
            </S.AgeChoice>
            <S.AgeChoiceText>20대</S.AgeChoiceText>
          </S.AgeFlex>
          <S.AgeFlex>
            <S.AgeChoice
              isSelected={selectedAge === 30}
              onClick={() => handleCircleClick(30)}
            >
              30
            </S.AgeChoice>
            <S.AgeChoiceText>30대</S.AgeChoiceText>
          </S.AgeFlex>
        </S.AgeChoiceContainer>
        <S.AgeChoiceContainer>
          <S.AgeFlex>
            <S.AgeChoice
              isSelected={selectedAge === 40}
              onClick={() => handleCircleClick(40)}
            >
              40
            </S.AgeChoice>
            <S.AgeChoiceText>40대</S.AgeChoiceText>
          </S.AgeFlex>
          <S.AgeFlex>
            <S.AgeChoice
              isSelected={selectedAge === 50}
              onClick={() => handleCircleClick(50)}
            >
              50
            </S.AgeChoice>
            <S.AgeChoiceText>50대 이상</S.AgeChoiceText>
          </S.AgeFlex>
        </S.AgeChoiceContainer>
        <S.NextButton onClick={handleNext}>
          반려견 등록으로 넘어가기
        </S.NextButton>
      </S.ContainerWrapper>
    </>
  );
}

export default SignUp;
