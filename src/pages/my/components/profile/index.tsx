import { DogSize } from '@/service/apis/user/index.types';
import S from '../../styles/profile.styles';
import { DogSizeMapping } from '../../constants/DogSizeMapping';
import { calculateAge } from '../../utils/calculateAge';
import { DogType } from '@/service/apis/dog/index.type';
import { useNavigate } from 'react-router-dom';
import { ROUTE } from '@common/constants/route';

interface PetProfileProps {
  data?: DogType;
  editId: number;
  setEditId: (dogId: number) => void;
}

function PetProfileCard({ data, editId, setEditId }: PetProfileProps) {
  const navigate = useNavigate();
  /** @Todo 반려견 정보 등록 후에 타입 수정하기 */
  const dogSize = data ? DogSizeMapping[data.size as DogSize] : '';

  const age = calculateAge(data?.birth);

  const handleCardClick = (dogId: number) => {
    if (editId === dogId) {
      setEditId(0);
      navigate(ROUTE.DOGSEDIT(dogId));
    } else {
      setEditId(dogId);
    }
  };

  const handleDogRegisterClick = () => {
    navigate(ROUTE.DOGS());
  };

  return (
    <>
      {data ? (
        <S.Wrapper onClick={() => handleCardClick(data.dogId)}>
          <S.Container>
            <S.ProfileWrapper>
              <S.ProfileContainer>
                <S.ProfileImg width={68} height={68} src={data.profileUrl} />
              </S.ProfileContainer>
              <S.ProfileTextWrapper>
                <S.ProfileNameText>{data.dogName}</S.ProfileNameText>
                <S.ProfileLabelWrapper>
                  <S.ProfileLabel>{data.dogType}</S.ProfileLabel>
                  <S.LabelSeparate />
                  <S.ProfileLabel>{age}살</S.ProfileLabel>
                  <S.LabelSeparate />
                  <S.ProfileLabel>{dogSize}</S.ProfileLabel>
                </S.ProfileLabelWrapper>
              </S.ProfileTextWrapper>
            </S.ProfileWrapper>
          </S.Container>
        </S.Wrapper>
      ) : (
        <S.Wrapper>
          <S.NoDataText onClick={handleDogRegisterClick}>
            반려견을 등록해보세요!
          </S.NoDataText>
        </S.Wrapper>
      )}
    </>
  );
}

export default PetProfileCard;
