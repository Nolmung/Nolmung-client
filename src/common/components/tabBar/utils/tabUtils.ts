export const isTabActive = (tabPath: string, currentPath: string): boolean => {
  if (tabPath === '/todaymung' && currentPath.startsWith('/todaymung')) {
    return true;
  }

  return tabPath === currentPath;
};
