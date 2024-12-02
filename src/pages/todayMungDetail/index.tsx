import { useLocation } from 'react-router-dom';

const TodayMungDetail = () => {
  const location = useLocation();
  const diary = location.state;
  console.log(diary);
  return <div>디테일페이지임</div>;
};

export default TodayMungDetail;
