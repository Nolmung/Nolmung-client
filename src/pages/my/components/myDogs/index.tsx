import { S } from '../../styles/myDogs.styles';
import { useLocation, useNavigate } from 'react-router-dom';
import PetProfileCard from '../profile/index';
import { ROUTE } from '@common/constants/route';
import { PlusIcon } from '@/assets/images/svgs';

const MyDogs = () => {
  const location = useLocation();
  const { state } = location || {};
  const navigate = useNavigate();
  const handleDogRegisterClick = () => {
    navigate(ROUTE.DOGS());
  };
  return (
    <S.Wrapper>
      {state && state.length > 0 ? (
        state.map((data: any) => {
          return <PetProfileCard data={data} key={data.dogId} />;
        })
      ) : (
        <div>존재하지 않아용</div>
      )}
      <S.ButtonArea onClick={handleDogRegisterClick}>
        <PlusIcon fill="#a7a7a7" />
        <S.NoDataText>반려견 추가하기</S.NoDataText>
      </S.ButtonArea>
    </S.Wrapper>
  );
};

export default MyDogs;
