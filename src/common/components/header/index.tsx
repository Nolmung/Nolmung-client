import styled from 'styled-components';

import { GoBackIcon } from '@/assets/images/svgs';
import { HeaderType } from '@/common/components/header/index.type';

function Header({ title, showIcon, type }: HeaderType) {
  return (
    <>
      {type === 1 && ( //type === 1 : title이 왼쪽에 있는경우
        <HeaderArea>
          {showIcon ? <GoBackIcon /> : <DummyIcon />}
          <TitleArea>{title}</TitleArea>
        </HeaderArea>
      )}

      {type === 2 && ( //type === 2 : title이 정중앙에 있는 경우
        <HeaderArea2>
          {showIcon ? <GoBackIcon /> : <DummyIcon />}
          <TitleArea2>{title}</TitleArea2>
        </HeaderArea2>
      )}
    </>
  );
}

export default Header;

const HeaderArea = styled.div`
  display: flex;
  width: 100%;
  min-width: 320px;
  height: 100%;
  max-height: 70px;
  align-items: center;
  position: sticky;
  background-color: #fff;
  top: 0;
  left: 0;
  z-index: 1000;
  padding: 28px 22px;
  gap: 15px;
`;

const DummyIcon = styled.div`
  width: 24px;
  height: 24px;
  visibility: hidden;
`;

const TitleArea = styled.div`
  text-align: center;
  font-weight: 500;
  font-size: 20px;
  line-height: 1;
`;

const HeaderArea2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  width: 100%;
  min-width: 320px;
  height: 100%;
  max-height: 70px;
  background-color: #fff;
  top: 0;
  left: 0;
  z-index: 1000;
  padding: 28px 22px;
`;

const TitleArea2 = styled.div`
  position: absolute;
  text-align: center;
  left: 50%;
  transform: translateX(-50%);
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  text-align: center;
`;
