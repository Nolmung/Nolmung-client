import { useState } from 'react';
import S from '../styles/index.style';

interface DogCardProps {
  dogName: string;
  profileUrl: string;
}

function DogCard({ dogName, profileUrl }: DogCardProps) {
  const [selected, setSelected] = useState(false);
  const handlePetButtonClick = () => {
    setSelected(!selected);
  };
  return (
    <S.PetButton onClick={handlePetButtonClick} selected={selected}>
      <S.PetImage src={profileUrl} />
      <S.PetName selected={selected}>{dogName}</S.PetName>
    </S.PetButton>
  );
}

export default DogCard;
