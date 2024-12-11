import Lottie from 'lottie-react';
import LoadingLottie from '@/assets/lottie/LoadingLottie.json';
import SkeletonLottie from '@/assets/lottie/SkeletonLottie.json';
import NolmungLottie from '@/assets/lottie/nolmungLottie.json';
import { S } from './index.style';

export const LoadingSpinnerLottie = () => {
  return (
    <S.Wrapper>
      <Lottie animationData={LoadingLottie} height={50} width={30} />
    </S.Wrapper>
  );
};

export const LoadingSkeletonLottie = () => {
  return (
    <S.Wrapper>
      <Lottie animationData={SkeletonLottie} height={50} width={30} />
    </S.Wrapper>
  );
};

export const LoadingNolmungLottie = () => {
  return (
    <S.Wrapper backgroundcolor={'#9EF99F'}>
      <Lottie animationData={NolmungLottie} height={50} width={30} />
    </S.Wrapper>
  );
};
