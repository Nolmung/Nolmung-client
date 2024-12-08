import GuestRecommend from "./index.guest";
import UserRecommend from "./index.user";

function Recommend() {
    const isGuest = localStorage.getItem('accessToken') === null || localStorage.getItem('accessToken') === undefined;

    return isGuest ? <GuestRecommend/> : <UserRecommend/>;
  
}
export default Recommend;
