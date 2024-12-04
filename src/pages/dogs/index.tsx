import dogBreeds from '@/common/constants/dogBreeds';
import { S } from './styles/dogs.styles';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { ROUTE } from '@/common/constants/route';

function Dogs() {
  const { state } = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const { nickname } = state || {};
  const [size, setSize] = useState<number | null>(null);
  const [filteredLocations, setFilteredLocations] = useState<string[]>([]);
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [gender, setGender] = useState<string | null>(null); // 성별 상태
  const [neutered, setNeutered] = useState<string | null>(null); // 중성화 여부 상태

  const [form, setForm] = useState({
    dog_name: '',
    dog_type: '',
    birth: '',
    profile_url: '',
    gender: '',
    size: '',
    neuterYn: false,
  });

  const [NextButtonActive, setNextButtonActive] = useState(false);

  useEffect(() => {
    if (
      nickname &&
      form.dog_name &&
      form.dog_type &&
      form.birth &&
      size &&
      neutered &&
      gender
    ) {
      setNextButtonActive(true);
    }
  }, [
    gender,
    nickname,
    form.dog_name,
    form.dog_type,
    form.birth,
    size,
    neutered,
  ]);

  const handlePictureClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click(); // 숨겨진 파일 입력 요소 클릭
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string); // 미리보기 이미지 설정
      };
      reader.readAsDataURL(file); // 파일 읽기
    }
  };

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
      return;
    }
    navigate(ROUTE.MAIN(), {
      state: { nickname, form },
      replace: true,
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
      <S.DogPicture onClick={handlePictureClick}>
        {preview ? (
          <S.PreviewImage src={preview} alt="Dog Profile Preview" />
        ) : (
          <S.StyledCameraIcon /> // 기본 아이콘
        )}
        <S.HiddenInput
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleFileChange}
        />
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
      <S.InputWrapper>
        <S.UserInfoInput
          type="text"
          name="birth"
          value={form.birth}
          onChange={handleChange}
          placeholder="나이를 입력해주세요"
        />
        <S.BirthText>살</S.BirthText>
      </S.InputWrapper>
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
      <S.GenderContainer>
        <div>
          <S.ContentTitleText>성별</S.ContentTitleText>
          <S.GenderWrapper>
            <S.GenderSelect
              isSelected={gender === '수컷'}
              onClick={() => setGender('수컷')}
            >
              수컷
            </S.GenderSelect>
            <S.GenderSelect
              isSelected={gender === '암컷'}
              onClick={() => setGender('암컷')}
            >
              암컷
            </S.GenderSelect>
          </S.GenderWrapper>
        </div>
        <div>
          <S.ContentTitleText>중성화 여부</S.ContentTitleText>
          <S.GenderWrapper>
            <S.GenderSelect
              isSelected={neutered === '예'}
              onClick={() => setNeutered('예')}
            >
              예
            </S.GenderSelect>
            <S.GenderSelect
              isSelected={neutered === '아니오'}
              onClick={() => setNeutered('아니오')}
            >
              아니오
            </S.GenderSelect>
          </S.GenderWrapper>
        </div>
      </S.GenderContainer>
      <S.NextButton isActive={NextButtonActive} onClick={handleSubmit}>
        놀멍 시작하기
      </S.NextButton>
    </S.ContainerWrapper>
  );
}

export default Dogs;
