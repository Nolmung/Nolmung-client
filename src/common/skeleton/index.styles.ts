import styled, { keyframes } from 'styled-components';

const shimmer = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

const SkeletonBox = styled.div<{
  width: string;
  height: string;
  borderRadius?: string;
}>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background: linear-gradient(
    90deg,
    #f0f0f0 25%,
    #e0e0e0 50%,
    #f0f0f0 75%
  );
  background-size: 200% 100%;
  border-radius: ${({ borderRadius }) => borderRadius || '4px'};
  animation: ${shimmer} 1.5s infinite;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 180px;
  padding: 0 28px;
  background-color: #fff;
  border-radius: 20px 20px 0 0;
  align-items: center;
  border-bottom: none;
  display: flex;
  justify-content: space-between;
`;

const Container = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: space-between;
`;

const PlaceNameCategoryWrapper = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  flex-wrap: wrap;
`;

const PlaceReviewWrapper = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
`;

const PlaceInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const InfoTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

const ImageWrapper = styled.div`
  position: relative;
  height: 100%;
  border-radius: 5px;
  box-sizing: border-box;
`;

const S = {
  shimmer,
  SkeletonBox,
  Wrapper,
  Container,
  PlaceNameCategoryWrapper,
  PlaceReviewWrapper,
  PlaceInfoWrapper,
  InfoTextWrapper,
  ImageWrapper,
};

export default S;