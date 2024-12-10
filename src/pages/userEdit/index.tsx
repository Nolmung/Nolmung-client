import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import dayjs, { Dayjs } from 'dayjs';
import { S } from '../signUp/styles/signUp.styles';
import DatePicker from '../signUp/DatePicker';
import { instance } from '@/service/apis';

function UserEdit() {
  const [nickname, setNickname] = useState('');
  const [addressProvince, setAddressProvince] = useState('');
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(dayjs());
  const [gender, setGender] = useState<string | null>(null);
  const [NextButtonActive, setNextButtonActive] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const userId = location.state?.userId;

  useEffect(() => {
    const fetchUserData = async () => {
      if (!userId) {
        alert('유효하지 않은 사용자 ID입니다.');
        navigate('/login');
        return;
      }

      try {
        const response = await instance.get(
          `${import.meta.env.VITE_API_SERVER_URL}/users`,
        );

        const userData = response.data.data;

        setNickname(userData.userNickname || '');
        setAddressProvince(userData.userAddressProvince || '');
        setSelectedDate(dayjs(userData.userBirth));
        setGender(userData.userGender);
      } catch (error) {
        console.error('유저 정보 조회 실패:', error);
        alert('회원정보를 불러오는 데 실패했습니다.');
      }
    };

    fetchUserData();
  }, [userId, navigate]);

  useEffect(() => {
    if (nickname && addressProvince && selectedDate && gender) {
      setNextButtonActive(true);
    } else {
      setNextButtonActive(false);
    }
  }, [nickname, addressProvince, selectedDate, gender]);

  const handleDateChange = (newValue: Dayjs | null) => {
    setSelectedDate(newValue);
  };

  const handleSave = async () => {
    if (!nickname || !addressProvince || !selectedDate || !gender) {
      alert('모든 정보를 입력해주세요!');
      return;
    }

    const userBirth = selectedDate.format('YYYY-MM-DD');

    try {
      const requestBody = {
        userNickname: nickname,
        userAddressProvince: addressProvince,
        userLat: 0,
        userLong: 0,
        userBirth: userBirth,
        userGender: gender,
      };

      const response = await instance.put(
        `${import.meta.env.VITE_API_SERVER_URL}/users`,
        requestBody,
      );

      if (response.status === 200) {
        alert('회원정보가 성공적으로 수정되었습니다.');
        navigate('/my');
      }
    } catch (error) {
      console.error('저장 실패:', error);
      alert('저장 중 문제가 발생했습니다. 다시 시도해주세요.');
    }
  };

  return (
    <S.ContainerWrapper>
      <S.UserTitle>회원정보 수정</S.UserTitle>
      <S.ContentTitleText>닉네임</S.ContentTitleText>
      <S.UserInfoInput
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
        placeholder="닉네임을 입력해주세요"
      />
      <S.ContentTitleText>주소</S.ContentTitleText>
      <S.UserInfoInput
        value={addressProvince}
        onChange={(e) => setAddressProvince(e.target.value)}
        placeholder="주소를 입력해주세요"
      />
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
        onClick={handleSave}
      >
        저장하기
      </S.NextButton>
    </S.ContainerWrapper>
  );
}

export default UserEdit;
