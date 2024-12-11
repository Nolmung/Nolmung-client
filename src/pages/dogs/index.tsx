import dogBreeds from '@/common/constants/dogBreeds';
import { S } from './styles/dogs.styles';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { ROUTE } from '@/common/constants/route';
import DatePicker from '../signUp/components/DatePicker';
import dayjs, { Dayjs } from 'dayjs';
import { uploadFileToS3 } from '@/common/utils/uploadImageToS3';
import { usePostDogs } from './queries';
import { DogInfoType } from '@/service/apis/dog/index.type';
import { UPLOADPATH } from '@/common/constants/uploadPath';
import 'dayjs/locale/ko';
dayjs.locale('ko');

function Dogs() {
  const { state } = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const { nickname } = state || {};
  const [size, setSize] = useState<number | null>(null);
  const [filteredLocations, setFilteredLocations] = useState<string[]>([]);
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [gender, setGender] = useState<string | null>(null);
  const [neutered, setNeutered] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);
  const { mutate: postDogMutate } = usePostDogs();

  const handleDateChange = (newValue: Dayjs | null) => {
    setSelectedDate(newValue);
    if (newValue) {
      setDogData((prevData) => ({
        ...prevData,
        birth: newValue.format('YYYY-MM-DD'), // 선택된 날짜를 YYYY-MM-DD 형식으로 저장
      }));
    }
  };
  const [dogData, setDogData] = useState<DogInfoType>({
    dogName: '',
    dogType: '',
    birth: '',
    profileUrl: '',
    gender: 'MALE',
    size: '',
    neuterYn: false,
  });

  const [NextButtonActive, setNextButtonActive] = useState(false);

  useEffect(() => {
    if (
      dogData.dogName &&
      dogData.dogType &&
      dogData.birth &&
      size &&
      neutered &&
      gender
    ) {
      setNextButtonActive(true);
    }
  }, [
    gender,
    nickname,
    dogData.dogName,
    dogData.dogType,
    dogData.birth,
    size,
    neutered,
  ]);

  const handlePictureClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      try {
        // S3 업로드
        const uploadedFiles = await uploadFileToS3([file], UPLOADPATH.DOGS());

        // undefined 체크 및 URL 업데이트
        if (uploadedFiles && uploadedFiles.length > 0) {
          const s3Url = uploadedFiles[0].s3Url;

          // dogData 객체에 profileUrl 업데이트
          setDogData((prevData) => ({
            ...prevData,
            profileUrl: s3Url,
          }));
          setPreview(s3Url);
        } else {
          console.error('업로드된 파일이 없습니다.');
        }
      } catch (error) {
        console.error('파일 업로드 중 에러 발생:', error);
      }
    }
  };

  const navigate = useNavigate();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;

    setDogData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === 'dogType') {
      const filtered = dogBreeds.filter((breed) => breed.includes(value));
      setFilteredLocations(filtered);
      setDropdownVisible(filtered.length > 0);
    } else {
      setDropdownVisible(false);
    }
  };

  const handleCircleClick = (size: number) => {
    setSize((prev) => (prev === size ? null : size));
    setDogData((prev) => ({
      ...prev,
      size: size === 1 ? 'S' : size === 2 ? 'M' : 'L',
    }));
  };

  const handleSuggestionClick = (suggestion: string) => {
    setDogData((prev) => ({
      ...prev,
      dogType: suggestion,
    }));
    setFilteredLocations([]);
    setDropdownVisible(false);
  };

  const handleSubmitClick = async () => {
    postDogMutate(dogData, {
      onSuccess: () => {
        navigate(ROUTE.MAIN(), {
          state: { nickname, dogData },
          replace: true,
        });
      },
    });
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setDropdownVisible(false);
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
          <S.StyledCameraIcon />
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
        name="dogName"
        value={dogData.dogName}
        onChange={handleChange}
        placeholder="반려견 이름을 입력해주세요"
      />
      <S.ContentTitleText>생년월일</S.ContentTitleText>
      <DatePicker value={selectedDate} onChange={handleDateChange} />
      <S.ContentTitleText>몸무게</S.ContentTitleText>
      <S.AgeChoiceContainer>
        <S.AgeFlex>
          <S.AgeChoice
            isSelected={size === 1}
            onClick={() => handleCircleClick(1)}
          >
            <S.SmallDogIcon isSelected={size === 1} />
          </S.AgeChoice>
          <S.AgeChoiceText>10kg 미만</S.AgeChoiceText>
        </S.AgeFlex>
        <S.AgeFlex>
          <S.AgeChoice
            isSelected={size === 2}
            onClick={() => handleCircleClick(2)}
          >
            <S.MeduimDogIcon isSelected={size === 2} />
          </S.AgeChoice>
          <S.AgeChoiceText>10kg - 25kg 미만</S.AgeChoiceText>
        </S.AgeFlex>
        <S.AgeFlex>
          <S.AgeChoice
            isSelected={size === 3}
            onClick={() => handleCircleClick(3)}
          >
            <S.LargeDogIcon isSelected={size === 3} />
          </S.AgeChoice>
          <S.AgeChoiceText>25kg 이상</S.AgeChoiceText>
        </S.AgeFlex>
      </S.AgeChoiceContainer>
      <S.ContentTitleText>견종</S.ContentTitleText>
      <S.UserInfoInput
        type="text"
        name="dogType"
        value={dogData.dogType}
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
              onClick={() => {
                setGender('수컷');
                setDogData((prev) => ({ ...prev, gender: 'MALE' }));
              }}
            >
              수컷
            </S.GenderSelect>
            <S.GenderSelect
              isSelected={gender === '암컷'}
              onClick={() => {
                setGender('암컷');
                setDogData((prev) => ({ ...prev, gender: 'FEMALE' }));
              }}
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
              onClick={() => {
                setNeutered('예');
                setDogData((prev) => ({ ...prev, neuterYn: true }));
              }}
            >
              예
            </S.GenderSelect>
            <S.GenderSelect
              isSelected={neutered === '아니오'}
              onClick={() => {
                setNeutered('아니오');
                setDogData((prev) => ({ ...prev, neuterYn: false }));
              }}
            >
              아니오
            </S.GenderSelect>
          </S.GenderWrapper>
        </div>
      </S.GenderContainer>
      <S.NextButton isActive={NextButtonActive} onClick={handleSubmitClick}>
        놀멍 시작하기
      </S.NextButton>
    </S.ContainerWrapper>
  );
}

export default Dogs;
