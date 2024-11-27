import Convert from './components/convert/Convert';
import UserInfo from './components/userInfo/UserInfo';
import { S } from './index.style';

function index() {
  return (
    <S.Wrapper>
      <UserInfo />
      <Convert />
    </S.Wrapper>
  );
}

export default index;
