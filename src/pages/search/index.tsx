import { S } from './styles/index.style';

import { GoBackIcon } from '@/assets/images/svgs';
import SearchInput from '@/common/components/searchInput';

import { useState } from 'react';
import NoSearchHistory from './components/NoSearchHistory';
import SearchHistoryList from './components/SearchHistoryList';
import { useNavigate } from 'react-router-dom';
import { ROUTE } from '@/common/constants/route';
import Modal from '@/common/components/modal';
import useModal from '@/common/hooks/useModal';
import Button from '@/common/components/button/Button';

export interface SearchHistoryItem {
  id: number;
  keyword: string;
  createdAt: string;
}

function Search() {
  const navigate = useNavigate();
  const { isOpen, openModal, closeModal } = useModal();

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

  const handleModalYesButtonClick = () => {
    setSearchHistory([]);
    localStorage.removeItem('searchHistory');
    closeModal();
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
    <S.Wrapper>
      {isOpen && (
        <Modal isOpen={isOpen} closeModal={closeModal}>
          <S.ModalContent>
            모두 지우시겠습니까?
            <S.ModalButtonWrapper>
              <Button
                fontSize="18px"
                fontWeight="500"
                label="아니오"
                onClick={() => closeModal()}
              />
              <Button
                fontSize="18px"
                fontWeight="700"
                backgroundColor="#D3FBD4"
                label="예"
                onClick={handleModalYesButtonClick}
              />
            </S.ModalButtonWrapper>
          </S.ModalContent>
        </Modal>
      )}
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
        <S.ClearAllButton onClick={openModal}>전체삭제</S.ClearAllButton>
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
    </S.Wrapper>
  );
}

export default Search;