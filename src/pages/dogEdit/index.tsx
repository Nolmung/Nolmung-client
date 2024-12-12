import dogBreeds from '@/common/constants/dogBreeds';
import { S } from './styles/dogsEdit.styles';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { ROUTE } from '@/common/constants/route';
import { useParams } from 'react-router-dom';
import DatePicker from '../signUp/components/DatePicker';
import dayjs, { Dayjs } from 'dayjs';
import { uploadFileToS3 } from '@/common/utils/uploadImageToS3';
import { usePatchDogs, useDeleteDogs } from './queries';
import { DogInfoType } from '@/service/apis/dog/index.type';
import 'dayjs/locale/ko';
import { UPLOADPATH } from '@/common/constants/uploadPath';
dayjs.locale('ko');

function DogsEdit() {
  const { state } = useLocation();
  const { dogId } = useParams<{ dogId: string }>();
  const numDogId = Number(dogId);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const { nickname, dogData: recentData } = state || {};
  const [size, setSize] = useState<number | null | string>(null);
  const [filteredLocations, setFilteredLocations] = useState<string[]>([]);
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [gender, setGender] = useState<string | null>(null);
  const [neutered, setNeutered] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(dayjs());
  const { mutate: patchDogMutate } = usePatchDogs();
  const { mutate: deleteDogMutate } = useDeleteDogs();
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
    dogName: recentData.dogName,
    dogType: recentData.dogType,
    birth: recentData.birth,
    profileUrl: recentData.profileUrl,
    gender: recentData.gender,
    size: recentData.size,
    neuterYn: recentData.neuterYn,
  });

  const [NextButtonActive, setNextButtonActive] = useState(false);

  useEffect(() => {
    if (
      dogData.dogName &&
      dogData.dogType &&
      dogData.birth &&
      size || dogData.size&&
      neutered || dogData.neuterYn&&
      gender || dogData.gender
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
        const uploadedFiles = await uploadFileToS3([file], UPLOADPATH.DOGS());

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

  const handleEditClick = async () => {
    patchDogMutate(
      { dogId: numDogId, dogInfo: dogData },
      {
        onSuccess: () => {
          navigate(ROUTE.MY());
        },
        onError: (error) => console.error('수정 실패:', error),
      },
    );
  };

  const handleDeleteClick = async () => {
    deleteDogMutate(numDogId, {
      onSuccess: () => {
        navigate(ROUTE.MY());
      },
      onError: (error) => console.error('삭제 실패:', error),
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
              isSelected={size === 1 || dogData.size === 'S'}
              onClick={() => handleCircleClick(1)}
            >
              <S.SmallDogIcon isSelected={size === 1 || dogData.size === 'S'} />
            </S.AgeChoice>
            <S.AgeChoiceText>10kg 미만</S.AgeChoiceText>
          </S.AgeFlex>
          <S.AgeFlex>
            <S.AgeChoice
              isSelected={size === 2 || dogData.size === 'M'}
              onClick={() => handleCircleClick(2)}
            >
              <S.MeduimDogIcon isSelected={size === 2 || dogData.size === 'M'} />
            </S.AgeChoice>
            <S.AgeChoiceText>10kg - 25kg 미만</S.AgeChoiceText>
          </S.AgeFlex>
          <S.AgeFlex>
            <S.AgeChoice
              isSelected={size === 3 || dogData.size === 'L'}
              onClick={() => handleCircleClick(3)}
            >
              <S.LargeDogIcon isSelected={size === 3 || dogData.size === 'L'} />
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
              isSelected={gender === '수컷' || dogData.gender === 'MALE'}
              onClick={() => {
                setGender('수컷');
                setDogData((prev) => ({ ...prev, gender: 'MALE' }));
              }}
            >
              수컷
            </S.GenderSelect>
            <S.GenderSelect
              isSelected={gender === '암컷' || dogData.gender === 'FEMALE'}
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
              isSelected={neutered === '예' || dogData.neuterYn === true}
              onClick={() => {
                setNeutered('예');
                setDogData((prev) => ({ ...prev, neuterYn: true }));
              }}
            >
              예
            </S.GenderSelect>
            <S.GenderSelect
              isSelected={neutered === '아니오' || dogData.neuterYn === false}
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
      <S.ButtonArea>
        <S.EditButton
          disabled={!NextButtonActive}
          $isActive={NextButtonActive}
          onClick={handleEditClick}
        >
          수정하기
        </S.EditButton>
        <S.DeleteButton onClick={handleDeleteClick}>삭제하기</S.DeleteButton>
      </S.ButtonArea>
    </S.ContainerWrapper>
  );
}

export default DogsEdit;
