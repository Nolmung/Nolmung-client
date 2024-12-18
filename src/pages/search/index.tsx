import { S } from './styles/index.style';

import { GoBackIcon } from '@/assets/images/svgs';
import SearchInput from '@/common/components/searchInput';

import { useEffect, useRef, useState } from 'react';
import NoSearchHistory from './components/NoSearchHistory';
import SearchHistoryList from './components/SearchHistoryList';
import { useNavigate } from 'react-router-dom';
import { ROUTE } from '@/common/constants/route';
import Modal from '@/common/components/modal';
import useModal from '@/common/hooks/useModal';
import Button from '@/common/components/button/Button';
import {
  clearSearchHistory,
  deleteSearchKeyword,
  formatDate,
  updateSearchHistory,
} from './utils/searchUtils';
import useSetDocumentTitle from '@/common/hooks/useSetDocumentTitle';
import { useGetPlaceSearch } from '../todaymungPlaceRegist/queries';
import NoSearchResponse from './components/NoSearchResponse';
import { LoadingSpinnerLottie } from '@/common/components/lottie';
import ReactGA from 'react-ga4';
import SEO from '@/common/components/SEO';
export interface SearchHistoryItem {
  id: number;
  keyword: string;
  createdAt: string;
}

function Search() {
  const navigate = useNavigate();
  const { isOpen, openModal, closeModal } = useModal();
  const inputRef = useRef<HTMLInputElement>(null);
  const [searchHistory, setSearchHistory] = useState<SearchHistoryItem[]>(
    () => {
      const storedHistory = localStorage.getItem('searchHistory');
      return storedHistory ? JSON.parse(storedHistory) : [];
    },
  );

  const [searchKeyword, setSearchKeyword] = useState<string>();

  const {
    data: searchResponseData,
    isLoading,
    isError,
  } = useGetPlaceSearch(searchKeyword || '');

  const handleSearchIconClick = (keyword?: string) => {
    const searchInputValue = inputRef?.current?.value || keyword;
    if (!searchInputValue || !searchInputValue?.trim()) return;

    const newSearchItem: SearchHistoryItem = {
      id: Date.now(),
      keyword: searchInputValue.trim(),
      createdAt: formatDate(new Date()),
    };

    ReactGA.event({
      category: 'Search',
      action: 'Search Initiated',
      label: searchInputValue.trim(),
    });
    setSearchHistory(updateSearchHistory(searchHistory, newSearchItem));

    setSearchKeyword(searchInputValue);
  };

  useEffect(() => {
    if (searchResponseData && searchResponseData.length > 0) {
      if (searchResponseData.length === 1) {
        navigate(
          ROUTE.MAIN() +
            '?search=' +
            searchKeyword +
            '&lat=' +
            searchResponseData[0].latitude.toString() +
            '&lng=' +
            searchResponseData[0].longitude.toString(),
          {
            state: { searchResponseData },
          },
        );
        ReactGA.event({
          category: 'Search',
          action: 'Search Result Clicked',
          label: `Single result: ${searchResponseData[0].placeName}`,
        });
      } else {
        navigate(ROUTE.MAIN() + '?search=' + searchKeyword, {
          state: { searchResponseData },
        });
        ReactGA.event({
          category: 'Search',
          action: 'Search Result Clicked',
          label: `${searchResponseData.length} results found`,
        });
      }
    }
  }, [searchResponseData]);

  const handleModalYesButtonClick = () => {
    ReactGA.event({
      category: 'Search History',
      action: 'Clear All Search History',
    });
    setSearchHistory(clearSearchHistory());
    closeModal();
  };

  const handleDeleteKeyword = (id: number) => {
    ReactGA.event({
      category: 'Search History',
      action: 'Delete Search History Item',
      label: `Deleted keyword ID: ${id}`,
    });
    setSearchHistory(deleteSearchKeyword(searchHistory, id));
  };

  const handleGoBackIconClick = () => {
    /** @Todo 추후 맥락 보고 수정 */
    navigate(-1);
  };

  if (isError) {
    return <div>에러가 발생했습니다.</div>;
  }

  return (
    <S.Wrapper>
      <SEO title={'검색 | 놀멍'} />
      {isOpen && (
        <Modal isOpen={isOpen} closeModal={closeModal}>
          <S.ModalContent>
            모두 지우시겠습니까?
            <S.ModalButtonWrapper>
              <Button
                fontSize="18px"
                fontWeight="500"
                onClick={() => closeModal()}
              >
                아니오
              </Button>
              <Button
                fontSize="18px"
                fontWeight="700"
                backgroundColor="#D3FBD4"
                onClick={handleModalYesButtonClick}
              >
                예
              </Button>
            </S.ModalButtonWrapper>
          </S.ModalContent>
        </Modal>
      )}
      <S.Header>
        <S.IconWrapper onClick={handleGoBackIconClick}>
          <GoBackIcon />
        </S.IconWrapper>
        <SearchInput
          autofocus={true}
          inputRef={inputRef}
          onClick={handleSearchIconClick}
          width={90}
        />
      </S.Header>
      {isLoading ? (
        <LoadingSpinnerLottie />
      ) : searchResponseData?.length === 0 || isError ? (
        <NoSearchResponse />
      ) : (
        <>
          <S.Menu>
            최근 검색어
            <S.ClearAllButton onClick={openModal}>전체삭제</S.ClearAllButton>
          </S.Menu>
          <S.SearchHistoryList>
            {searchHistory.length > 0 ? (
              <SearchHistoryList
                handleSearchIconClick={handleSearchIconClick}
                searchHistory={searchHistory}
                handleDeleteKeyword={handleDeleteKeyword}
              />
            ) : (
              <NoSearchHistory />
            )}
          </S.SearchHistoryList>
        </>
      )}
    </S.Wrapper>
  );
}

export default Search;
