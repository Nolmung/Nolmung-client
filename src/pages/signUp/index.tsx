import { useSearchParams } from 'react-router-dom';

function SignUp() {
  const [searchParams] = useSearchParams();
  const userId = searchParams.get('id'); // '1'

  return <h1>{userId}님 로그인을 축하합니다. 놀멍입니다!</h1>;
}

export default SignUp;
