import Convert from './components/convert';
import UserInfo from './components/userInfo';
import { S } from './styles/index.style';
import { todaymungData } from '@/mocks/data/todaymungData';

function Todaymung() {
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

export default Todaymung;
