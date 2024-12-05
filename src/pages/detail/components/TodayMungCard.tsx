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
  return (
    <S.TodayMungWrapper onClick={navigateToTodaymungDetail}>
      <S.TodayMungInfo>
        <S.ProfileWrapper>
          <S.ProfileImage src={card.writerUrlImage} alt="오늘멍 유저 프로필" />
          <S.WriterName>{card.diaryWriter}</S.WriterName>
        </S.ProfileWrapper>
        <S.CreatedAt>{card.createdAt}</S.CreatedAt>
      </S.TodayMungInfo>
      <S.TodayMungTitleContentImageWrapper>
        <S.TodayMungTitleContentWrapper>
          <S.Title>{card.diaryName}</S.Title>
          <S.Content>{card.diaryContent}</S.Content>
        </S.TodayMungTitleContentWrapper>
        {card.imageUrl && <S.Image src={card.imageUrl} alt="오늘멍 프리뷰"/>}
      </S.TodayMungTitleContentImageWrapper>
    </S.TodayMungWrapper>
  );
}

export default TodayMungCard;
