import S from '../styles/DogCard.style';
import { useTodayMungStore } from '../stores/todayMungStore';
import { DogType } from '@/service/apis/dog/index.type';

interface DogCardProps {
  data: DogType;
}

function DogCard({ data }: DogCardProps) {
  const { addDogs, dogs, deleteDogs } = useTodayMungStore();
  const isDogSelected = dogs.includes(data.dogId);
  const handlePetButtonClick = () => {
    if (isDogSelected) {
      deleteDogs(data.dogId);
    } else {
      addDogs(data.dogId);
    }
  };

  return (
    <S.PetButton onClick={handlePetButtonClick} selected={isDogSelected}>
      <S.PetImage
        src={data.profileUrl}
        onError={(e) => {
          e.currentTarget.src = '/svgs/todayMungNoListIcon.svg';
        }}
      />
      <S.PetName selected={isDogSelected}>{data.dogName}</S.PetName>
    </S.PetButton>
  );
}

export default DogCard;
