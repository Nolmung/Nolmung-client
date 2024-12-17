/** 쿼리로 오는 동적 URL에도 탭바적용하기 위한 유틸함수  */
export const isTabActive = (tabPath: string, currentPath: string): boolean => {
  if (tabPath === '/todaymung' && currentPath.startsWith('/todaymung')) {
    return true;
  }

  return tabPath === currentPath;
};
