import S from './index.styles';

export const PlaceSkeletonUI = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.PlaceInfoWrapper>
          <S.InfoTextWrapper>
            <S.PlaceNameCategoryWrapper>
              <S.SkeletonBox width="80px" height="20px" />
              <S.SkeletonBox width="60px" height="20px" />
            </S.PlaceNameCategoryWrapper>
            <S.PlaceReviewWrapper>
              <S.SkeletonBox width="40px" height="16px" />
              <S.SkeletonBox width="50px" height="16px" />
            </S.PlaceReviewWrapper>
          </S.InfoTextWrapper>
        </S.PlaceInfoWrapper>
        <S.ImageWrapper>
          <S.SkeletonBox width="120px" height="120px" borderRadius="10px" />
        </S.ImageWrapper>
      </S.Container>
    </S.Wrapper>
  );
};

