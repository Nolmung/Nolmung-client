import { S } from './styles/signUp.styles';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import DatePicker from './DatePicker';
import dayjs, { Dayjs } from 'dayjs';
import axios from 'axios';
import 'dayjs/locale/ko';
dayjs.locale('ko');

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

  const location = useLocation();
  const navigate = useNavigate();

  // 카카오 로그인 데이터 가져오기
  const loginStatus = location.state?.loginStatus || '';
  const email = location.state?.email || '';
  const role = location.state?.role || '';
  const userId = location.state?.userId || '';

  useEffect(() => {
    document.title = '회원가입';
  }, []);

  useEffect(() => {
    // 버튼 활성화 조건: 닉네임, 주소, 생년월일 모두 입력
    if (nickname && addressProvince && selectedDate) {
      setNextButtonActive(true);
    } else {
      setNextButtonActive(false);
    }
  }, [nickname, addressProvince, selectedDate]);

  const handleDateChange = (newValue: Dayjs | null) => {
    setSelectedDate(newValue);
  };

  const handleNext = async () => {
    if (!nickname || !addressProvince || !selectedDate) {
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
      userLat: 0, // Swagger에서 정의된 필드 (현재는 하드코딩)
      userLong: 0, // Swagger에서 정의된 필드 (현재는 하드코딩)
      userBirth: userBirth,
      userGender: 'FEMALE', // 'MALE' 또는 'FEMALE'로 설정
    };

    console.log('Request body:', requestBody);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_SERVER_URL}/v1/users/signup/${userId}`,
        requestBody,
      );
      if (response.status === 200 || response.status === 201) {
        navigate('/v1/dogs', {
          state: { nickname, addressProvince, userBirth },
        });
      }
    } catch (error: any) {
      if (error.response) {
        console.error(
          '회원가입 중 오류:',
          error.response.status,
          error.response.data,
        );
        alert(
          `회원가입 실패: ${error.response.data.message || '알 수 없는 오류'}`,
        );
      } else if (error.request) {
        console.error('요청이 서버에 도달하지 못했습니다:', error.request);
        alert('요청이 서버에 도달하지 못했습니다.');
      } else {
        console.error('예기치 못한 오류 발생:', error.message);
        alert('예기치 못한 오류 발생.');
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

  return (
    <>
      <S.ContainerWrapper>
        <S.UserTitle>
          안녕하세요, 로그인 상태: {loginStatus}, 이메일: {email}, 역할: {role}
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
