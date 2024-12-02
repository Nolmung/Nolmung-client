import { S } from '../../styles/TodayMungList.style';
import { ListDataProps } from '../../types/TodayMungList.type';
import TodayMungListCard from '../listCard/TodayMungListCard';
const TodayMungList = ({ listData }: ListDataProps) => {
  return (
    <S.Wrapper>
      {listData.diaries.map((data) => {
        return (
          <TodayMungListCard
            key={data.diaryId}
            data={data}
            listData={listData}
          />
        );
      })}
    </S.Wrapper>
  );
};

export default TodayMungList;
