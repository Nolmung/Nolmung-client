import { SearchHistoryItem } from '..';

export function updateSearchHistory(
  searchHistory: SearchHistoryItem[],
  newSearchItem: SearchHistoryItem,
): SearchHistoryItem[] {
  const updatedHistory = [...searchHistory, newSearchItem];
  localStorage.setItem('searchHistory', JSON.stringify(updatedHistory));
  return updatedHistory;
}

export function formatDate(date: Date): string {
  return `${String(date.getMonth() + 1).padStart(2, '0')}.${String(
    date.getDate(),
  ).padStart(2, '0')}`;
}

export function clearSearchHistory(): SearchHistoryItem[] {
  localStorage.removeItem('searchHistory');
  return [];
}

export function deleteSearchKeyword(
  searchHistory: SearchHistoryItem[],
  id: number,
): SearchHistoryItem[] {
  const updatedHistory = searchHistory.filter((item) => item.id !== id);
  localStorage.setItem('searchHistory', JSON.stringify(updatedHistory));
  return updatedHistory;
}

export function handleInputChange(
  setState: React.Dispatch<React.SetStateAction<string>>,
) {
  return (e: React.ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value);
  };
}
