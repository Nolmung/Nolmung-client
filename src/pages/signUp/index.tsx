import { S } from './styles/signUp.styles';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import DatePicker from './DatePicker';
import dayjs, { Dayjs } from 'dayjs';
import axios from 'axios';
import 'dayjs/locale/ko';
dayjs.locale('ko');
import convertAddressToLatlng from './utils/convertAddressToLatlng';

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
  const [nickname, setNickname] = useState('');
  const [addressProvince, setAddressProvince] = useState('');
  const [filteredLocations, setFilteredLocations] = useState<string[]>([]);
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isAddressValid, setAddressValid] = useState(true);
  const [NextButtonActive, setNextButtonActive] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(dayjs());
  const [gender, setGender] = useState<string | null>(null); // 'MALE' 또는 'FEMALE'

  const location = useLocation();
  const navigate = useNavigate();

  const userId = location.state?.userId || '';

  useEffect(() => {
    document.title = '회원가입';
  }, []);

  // userId가 있을 경우 GET 요청을 통해 회원정보 불러오기
  useEffect(() => {
    const fetchUserData = async () => {
      if (!userId) return;
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_SERVER_URL}/v1/users/${userId}`,
        );
        const userData = response.data.data;

        // 받아온 회원정보를 폼에 반영
        setNickname(userData.userNickname || '');
        setAddressProvince(userData.userAddressProvince || '');
        setSelectedDate(dayjs(userData.userBirth));
        setGender(userData.userGender); // 응답이 'FEMALE' 또는 'MALE' 형태라고 가정
      } catch (error) {
        console.error('유저 정보 조회 실패:', error);
      }
    };

    fetchUserData();
  }, [userId]);

  useEffect(() => {
    // 버튼 활성화 조건: 닉네임, 주소, 생년월일, 성별 모두 입력
    if (nickname && addressProvince && selectedDate && gender) {
      setNextButtonActive(true);
    } else {
      setNextButtonActive(false);
    }
  }, [nickname, addressProvince, selectedDate, gender]);

  const handleDateChange = (newValue: Dayjs | null) => {
    setSelectedDate(newValue);
  };

  const handleNext = async () => {
    if (!nickname || !addressProvince || !selectedDate || !gender) {
      alert('모든 정보를 입력해주세요!');
      return;
    }

    const userBirth = selectedDate.format('YYYY-MM-DD');

    if (!userId) {
      alert('유효하지 않은 사용자 ID입니다.');
      return;
    }

    const requestBody = {
      userNickname: nickname,
      userAddressProvince: addressProvince,
      userLat: 0,
      userLong: 0,
      userBirth: userBirth,
      userGender: gender, // 'MALE' 또는 'FEMALE'
    };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_SERVER_URL}/users/signup/${userId}`,
        requestBody,
      );
      if (response.status === 200 || response.status === 201) {
        navigate('/dogs', {
          state: { nickname, addressProvince, userBirth },
        });
      }
    } catch (error: any) {
      if (error.response) {
        // 에러 처리 로직 추가
      } else if (error.request) {
        console.error('요청이 서버에 도달하지 못했습니다:', error.request);
        alert('요청이 서버에 도달하지 못했습니다.');
      }
    }
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

  // 주소를 위도, 경도로 변환하는 함수 (테스트용)
  const getLatlng = async (address: string) => {
    const res = await convertAddressToLatlng(address);
    console.log('위도: ', res.latitude, '경도: ', res.longitude);
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
        />
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
        <S.ContentTitleText>생년월일</S.ContentTitleText>
        <DatePicker value={selectedDate} onChange={handleDateChange} />
        <S.GenderContainer>
          <div>
            <S.ContentTitleText>성별</S.ContentTitleText>
            <S.GenderWrapper>
              <S.GenderSelect
                isSelected={gender === 'MALE'}
                onClick={() => setGender('MALE')}
              >
                남성
              </S.GenderSelect>
              <S.GenderSelect
                isSelected={gender === 'FEMALE'}
                onClick={() => setGender('FEMALE')}
              >
                여성
              </S.GenderSelect>
            </S.GenderWrapper>
          </div>
        </S.GenderContainer>
        <S.NextButton
          disabled={!NextButtonActive}
          isActive={NextButtonActive}
          onClick={handleNext}
        >
          반려견 등록으로 넘어가기
        </S.NextButton>
      </S.ContainerWrapper>
    </>
  );
}

export default SignUp;
