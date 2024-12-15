import { S } from '../../styles/TodayMungListCard.style';
import { ListCardProps } from '../../types/TodayMungList.type';
import { useNavigate } from 'react-router-dom';
import ReactGA from 'react-ga4';
const TodayMungListCard = ({ listData, data }: ListCardProps) => {
  const { user } = listData;

  const navigate = useNavigate();

  const handleListClick = () => {
    ReactGA.event({
      category: 'Diary',
      action: 'View Diary',
      label: `Diary ID: ${data.diaryId}`,
    });
    navigate(`/todaymung/detail/${data.diaryId}`);
  };

  const imageUrl =
    data.mediaList?.find((media) => media.mediaType === 'IMAGE')?.mediaUrl ||
    '/svgs/todayMungDefaultImage.svg';

  return (
    <S.Wrap onClick={handleListClick}>
      <S.UserInfoArea>
        <S.ProfileImg src={user.profileImageUrl} />
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
        {data && (
          <S.ContentImgArea>
            <S.ContentImg
              src={imageUrl}
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
