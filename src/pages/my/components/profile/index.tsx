import { DogSize, DogType } from '@/service/apis/user/index.types';
import S from '../../styles/profile.styles';
import DefaultDogImg1 from '@/assets/images/pngs/default_dog_image_1.png';
import { DogSizeMapping } from '../../constants/DogSizeMapping';
import { calculateAge } from '../../utils/calculateAge';

interface PetProfileProps {
  data?: DogType;
  isActive: boolean;
  editId: number;
  setEditId: (dogId: number) => void;
}

function PetProfileCard({ data, isActive, editId, setEditId }: PetProfileProps) {
  const dogSize = DogSizeMapping[data!.size as DogSize];
  const age = calculateAge(data!.birth);

  const handleCardClick = (dogId: number) => {
    if (editId === dogId) {
      setEditId(0);
    } else {
      setEditId(dogId);
    }
  };

  return (
    <>
      {data ? (
        <S.Wrapper isActive={isActive} onClick={() => handleCardClick(data.dogId)}>
          <S.Container>
            <S.ProfileWrapper>
              {/** @Todo api 붙일 때 Default -> data. profileUrl로 변경하기*/}
              <S.ProfileContainer>
                <S.ProfileImg width={68} height={68} src={DefaultDogImg1} />
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
        <S.Wrapper isActive={isActive}>
          <S.NoDataText>반려견을 등록해보세요!</S.NoDataText>
        </S.Wrapper>
      )}
    </>
  );
}

export default PetProfileCard;
