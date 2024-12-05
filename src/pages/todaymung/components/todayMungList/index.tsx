import { S } from '../../styles/TodayMungList.style';
import { ListDataProps } from '../../types/TodayMungList.type';
import TodayMungListCard from '../todayMungListCard';
const TodayMungList = ({ listData }: ListDataProps) => {
  console.log(listData.diaries);
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
