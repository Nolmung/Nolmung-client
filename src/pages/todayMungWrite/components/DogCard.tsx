import S from '../styles/DogCard.style';
import { useTodayMungStore } from '../stores/todayMungStore';
import { DogType } from '..';
import { useEffect } from 'react';

interface DogCardProps {
  data: DogType;
}

function DogCard({ data }: DogCardProps) {
  const { addDogIds, dogIds, deleteDogIds } = useTodayMungStore();
  const isDogSelected = dogIds.includes(data.dogId);
  const handlePetButtonClick = () => {
    if (isDogSelected) {
      deleteDogIds(data.dogId);
    } else {
      addDogIds(data.dogId);
    }
  };

  useEffect(() => {
    console.log(dogIds);
  }, [dogIds]);
  return (
    <S.PetButton onClick={handlePetButtonClick} selected={isDogSelected}>
      <S.PetImage src={data.profileUrl} />
      <S.PetName selected={isDogSelected}>{data.dogName}</S.PetName>
    </S.PetButton>
  );
}

export default DogCard;
