import { S } from '../styles/detail.styles';

import {
  AllKindDogAvailable,
  ParkAvailable,
  Under15Kilos,
  Under25Kilos,
} from '@/assets/images/svgs';

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
      <ParkAvailable width={48} height={48} />
      주차 가능
    </S.InfoIconWrapper>
  );
};

export const Under15KgInfoIcon = () => {
  return (
    <S.InfoIconWrapper>
      <Under15Kilos width={48} height={48} />
      15kg 이하 가능
    </S.InfoIconWrapper>
  );
};

export const Under25KgInfoIcon = () => {
  return (
    <S.InfoIconWrapper>
      <Under25Kilos width={48} height={48} />
      25kg 이하 가능
    </S.InfoIconWrapper>
  );
};
