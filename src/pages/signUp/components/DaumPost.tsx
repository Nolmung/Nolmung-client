import React from 'react';
import { useDaumPostcodePopup } from 'react-daum-postcode';

interface DaumPostProps {
  setAddress: (address: string) => void; // 부모 컴포넌트에서 전달받은 setAddress 함수
}

const DaumPost: React.FC<DaumPostProps> = ({ setAddress }) => {
  const postcodeScriptUrl =
    'https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';
  const open = useDaumPostcodePopup(postcodeScriptUrl);

  const handleComplete = (data: any) => {
    let fullAddress = data.address;
    let extraAddress = '';
    const localAddress = `${data.sido} ${data.sigungu}`;
    console.log('complete');
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

    console.log('full', fullAddress);
    setAddress(fullAddress); // 부모 컴포넌트의 주소 상태 업데이트
  };

  const handleClick = () => {
    open({ onComplete: handleComplete });
  };

  return (
    <button
      onClick={handleClick}
      role="button"
      style={{
        marginLeft: '10px',
        height: '44px',
        padding: '10px 22px',
        backgroundColor: '#5E5E5E', // 버튼 배경색
        color: '#ffffff', // 텍스트 색상
        borderRadius: '10px', // 버튼 모서리를 둥글게
        cursor: 'pointer', // 커서를 포인터로 변경
        fontSize: '14px',
        fontWeight: '500',
        fontFamily: 'pretendard',
        transition: 'background-color 0.5s ease',
      }}
      onMouseOver={
        (e) => (e.currentTarget.style.backgroundColor = '#080808') // 호버 시 배경색 변경
      }
      onMouseOut={
        (e) => (e.currentTarget.style.backgroundColor = '#5E5E5E') // 마우스 아웃 시 원래 색상으로
      }
    >
      주소검색
    </button>
  );
};

export default DaumPost;
