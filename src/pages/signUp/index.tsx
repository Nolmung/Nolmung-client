import { S } from './styles/signUp.styles';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import DatePicker from './components/DatePicker';
import DaumPost from './components/DaumPost';
import dayjs, { Dayjs } from 'dayjs';
import axios from 'axios';
import 'dayjs/locale/ko';
dayjs.locale('ko');
import convertAddressToLatlng from './utils/convertAddressToLatlng';
import { toast } from 'react-toastify';
import ReactGA from 'react-ga4';

function SignUp() {
  const [nickname, setNickname] = useState('');
  const [filteredLocations, setFilteredLocations] = useState<string[]>([]);
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isAddressValid, setAddressValid] = useState(true);
  const [NextButtonActive, setNextButtonActive] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(dayjs());
  const [gender, setGender] = useState<string | null>(null); // 'MALE' 또는 'FEMALE'
  const [address, setAddress] = useState<string>('');

  const location = useLocation();
  const navigate = useNavigate();

  const userId = location.state?.userId || '';

  useEffect(() => {
    document.title = '회원가입';
  }, []);

  useEffect(() => {
    if (nickname && address && selectedDate && gender) {
      setNextButtonActive(true);
    } else {
      setNextButtonActive(false);
    }
  }, [nickname, address, selectedDate, gender]);

  const handleDateChange = (newValue: Dayjs | null) => {
    setSelectedDate(newValue);
    ReactGA.event({
      category: 'SignUp',
      action: 'Date of Birth Selected',
      label: newValue ? newValue.format('YYYY-MM-DD') : '',
    });
  };

  const handleNext = async () => {
    if (!nickname || !address || !selectedDate || !gender) {
      alert('모든 정보를 입력해주세요!');
      return;
    }

    const userBirth = selectedDate.format('YYYY-MM-DD');

    if (!userId) {
      toast.error('유효하지 않은 사용자 ID입니다.');
      return;
    }

    try {
      const { latitude, longitude } = await convertAddressToLatlng(address);

      const requestBody = {
        userNickname: nickname,
        userAddressProvince: address,
        userLat: latitude,
        userLong: longitude,
        userBirth: userBirth,
        userGender: gender,
      };

      const response = await axios.post(
        `${import.meta.env.VITE_API_SERVER_URL}/users/signup/${userId}`,
        requestBody,
      );

      if (response.status === 200 || response.status === 201) {
        ReactGA.event({
          category: 'SignUp',
          action: 'Form Submitted',
          label: 'User signed up successfully',
        });
        localStorage.setItem(
          'accessToken',
          'Bearer ' + response.data.data.accessToken,
        );
        navigate('/dogs', {
          state: { nickname, address, userBirth },
        });
      }
    } catch (error: any) {
      if (error.response) {
        console.error('서버 에러:', error.response.data);
      } else if (error.request) {
        console.error('요청이 서버에 도달하지 못했습니다:', error.request);
        toast.error('요청이 서버에 도달하지 못했습니다.');
      } else {
        console.error('에러:', error.message);
      }
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    ReactGA.event({
      category: 'SignUp',
      action: 'Address Input Changed',
      label: value,
    });
    setAddress(value);
  };

  const handleSuggestionClick = (suggestion: string) => {
    ReactGA.event({
      category: 'SignUp',
      action: 'Address Suggestion Selected',
      label: suggestion,
    });
    setAddress(suggestion);
    setFilteredLocations([]);
    setDropdownVisible(false);
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
        />
        <S.ContentTitleText>
          주소
          {!isAddressValid && (
            <S.ErrorMessage>*유효한 주소를 입력해주세요</S.ErrorMessage>
          )}
        </S.ContentTitleText>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <S.UserInfoInput
            value={address}
            onChange={handleInputChange}
            placeholder="주소를 입력해주세요"
          />
          <DaumPost setAddress={setAddress} />

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
        </div>
        <S.ContentTitleText>생년월일</S.ContentTitleText>
        <DatePicker value={selectedDate} onChange={handleDateChange} />
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
