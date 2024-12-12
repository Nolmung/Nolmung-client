import { S } from '../../styles/myDogs.styles';
import { useLocation, useNavigate } from 'react-router-dom';
import PetProfileCard from '../profile/index';
import { ROUTE } from '@common/constants/route';
import { PlusIcon } from '@/assets/images/svgs';
import { useGetDogsList } from '../../hooks';
import { LoadingSpinnerLottie } from '@/common/components/lottie';
import { toast } from 'react-toastify';

const MyDogs = () => {
  const { data: dogListData, isLoading } = useGetDogsList();
  const { state } = useLocation();
  const { dogData, nickname } = state || {};
  const navigate = useNavigate();
  const handleDogRegisterClick = () => {
    if ((dogListData?.length ?? 0) >= 5) {
      toast.error('반려견은 최대 5마리까지만 등록할 수 있습니다.');
    } else {
      navigate(ROUTE.MY_DOGS_ADD(), {
        state: { dogData: dogData, nickname: nickname! },
      });
    }
  };
  if (isLoading) {
    return LoadingSpinnerLottie();
  }
  return (
    <S.Wrapper>
      {dogListData && dogListData.length > 0 ? (
        dogListData.map((data: any) => {
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
