import React from 'react';
import { useDaumPostcodePopup } from 'react-daum-postcode';
import S from '../styles/daumPost.styles';

interface DaumPostProps {
  address: string; // 부모 컴포넌트에서 전달받은 주소 상태
  setAddress: (address: string) => void; // 부모 컴포넌트에서 전달받은 setAddress 함수
}

/** 다음 우편번호 API */
const DaumPost: React.FC<DaumPostProps> = ({ address, setAddress }) => {
  const postcodeScriptUrl =
    'https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';
  const open = useDaumPostcodePopup(postcodeScriptUrl);

  const handleComplete = (data: any) => {
    let fullAddress = data.address;
    let extraAddress = '';
    const localAddress = `${data.sido} ${data.sigungu}`;
    if (data.addressType === 'R') {
      if (data.bname) {
        extraAddress += data.bname;
      }
      if (data.buildingName) {
        extraAddress +=
          extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress = fullAddress.replace(localAddress, '');
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }

    setAddress(fullAddress); // 부모 컴포넌트의 주소 상태 업데이트
  };

  const handleClick = () => {
    open({ onComplete: handleComplete });
  };

  return (
    <>
      <S.UserInfoInput
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder="주소를 입력해주세요"
        readOnly // 사용자가 직접 값을 수정하지 못하게 설정
      />
      <S.Button
        onClick={handleClick}
        role="button"
        onMouseOver={
          (e) => (e.currentTarget.style.backgroundColor = '#080808') // 호버 시 배경색 변경
        }
        onMouseOut={
          (e) => (e.currentTarget.style.backgroundColor = '#5E5E5E') // 마우스 아웃 시 원래 색상으로
        }
      >
        주소검색
      </S.Button>
    </>
  );
};

export default DaumPost;
