import { convertFormatDate } from '@/common/utils/convertFormatDate';
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
    '';

  return (
    <S.Wrap onClick={handleListClick}>
      <S.UserInfoArea>
        <S.ProfileImg alt="작성자 프로필사진" src={user.profileImageUrl} />
        <S.UserInfoTextArea>
          <S.UserName
            aria-label={
              '작성자 이름' +
              `${user.nickname.length} > 10
                ? ${user.nickname.slice(0, 10)}
                : ${user.nickname}`
            }
          >
            {user.nickname}
          </S.UserName>
          <S.PostDate>{convertFormatDate(data.createdAt)}</S.PostDate>
        </S.UserInfoTextArea>
      </S.UserInfoArea>
      <S.ContentArea>
        <S.ContentTextArea>
          <S.ContentTitle
            aria-label={
              data.title.length > 50 ? data.title.slice(0, 50) : data.title
            }
          >
            {data.title}
          </S.ContentTitle>
          <S.ContentDescription
            aria-label={
              data.content.length > 50
                ? data.content.slice(0, 50)
                : data.content
            }
          >
            {data.content}
          </S.ContentDescription>
        </S.ContentTextArea>
        {imageUrl && (
          <S.ContentImgArea>
            <S.ContentImg
              alt={'오늘멍 이미지 썸네일'}
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
