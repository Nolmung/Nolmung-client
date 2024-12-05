import { S } from '../../styles/TodayMungList.style';
import { ListDataProps } from '../../types/TodayMungList.type';
import TodayMungListCard from '../todayMungListCard';
import NoDiaryList from '../noDiaryList';
const TodayMungList = ({ listData }: ListDataProps) => {
  const { diaries } = listData;
  if (diaries.length === 0) {
    return <NoDiaryList />;
  }
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
