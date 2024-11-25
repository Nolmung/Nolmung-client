import { useNavigate } from 'react-router-dom';

import useScrollTop from './hooks/useScrollTop';
import * as S from './styles/detail.styles';

import {
  AllKindDogAvailable,
  BackArrowBlack,
  BackArrowWhite,
  FilledStar,
  ParkAvailable,
  UnderTenKilos,
} from '@/assets/images/svgs';
import { ROUTE } from '@/common/constants/route';

function Detail() {
  const navigate = useNavigate();
  const { scrollTop, scrollRef, handleScroll } = useScrollTop();

  const handleBackArrowClick = () => {
    navigate(ROUTE.MAIN());
  };

  return (
    <S.Wrapper
      ref={scrollRef}
      onScroll={handleScroll}
      style={{ height: '100vh', overflowY: 'scroll' }}
    >
      <S.Header isScrolled={scrollTop >= 70}>
        {scrollTop >= 70 ? (
          <>
            <BackArrowBlack onClick={handleBackArrowClick} width={24} />
            어반펫츠
          </>
        ) : (
          <BackArrowWhite onClick={handleBackArrowClick} width={24} />
        )}
      </S.Header>
      <S.GradientImage />
      <S.PlaceImage
        src={
          'https://search.pstatic.net/common/?src=https%3A%2F%2Fpup-review-phinf.pstatic.net%2FMjAyMzAzMjRfNDMg%2FMDAxNjc5NjIwOTQ3NTYy.1B9eCBDT-q7_2gBRC2TStYUdyOKj5iTOqXvooWrybCAg.O4xRVJYud0lWgLWcSG5JZsgm40eLM13ZhWi6Trr-Ui4g.JPEG%2F26F35176-1571-422B-97A5-2DC1164D772B.jpeg%3Ftype%3Dw1500_60_sharpen'
        }
        alt="시설 이미지"
      />
      <S.PlaceBasicInfo>
        <S.PlaceName>어반펫츠</S.PlaceName>
        <S.PlaceBriefReview>
          <FilledStar width={16} />
          <S.StarAverage>4.5</S.StarAverage>
          <S.PlaceReviewCount>리뷰 125</S.PlaceReviewCount>
        </S.PlaceBriefReview>
        <S.PlaceRoadAddress>서울 용산구 한강대로 21길 7</S.PlaceRoadAddress>
        <S.PlaceInfoIcons>
          <S.InfoIconWrapper>
            <AllKindDogAvailable width={48} height={48} />
            모든 견종
          </S.InfoIconWrapper>
          <S.InfoIconWrapper>
            <ParkAvailable width={48} height={48} />
            주차 가능
          </S.InfoIconWrapper>
          <S.InfoIconWrapper>
            <UnderTenKilos width={48} height={48} />
            10kg 이하 가능
          </S.InfoIconWrapper>
        </S.PlaceInfoIcons>
      </S.PlaceBasicInfo>
      <div style={{ height: '150%' }}></div>
    </S.Wrapper>
  );
}

export default Detail;
