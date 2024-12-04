import { userReview } from '@/mocks/data/userReview';
import ReviewCard from './components/ReviewCard';
import S from './styles/index.style';
function MyReview() {
  return (
    <S.Wrapper>
      {userReview.map((review) => (
        <ReviewCard data={review} />
      ))}
    </S.Wrapper>
  );
}

export default MyReview;
