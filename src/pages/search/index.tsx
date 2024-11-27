import { S } from './styles/index.style';

import { GoBackIcon } from '@/assets/images/svgs';
import SearchInput from '@/common/components/searchInput';

import { useState } from 'react';
import NoSearchHistory from './components/NoSearchHistory';
import SearchHistoryList from './components/SearchHistoryList';
import { useNavigate } from 'react-router-dom';
import { ROUTE } from '@/common/constants/route';

export interface SearchHistoryItem {
  id: number;
  keyword: string;
  createdAt: string;
}

function Search() {
  const navigate = useNavigate();

  const [searchHistory, setSearchHistory] = useState<SearchHistoryItem[]>(
    () => {
      const storedHistory = localStorage.getItem('searchHistory');
      return storedHistory ? JSON.parse(storedHistory) : [];
    },
  );
  const [searchInputValue, setSearchInputValue] = useState<string>('');

  const handleSearchInputValueChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setSearchInputValue(e.target.value);
  };

  const handleSearchIconClick = () => {
    if (!searchInputValue.trim()) return;

    const now = new Date();

    /** MM-DD 형식 */
    const formattedDate = `${String(now.getMonth() + 1).padStart(2, '0')}.${String(
      now.getDate(),
    ).padStart(2, '0')}`;

    const newSearchItem: SearchHistoryItem = {
      id: Date.now(), //
      keyword: searchInputValue.trim(),
      createdAt: formattedDate,
    };

    const updatedHistory = [...searchHistory, newSearchItem];
    setSearchHistory(updatedHistory);

    localStorage.setItem('searchHistory', JSON.stringify(updatedHistory));

    setSearchInputValue('');
    navigate(ROUTE.MAIN() + '?search=' + searchInputValue);
  };

  const handleClearAll = () => {
    window.confirm('삭제하시겠습니까?');
    setSearchHistory([]);
    localStorage.removeItem('searchHistory');
  };

  const handleDeleteKeyword = (id: number) => {
    const updatedHistory = searchHistory.filter((item) => item.id !== id);
    setSearchHistory(updatedHistory);
    localStorage.setItem('searchHistory', JSON.stringify(updatedHistory));
  };

  const handleGoBackIconClick = () => {
    /** @Todo 추후 맥락 보고 수정 */
    navigate(-1);
  };

  return (
    <div
      style={{
        height: 'calc(100dvh - 90px)',
        width: '100%',
      }}
    >
      <S.Header>
        <S.IconWrapper onClick={handleGoBackIconClick}>
          <GoBackIcon />
        </S.IconWrapper>
        <SearchInput
          value={searchInputValue}
          onChange={handleSearchInputValueChange}
          onClick={handleSearchIconClick}
          width={90}
        />
      </S.Header>
      <S.Menu>
        최근 검색어
        <S.ClearAllButton onClick={handleClearAll}>전체삭제</S.ClearAllButton>
      </S.Menu>
      <S.SearchHistoryList>
        {searchHistory.length > 0 ? (
          <SearchHistoryList
            searchHistory={searchHistory}
            handleDeleteKeyword={handleDeleteKeyword}
          />
        ) : (
          <NoSearchHistory />
        )}
      </S.SearchHistoryList>
    </div>
  );
}

export default Search;
