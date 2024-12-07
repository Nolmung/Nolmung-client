import { S } from '../../styles/TodayMungListCard.style';
import { ListCardProps } from '../../types/TodayMungList.type';
import { useNavigate } from 'react-router-dom';

const TodayMungListCard = ({ listData, data }: ListCardProps) => {
  const { user } = listData;

  const navigate = useNavigate();

  const handleListClick = () => {
    navigate(`/todaymung/detail/${data.diaryId}`);
  };

  return (
    <S.Wrap onClick={handleListClick}>
      <S.UserInfoArea>
        <S.ProfileImg src="/public/pngs/TodayMungLogo.png" />
        <S.UserInfoTextArea>
          <S.UserName>{user.nickname}</S.UserName>
          <S.PostDate>{data.createdAt}</S.PostDate>
        </S.UserInfoTextArea>
      </S.UserInfoArea>
      <S.ContentArea>
        <S.ContentTextArea>
          <S.ContentTitle>{data.title}</S.ContentTitle>
          <S.ContentDescription>{data.content}</S.ContentDescription>
        </S.ContentTextArea>
        {data.mediaUrl && (
          <S.ContentImgArea>
            <S.ContentImg
              src={data.mediaUrl}
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  '/svgs/todayMungDefaultImage.svg';
              }}
            />
          </S.ContentImgArea>
        )}
      </S.ContentArea>
    </S.Wrap>
  );
};

export default TodayMungListCard;
