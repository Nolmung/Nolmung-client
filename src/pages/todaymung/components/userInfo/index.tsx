import { S } from '../../styles/UserInfo.style';

import { UserInfoTypes } from '../../types/UserInfo.type';

const UserInfo = ({ userData, diaryLength }: UserInfoTypes) => {
  return (
    <S.ProfileArea>
      <S.ProfileImg src={userData.profileImageUrl} />
      <S.ProfileDescription>
        <S.ProfileName>{userData.nickname}</S.ProfileName>
        <S.ProfileSubTextArea>
          <S.TodayMungLength>{diaryLength}번</S.TodayMungLength>
          <S.TodayMungLengthDescription>
            현재 작성한 오늘멍
          </S.TodayMungLengthDescription>
        </S.ProfileSubTextArea>
      </S.ProfileDescription>
    </S.ProfileArea>
  );
};

export default UserInfo;
