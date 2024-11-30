import { S } from './TodayMungList.style';
import { CardDataType } from './TodayMungList.type';
import { todaymungData } from '../../constants/TodaymungData';
import TodayMungListCard from '../listCard/TodayMungListCard';

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
