import { GoBackIcon } from '@/assets/images/svgs';
import styled from 'styled-components';

const Header = ({ title }: any) => {
  return (
    <HeaderArea>
      <GoBackIcon />
      <TitleArea>{title}</TitleArea>
    </HeaderArea>
  );
};

export default Header;

const HeaderArea = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 1000;
  margin: 28px 0px;
  background-color: grey;
`;

const TitleArea = styled.div`
  margin-left: 15px;
  font-size: 20px;
  line-height: 1.2;
`;
