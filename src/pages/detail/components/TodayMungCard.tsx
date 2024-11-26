import * as S from '../styles/todayMung.style';

function TodayMungCard() {
  return (
    <S.TodayMungWrapper>
      <S.TodayMungInfo>
        <S.ProfileWrapper>
          <S.ProfileImage />
          <S.WriterName>효링디링</S.WriterName>
        </S.ProfileWrapper>
        <S.CreatedAt>24.01.12</S.CreatedAt>
      </S.TodayMungInfo>
      <S.TodayMungTitleContentImageWrapper>
        <S.TodayMungTitleContentWrapper>
          <S.Title>햇살 좋은 날 햇님이랑 여기저기 돌아다닌 하루</S.Title>
          <S.Content>
            오늘 장미를 데리고 같이 재미있게 놀려고 했어요. 그래서 소고기 집에
            갔어요. 저는 육회를 먹으려고 했고, 장미한테는 소고기를 주려고 했는데
            육회가 너무 비싸서 결국 장미만 소고기를 먹고 왔어요 ㅠㅠ 오늘 장미를
            데리고 같이 재미있게 놀려고 했어요. 그래서 소고기 집에 갔어요. 저는
            육회를 먹으려고 했고, 장미한테는 소고기를 주려고 했는데 육회가 너무
            비싸서 결국 장미만 소고기를 먹고 왔어요 ㅠㅠ
          </S.Content>
        </S.TodayMungTitleContentWrapper>
        <S.Image />
      </S.TodayMungTitleContentImageWrapper>
    </S.TodayMungWrapper>
  );
}

export default TodayMungCard;
