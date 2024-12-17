import { LiedownDog } from '@/assets/images/svgs';
import { S } from './index.style';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTE } from '@/common/constants/route';
/** 404 페이지 */
function NotFound() {
  const [count, setCount] = useState(3);

  const navigate = useNavigate();

  setTimeout(() => {
    setCount(count - 1);
  }, 1000);

  setTimeout(() => {
    navigate(ROUTE.MAIN(), { replace: true });
  }, 3000);

  return (
    <S.Wrapper>
      <S.Title>
        페이지가 도망갔어요! <br /> 우리도 열심히 찾아볼게요.
      </S.Title>
      <LiedownDog />
      <S.Description>
        <S.Emphasize>{count}</S.Emphasize>초 후에 메인페이지로 이동합니다.
      </S.Description>
    </S.Wrapper>
  );
}

export default NotFound;
