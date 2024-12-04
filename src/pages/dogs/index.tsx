import { S } from './styles/dogs.styles';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const dogBreeds = [
  '포메라니안',
  '말티즈',
  '푸들',
  '시추',
  '비숑 프리제',
  '요크셔테리어',
  '닥스훈트',
  '치와와',
  '골든 리트리버',
  '래브라도 리트리버',
  '불독',
  '코카스패니얼',
  '웰시코기',
  '사모예드',
  '시베리안 허스키',
  '슈나우저',
  '비글',
  '페키니즈',
  '잭 러셀 테리어',
  '시바 이누',
];

function Dogs() {
  const { state } = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { nickname } = state || {};
  const [size, setSize] = useState<number | null>(null);
  const [filteredLocations, setFilteredLocations] = useState<string[]>([]);
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const [form, setForm] = useState({
    dog_name: '',
    dog_type: '',
    birth: '',
    profile_url: '',
    gender: '',
    size: '',
    neuterYn: false,
  });

  const navigate = useNavigate();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === 'dog_type') {
      // 견종 추천 필터링
      const filtered = dogBreeds.filter((breed) => breed.includes(value));
      setFilteredLocations(filtered);
      setDropdownVisible(filtered.length > 0);
    } else {
      setDropdownVisible(false);
    }
  };

  const handleCircleClick = (size: number) => {
    setSize((prev) => (prev === size ? null : size));
    setForm((prev) => ({
      ...prev,
      size: size === 1 ? '소형' : size === 2 ? '중형' : '대형',
    }));
  };

  const handleSuggestionClick = (suggestion: string) => {
    setForm((prev) => ({
      ...prev,
      dog_type: suggestion,
    }));
    setFilteredLocations([]);
    setDropdownVisible(false);
  };

  const handleSubmit = () => {
    if (!nickname || !form.dog_name || !form.dog_type || !form.birth || !size) {
      alert('모든 정보를 입력해주세요!');
      return;
    }

    console.log(form); // 최종 데이터 확인

    navigate('/main', {
      state: { nickname, form },
    });
    // API 요청 추가 가능
  };
  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setDropdownVisible(false); // 드롭다운 닫기
    }
  };
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <S.ContainerWrapper>
      <S.UserTitle>
        반가워요,
        <br />
        {nickname}님의 반려견을 등록해주세요
      </S.UserTitle>
      <S.DogPicture>
        <S.StyledCameraIcon />
      </S.DogPicture>
      <S.ContentTitleText>이름</S.ContentTitleText>
      <S.UserInfoInput
        type="text"
        name="dog_name"
        value={form.dog_name}
        onChange={handleChange}
        placeholder="반려견 이름을 입력해주세요"
      />
      <S.ContentTitleText>나이</S.ContentTitleText>
      <S.UserInfoInput
        type="number"
        name="birth"
        value={form.birth}
        onChange={handleChange}
        placeholder="나이를 입력해주세요"
      />
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
      <S.ContentTitleText>견종</S.ContentTitleText>
      <S.UserInfoInput
        type="text"
        name="dog_type"
        value={form.dog_type}
        onChange={handleChange}
        placeholder="견종을 입력해주세요"
        isDropdownVisible={isDropdownVisible}
      />
      {isDropdownVisible && (
        <div ref={dropdownRef}>
          <S.Dropdown>
            {filteredLocations.map((breed) => (
              <S.Suggestion
                key={breed}
                onClick={() => handleSuggestionClick(breed)}
              >
                {breed}
              </S.Suggestion>
            ))}
          </S.Dropdown>
        </div>
      )}
      <S.NextButton onClick={handleSubmit}>
        반려견 등록으로 넘어가기
      </S.NextButton>
    </S.ContainerWrapper>
  );
}

export default Dogs;
