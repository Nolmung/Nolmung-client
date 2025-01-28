import S from '../styles/DogCard.style';
import { useTodayMungStore } from '../stores/todayMungStore';
import { DogType } from '@/service/apis/dog/index.type';
import ReactGA from 'react-ga4';
interface DogCardProps {
  data: DogType;
}

function DogCard({ data }: DogCardProps) {
  const { addDogs, dogs, deleteDogs } = useTodayMungStore();
  const isDogSelected = dogs.includes(data.dogId);
  const handlePetButtonClick = () => {
    if (isDogSelected) {
      deleteDogs(data.dogId);
      ReactGA.event({
        category: 'User Interaction',
        action: 'Click Delete Dog Card',
        label: `User clicked on dog: ${data.dogName}`,
      });
    } else {
      addDogs(data.dogId);
      ReactGA.event({
        category: 'User Interaction',
        action: 'Click Add Dog Card',
        label: `User clicked on dog: ${data.dogName}`,
      });
    }
  };
  return (
    <S.PetButton onClick={handlePetButtonClick} selected={isDogSelected}>
      <S.PetImage
        alt="반려견 프로필 이미지"
        src={data.profileUrl}
        onError={(e) => {
          e.currentTarget.src = '/webps/emptyImg.webp';
        }}
      />
      <S.PetName
        aria-label={`반려견 이름: ${data.dogName}`}
        selected={isDogSelected}
      >
        {data.dogName}
      </S.PetName>
    </S.PetButton>
  );
}

export default DogCard;
