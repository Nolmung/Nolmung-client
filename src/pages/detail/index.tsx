import { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom';

import {
  AllKindDogAvailableInfoIcon,
  InsideInfoIcon,
  OutsideInfoIcon,
  ParkAvailableInfoIcon,
  Under15KgInfoIcon,
  Under25KgInfoIcon,
} from './components/InfoIcons';
import KeywordReview from './components/KeywordReview';
import TodayMungCard from './components/TodayMungCard';
import useScrollTop from './hooks/useScrollTop';
import { S } from './styles/detail.styles';

import {
  BackArrowBlack,
  BackArrowWhite,
  Phone,
  Price,
  Time,
} from '@/assets/images/svgs';
import { ROUTE } from '@/common/constants/route';
import { useGetPostDetail } from './querys';
import { PlacePrice } from '@/common/types';
import findLabelNameById from '@/common/utils/findLabelNameById';
import { match } from 'ts-pattern';
import useSetDocumentTitle from '@/common/hooks/useSetDocumentTitle';
import { LoadingSpinnerLottie } from '@/common/components/lottie';
import { NoResultStandUI } from '@/common/components/noResultUI';

function Detail() {
  const navigate = useNavigate();
  const { scrollTop, scrollRef, handleScroll } = useScrollTop();
  const [visibleTodayMungCard, setVisibleTodayMungCard] = useState(3);
  const { placeId } = useParams();
  const { data, isLoading, isError } = useGetPostDetail(placeId!);
  useSetDocumentTitle(data?.placeName || '');

  const handleBackArrowClick = () => {
    navigate(ROUTE.MAIN());
  };

  const handleViewMoreButtonClick = () => {
    setVisibleTodayMungCard((prev) => prev + 3);
  };

  if (isLoading) return <LoadingSpinnerLottie />;
  if (isError || !data) return <p>Error loading post detail</p>;

  const reviewCount = data.labels?.reduce((acc, cur) => {
    return acc + cur.labelCount;
  }, 0);

  const openingHour = data.openHour?.split(' ');

  const isPriceAvailable = (price: PlacePrice) => {
    return price == '변동' || price == '없음';
  };

  console.log(data);

  return (
    <S.Wrapper ref={scrollRef} onScroll={handleScroll}>
      <S.Header isScrolled={scrollTop >= 70}>
        {scrollTop >= 70 ? (
          <>
            <BackArrowBlack onClick={handleBackArrowClick} width={24} />
            {data.placeName}
          </>
        ) : (
          <BackArrowWhite onClick={handleBackArrowClick} width={24} />
        )}
      </S.Header>
      <S.GradientImage />
      <S.PlaceImage src={data.placeImgUrl} alt="시설 이미지" />
      <S.PlaceInfo>
        <S.PlaceName> {data.placeName}</S.PlaceName>
        <S.PlaceBriefReview>
          <FaStar size="16" color="#F4E600" />
          <S.StarAverage>{data.starRatingAvg}</S.StarAverage>
          <S.PlaceReviewCount>
            리뷰
            {reviewCount}
          </S.PlaceReviewCount>
        </S.PlaceBriefReview>
        <S.PlaceRoadAddress>{data.address}</S.PlaceRoadAddress>
        <S.PlaceInfoIcons>
          {match(data.acceptSize)
            .with('S', () => <Under15KgInfoIcon />)
            .with('M', () => <Under25KgInfoIcon />)
            .with('L', () => <AllKindDogAvailableInfoIcon />)
            .with('ALL', () => <AllKindDogAvailableInfoIcon />)
            .exhaustive()}
          {data.parkingYn && <ParkAvailableInfoIcon />}
          {data.outPossibleYn && <OutsideInfoIcon />}
          {data.inPossibleYn && <InsideInfoIcon />}
        </S.PlaceInfoIcons>
      </S.PlaceInfo>
      <S.PlaceDetailWrapper>
        <S.PlaceDetail>
          <Time width={18} height={18} />
          {openingHour?.length == 1 ? (
            <>{openingHour[0]}</>
          ) : (
            <>
              <S.PlaceDetailMenu>{openingHour[0]}</S.PlaceDetailMenu>
              {openingHour[1]}
            </>
          )}
        </S.PlaceDetail>
        <S.PlaceDetail style={{ marginBottom: '30px' }}>
          <Time width={18} height={18} />
          <S.PlaceDetailMenu> 휴일</S.PlaceDetailMenu>
          {data.holiday}
        </S.PlaceDetail>
        {!isPriceAvailable(data.price) && (
          <S.PlaceDetail>
            <Price width={18} height={18} />
            <S.PlaceDetailMenu>이용 가격</S.PlaceDetailMenu>
            {data.price}
          </S.PlaceDetail>
        )}
        {!isPriceAvailable(data.extraPrice) && (
          <S.PlaceDetail>
            <Price width={18} height={18} />
            <S.PlaceDetailMenu>추가 금액</S.PlaceDetailMenu>
            {data.extraPrice}
          </S.PlaceDetail>
        )}
        <S.PlaceDetail>
          <Phone width={18} height={18} />
          <S.PlaceDetailMenu>전화</S.PlaceDetailMenu>
          <S.PhoneNumberLink href={`tel:${data.phone}`}>
            {data.phone}
          </S.PhoneNumberLink>
        </S.PlaceDetail>
      </S.PlaceDetailWrapper>
      <S.PlaceDetailWrapper>
        <S.ReviewTitle>
          방문자 리뷰
          <S.ReviewCount>{reviewCount}</S.ReviewCount>
        </S.ReviewTitle>
        <S.KeywordReviews>
          {!data?.labels.length && (
            <NoResultStandUI content={'아직 리뷰가 없다 멍 !'} />
          )}
          {data.labels?.map((item) => (
            <KeywordReview
              key={item.labelId}
              Keyword={findLabelNameById(item.labelId)}
              KeywordCount={item.labelCount}
              KeywordPercent={(item.labelCount / reviewCount) * 100}
            />
          ))}
        </S.KeywordReviews>
      </S.PlaceDetailWrapper>
      <S.PlaceDetailWrapper>
        <S.ReviewTitle>
          오늘멍
          <S.ReviewCount>{data.diaries?.length}</S.ReviewCount>
        </S.ReviewTitle>
        {data.diaries
          ?.slice(0, visibleTodayMungCard)
          .map((card) => <TodayMungCard key={card.diaryId} card={card} />)}

        {visibleTodayMungCard < data.diaries?.length && (
          <S.ViewMoreButtonWrapper>
            <S.ViewMoreButton onClick={handleViewMoreButtonClick}>
              더보기
            </S.ViewMoreButton>
          </S.ViewMoreButtonWrapper>
        )}
      </S.PlaceDetailWrapper>
    </S.Wrapper>
  );
}

export default Detail;
