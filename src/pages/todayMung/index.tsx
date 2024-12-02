import Convert from './components/convert/Convert';
import UserInfo from './components/userInfo/UserInfo';
import { S } from './index.style';
import { todaymungData } from '@/mocks/data/todaymungData';

function index() {
  return (
    <S.Wrapper>
      <UserInfo
        userData={todaymungData[0].data.user}
        diaryLength={todaymungData[0].data.diaries.length}
      />
      <Convert listData={todaymungData[0].data} />
    </S.Wrapper>
  );
}

export default index;
