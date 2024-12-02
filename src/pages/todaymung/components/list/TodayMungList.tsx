import { S } from './TodayMungList.style';
import { CardDataType } from './TodayMungList.type';
import TodayMungListCard from '../listCard/TodayMungListCard';
import { todaymungData } from '../../constants/todaymungData';

const TodayMungList = () => {
  return (
    <S.Wrapper>
      {todaymungData.map((data: CardDataType, idx: number) => {
        return <TodayMungListCard key={idx} data={data} />;
      })}
    </S.Wrapper>
  );
};

export default TodayMungList;
