import * as S from '../styles/detail.styles';

import { AllKindDogAvailable, UnderTenKilos } from '@/assets/images/svgs';

export const AllKindDogAvailableInfoIcon = () => {
  return (
    <S.InfoIconWrapper>
      <AllKindDogAvailable width={48} height={48} />
      모든 견종
    </S.InfoIconWrapper>
  );
};

export const ParkAvailableInfoIcon = () => {
  return (
    <S.InfoIconWrapper>
      <AllKindDogAvailable width={48} height={48} />
      모든 견종
    </S.InfoIconWrapper>
  );
};

export const UnderTenKilosInfoIcon = () => {
  return (
    <S.InfoIconWrapper>
      <UnderTenKilos width={48} height={48} />
      10kg 이하 가능
    </S.InfoIconWrapper>
  );
};
