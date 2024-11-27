import TodayMungListCard from '../listCard/TodayMungListCard';

interface CardDataType {
  name: string;
  title: string;
  img: string;
  date: string;
  content: string;
}

const mockData = [
  {
    name: '효링디링',
    title: '통장이 거덜나도 장미만 행복하면',
    img: '/svgs/vite.svg',
    date: '24.12.4',
    content:
      '오늘 장미를 데리고 같이 재미있게 놀려고 했어요. 그래서 소고기 집에 갔어요. 저는 육회를 먹으려고 했고, 장미한테는 소고기를 주려고 했는데 육회가 너무 비싸서 결국 장미만 소고기를 먹고 왔어요 ㅠㅠ',
  },
  {
    name: '효링디링',
    title: '햇살 좋은 날 햇님이랑 여기저기 돌아다닌 하루',
    img: '/svgs/vite.svg',
    date: '24.4.27',
    content:
      '오늘은 진짜 날씨가 좋았다. 했님이랑 산책 나온김에 동네 탐방을 시작한 하루! 카페 가서 멍푸치노 시켜줬는데 잘 안먹더라.. 나만 아인슈페너 잘 마셨다.',
  },
];

const TodayMungList = () => {
  return (
    <>
      {mockData.map((data: CardDataType, idx: number) => {
        return <TodayMungListCard key={idx} data={data} />;
      })}
    </>
  );
};

export default TodayMungList;
