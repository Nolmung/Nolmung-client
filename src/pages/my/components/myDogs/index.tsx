import { S } from '../../styles/myDogs.styles';
import { useLocation, useNavigate } from 'react-router-dom';
import PetProfileCard from '../profile/index';
import { ROUTE } from '@common/constants/route';
import { PlusIcon } from '@/assets/images/svgs';
import { useGetDogs } from '@/pages/todaymungWrite/queries';

const MyDogs = () => {
  const a = useGetDogs();
  console.log(a);
  const { state } = useLocation();
  const { dogData, nickname } = state || {};
  const navigate = useNavigate();
  const handleDogRegisterClick = () => {
    navigate(ROUTE.MY_DOGS_ADD(), {
      state: { dogData: dogData, nickname: nickname! },
    });
  };
  return (
    <S.Wrapper>
      {dogData && dogData.length > 0 ? (
        dogData.map((data: any) => {
          return (
            <PetProfileCard
              data={data}
              key={data.dogId}
              userNickname={nickname}
            />
          );
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
