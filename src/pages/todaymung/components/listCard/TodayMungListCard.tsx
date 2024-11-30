import { S } from './TodayMungListCard.style';
import { CardDataType } from './TodayMungListCard.type';

const TodayMungListCard = ({ data }: CardDataType) => {
  return (
    <S.Wrap>
      <S.UserInfoArea>
        <S.ProfileImg />
        <S.UserInfoTextArea>
          <S.UserName>{data.name}</S.UserName>
          <S.PostDate>{data.date}</S.PostDate>
        </S.UserInfoTextArea>
      </S.UserInfoArea>
      <S.ContentArea>
        <S.ContentTextArea>
          <S.ContentTitle>{data.title}</S.ContentTitle>
          <S.ContentDescription>{data.content}</S.ContentDescription>
        </S.ContentTextArea>
        {data.img && (
          <S.ContentImgArea>
            <S.ContentImg src={data.img} />
          </S.ContentImgArea>
        )}
      </S.ContentArea>
    </S.Wrap>
  );
};

export default TodayMungListCard;
