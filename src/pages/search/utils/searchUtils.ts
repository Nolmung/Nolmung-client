import { SearchHistoryItem } from '..';

export const updateSearchHistory = (
  searchHistory: SearchHistoryItem[],
  newSearchItem: SearchHistoryItem,
): SearchHistoryItem[] => {
  const updatedHistory = [newSearchItem, ...searchHistory];

  const uniqueHistory = updatedHistory.reduce<SearchHistoryItem[]>(
    (acc, curr) => {
      if (!acc.find((item) => item.keyword === curr.keyword)) {
        acc.push(curr);
      }
      return acc;
    },
    [],
  );

  localStorage.setItem('searchHistory', JSON.stringify(uniqueHistory));
  return uniqueHistory;
};
export const formatDate = (date: Date): string => {
  return `${String(date.getMonth() + 1).padStart(2, '0')}.${String(
    date.getDate(),
  ).padStart(2, '0')}`;
};

export const clearSearchHistory = (): SearchHistoryItem[] => {
  localStorage.removeItem('searchHistory');
  return [];
};

export const deleteSearchKeyword = (
  searchHistory: SearchHistoryItem[],
  id: number,
): SearchHistoryItem[] => {
  const updatedHistory = searchHistory.filter((item) => item.id !== id);
  localStorage.setItem('searchHistory', JSON.stringify(updatedHistory));
  return updatedHistory;
};

export const handleInputChange = (
  setState: React.Dispatch<React.SetStateAction<string>>,
) => {
  return (e: React.ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value);
  };
};
