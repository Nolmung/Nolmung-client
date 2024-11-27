import { S } from './UserInfo.style';
import { TodayMungProfileImage } from '@/assets/images/svgs';

const UserInfo = () => {
  return (
    <S.ProfileArea>
      <TodayMungProfileImage />
      <S.ProfileDescription>
        <S.ProfileName>효링디링</S.ProfileName>
        <S.ProfileSubTextArea>
          <S.TodayMungLength>2번</S.TodayMungLength>
          <S.TodayMungLengthDescription>
            현재 작성한 오늘멍
          </S.TodayMungLengthDescription>
        </S.ProfileSubTextArea>
      </S.ProfileDescription>
    </S.ProfileArea>
  );
};

export default UserInfo;
