import { Diary } from '@/common/types';
import * as S from '../styles/todayMung.style';

interface TodayMungCardProps {
  card: Diary;
}
function TodayMungCard({ card }: TodayMungCardProps) {
  return (
    <S.TodayMungWrapper>
      <S.TodayMungInfo>
        <S.ProfileWrapper>
          {/** @Todo response 값 수정 필요 */}
          <S.ProfileImage />
          <S.WriterName>{card.diary_writer}</S.WriterName>
        </S.ProfileWrapper>
        <S.CreatedAt>{card.created_at}</S.CreatedAt>
      </S.TodayMungInfo>
      <S.TodayMungTitleContentImageWrapper>
        <S.TodayMungTitleContentWrapper>
          <S.Title>{card.diary_name}</S.Title>
          {/** @Todo response 값 수정 필요 */}
          <S.Content>{card.rating}</S.Content>
        </S.TodayMungTitleContentWrapper>
        <S.Image src={card.image_url} />
      </S.TodayMungTitleContentImageWrapper>
    </S.TodayMungWrapper>
  );
}

export default TodayMungCard;
