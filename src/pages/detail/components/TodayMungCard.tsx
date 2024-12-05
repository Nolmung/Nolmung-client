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
      <S.TodayMungInfo>
        <S.ProfileWrapper>
          <S.ProfileImage src={card.writerUrlImage} alt="오늘멍 유저 프로필" />
          <S.WriterName>{card.diaryWriter}</S.WriterName>
        </S.ProfileWrapper>
        <S.CreatedAt>{formattedDate}</S.CreatedAt>
      </S.TodayMungInfo>
      <S.TodayMungTitleContentImageWrapper>
        <S.TodayMungTitleContentWrapper
          isImageUrlNotNull={card.imageUrl?.length > 0}
        >
          <S.Title>{card.diaryName}</S.Title>
          <S.Content>
            오늘은 장미랑 같이 모각코를 했어요 근데 장미 이자식이 자기 물은 안
            마시고 꼭 제 물만 뺏어먹어서 너무 어이없었어요 그리고 어제 산책을
            했는데 자기 밥은 먹다 남겨놓고 길고양이 밥을 뺐어먹으려 해서
            어이없었어요{' '}
          </S.Content>
        </S.TodayMungTitleContentWrapper>
        {card.imageUrl && <S.Image src={card.imageUrl} alt="오늘멍 프리뷰" />}
      </S.TodayMungTitleContentImageWrapper>
    </S.TodayMungWrapper>
  );
}

export default TodayMungCard;
