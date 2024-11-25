import { useEffect, useRef, useState } from 'react';

import * as S from './styles/detail.styles';

import { BackArrowBlack, BackArrowWhite } from '@/assets/images/svgs';

function Detail() {
  const [scrollTop, setScrollTop] = useState<number>(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (scrollRef.current) {
      setScrollTop(scrollRef.current.scrollTop);
    }
  };

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <S.Wrapper
      ref={scrollRef}
      onScroll={handleScroll}
      style={{ height: '100vh', overflowY: 'scroll' }}
    >
      <S.Header isScrolled={scrollTop >= 70}>
        {scrollTop >= 70 ? (
          <>
            <BackArrowBlack width={24} />
            어반펫츠
          </>
        ) : (
          <BackArrowWhite width={24} />
        )}
      </S.Header>
      <S.PlaceImage
        src={
          'https://search.pstatic.net/common/?src=https%3A%2F%2Fpup-review-phinf.pstatic.net%2FMjAyMzAzMjRfNDMg%2FMDAxNjc5NjIwOTQ3NTYy.1B9eCBDT-q7_2gBRC2TStYUdyOKj5iTOqXvooWrybCAg.O4xRVJYud0lWgLWcSG5JZsgm40eLM13ZhWi6Trr-Ui4g.JPEG%2F26F35176-1571-422B-97A5-2DC1164D772B.jpeg%3Ftype%3Dw1500_60_sharpen'
        }
        alt="시설 이미지"
      />
    </S.Wrapper>
  );
}

export default Detail;
