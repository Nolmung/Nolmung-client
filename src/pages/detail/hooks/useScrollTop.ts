import { useEffect, useRef, useState } from 'react';
import { debounce } from 'lodash';

const useScrollTop = () => {
  const [scrollTop, setScrollTop] = useState<number>(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = debounce(() => {
    if (scrollRef.current) {
      setScrollTop(scrollRef.current.scrollTop);
    }
  }, 50);

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

  return { scrollTop, scrollRef, handleScroll };
};

export default useScrollTop;
