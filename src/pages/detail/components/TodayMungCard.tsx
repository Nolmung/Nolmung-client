import { Diary } from '@/common/types';
import { S } from '../styles/todayMungCard.style';
import { useNavigate } from 'react-router-dom';
import { ROUTE } from '@/common/constants/route';

interface TodayMungCardProps {
  card: Diary;
}
function TodayMungCard({ card }: TodayMungCardProps) {
  const navigate = useNavigate();
  const navigateToTodaymungDetail = () => {
    navigate(ROUTE.TODAYMUNG_DETAIL(card.diaryId));
  };

  const formattedDate = card.createdAt
    .split('T')[0]
    .replace(/-/g, '.')
    .slice(2);
  return (
    <S.TodayMungWrapper onClick={navigateToTodaymungDetail}>
      <S.TodayMungInfo aria-label="오늘멍 정보">
        <S.ProfileWrapper aria-label="유저 프로필">
          <S.ProfileImage src={card.writerUrlImage} alt="오늘멍 유저 프로필" />
          <S.WriterName aria-label={'유저 이름' + card.diaryWriter}>
            {card.diaryWriter}
          </S.WriterName>
        </S.ProfileWrapper>
        <S.CreatedAt aria-label={`작성일: ${formattedDate}`}>
          {formattedDate}
        </S.CreatedAt>
      </S.TodayMungInfo>
      <S.TodayMungTitleContentImageWrapper>
        <S.TodayMungTitleContentWrapper
          isImageUrlNotNull={card.imageUrl?.length > 0}
        >
          <S.Title aria-label={`오늘멍 제목: ${card.diaryName}`}>
            {card.diaryName}
          </S.Title>
          <S.Content aria-label={`오늘멍 내용: ${card.diaryContent}`}>
            {card.diaryContent}
          </S.Content>
        </S.TodayMungTitleContentWrapper>
        {card.imageUrl && (
          <S.Image
            src={card.imageUrl}
            alt="오늘멍 프리뷰"
            onError={(e) => {
              e.currentTarget.src =
                'https://nolmung.s3.ap-northeast-2.amazonaws.com/todaymungs/defaultImage.svg';
            }}
          />
        )}
      </S.TodayMungTitleContentImageWrapper>
    </S.TodayMungWrapper>
  );
}

export default TodayMungCard;
