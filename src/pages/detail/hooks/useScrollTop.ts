import { useEffect, useRef, useState } from 'react';

const useScrollTop = () => {
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

  return { scrollTop, scrollRef, handleScroll };
};

export default useScrollTop;
