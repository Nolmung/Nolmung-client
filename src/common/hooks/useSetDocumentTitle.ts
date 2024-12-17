import { useEffect } from 'react';

/** 페이지 타이틀 hook */
const useSetDocumentTitle = (title: string) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
};

export default useSetDocumentTitle;
