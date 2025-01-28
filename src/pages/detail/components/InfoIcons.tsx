import { S } from '../styles/detail.styles';

import {
  AllKindDogAvailable,
  InsideIcon,
  OutsideIcon,
  ParkAvailable,
  Under15Kilos,
  Under25Kilos,
} from '@/assets/images/svgs';

export const AllKindDogAvailableInfoIcon = () => {
  return (
    <S.InfoIconWrapper aria-label="모든 견종 출입 가능">
      <AllKindDogAvailable width={48} height={48} />
      모든 견종
    </S.InfoIconWrapper>
  );
};

export const ParkAvailableInfoIcon = () => {
  return (
    <S.InfoIconWrapper aria-label="주차 가능">
      <ParkAvailable width={48} height={48} />
      주차 가능
    </S.InfoIconWrapper>
  );
};

export const Under15KgInfoIcon = () => {
  return (
    <S.InfoIconWrapper aria-label="15kg 이하 가능">
      <Under15Kilos width={48} height={48} />
      15kg 이하 가능
    </S.InfoIconWrapper>
  );
};

export const Under25KgInfoIcon = () => {
  return (
    <S.InfoIconWrapper aria-label="25kg 이하 가능">
      <Under25Kilos width={48} height={48} />
      25kg 이하 가능
    </S.InfoIconWrapper>
  );
};

export const InsideInfoIcon = () => {
  return (
    <S.InfoIconWrapper aria-label="실내 출입 가능">
      <InsideIcon width={48} height={48} />
      실내 출입 가능
    </S.InfoIconWrapper>
  );
};

export const OutsideInfoIcon = () => {
  return (
    <S.InfoIconWrapper aria-label="실외 출입 가능">
      <OutsideIcon width={48} height={48} />
      실외 출입 가능
    </S.InfoIconWrapper>
  );
};
