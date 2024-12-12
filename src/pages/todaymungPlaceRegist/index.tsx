import SearchInput from '@/common/components/searchInput';
import S from './styles/index.style';
import { useRef, useState, useEffect } from 'react';
import { useReviewStore } from './stores/reviewStore';
import VisitedPlaceCard from '../todaymungWrite/components/VisitedPlaceCard';
import { CancelIcon, LiedownDog, TimeRecord } from '@/assets/images/svgs';
import useSetDocumentTitle from '@/common/hooks/useSetDocumentTitle';
import { useGetPlaceSearch } from './queries';
import { useLocation, useNavigate } from 'react-router-dom';
import { ROUTE } from '@/common/constants/route';
import SearchList from './components/SearchList';
import {
  clearSearchHistory,
  deleteSearchKeyword,
  updateSearchHistory,
  formatDate,
} from '../search/utils/searchUtils';
import Modal from '@/common/components/modal';
import Button from '@/common/components/button/Button';
import useModal from '@/common/hooks/useModal';
import { LoadingSpinnerLottie } from '@/common/components/lottie';

export interface SearchHistoryItem {
  id: number;
  keyword: string;
  createdAt: string;
}

function TodayMungPlaceRegist() {
  useSetDocumentTitle('오늘멍 장소 등록');
  const { isOpen, openModal, closeModal } = useModal();
  const location = useLocation();
  const navigate = useNavigate();

  const searchParams = new URLSearchParams(location.search).get('search');

  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const [keywordReviewVisibleId, setKeywordReviewVisibleId] = useState<
    number | null
  >(null);
  const [searchKeyword, setSearchKeyword] = useState<string>('');
  const [searchHistory, setSearchHistory] = useState<SearchHistoryItem[]>(
    () => {
      const storedHistory = localStorage.getItem('searchHistory');
      return storedHistory ? JSON.parse(storedHistory) : [];
    },
  );

  const { data, isLoading, error } = useGetPlaceSearch(searchParams || '');
  const { reviewlist, deleteReview } = useReviewStore();

  useEffect(() => {
    if (searchParams) {
      setSearchKeyword(searchParams);
    } else {
      setSearchKeyword('');
    }
  }, [location]);

  const handleSearch = (searchKeyword?: string) => {
    const searchValue = searchKeyword || inputRef?.current?.value.trim();
    console.log(searchValue, searchKeyword, inputRef?.current?.value.trim());
    if (!searchValue) return;
    const newSearchItem: SearchHistoryItem = {
      id: Date.now(),
      keyword: searchValue,
      createdAt: formatDate(new Date()),
    };
    setSearchHistory(updateSearchHistory(searchHistory, newSearchItem));

    setSearchKeyword(searchValue);
    navigate(ROUTE.TODAYMUNG_PLACE_REGIST() + '?search=' + searchValue);
  };

  const handleDeleteKeyword = (id: number) => {
    setSearchHistory(deleteSearchKeyword(searchHistory, id));
  };

  const handleClearHistory = () => {
    if (searchHistory.length === 0) return;
    openModal();
  };

  const handleModalYesButtonClick = () => {
    setSearchHistory(clearSearchHistory());
    closeModal();
  };

  if (isLoading) return <LoadingSpinnerLottie />;
  if (error) return <div>에러 발생</div>;

  return (
    <S.Wrapper
      addPadding={reviewlist.length > 0}
      ref={scrollRef}
      className="scroll-container"
    >
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
      <S.SearchInputWrapper>
        <SearchInput
          value={searchKeyword}
          onChange={(e) => setSearchKeyword(e.target.value)}
          inputRef={inputRef}
          autofocus={true}
          onClick={() => handleSearch()}
        />
      </S.SearchInputWrapper>

      {!searchParams && (
        <>
          <S.Menu>
            최근 검색어
            <S.ClearAllButton onClick={handleClearHistory}>
              전체삭제
            </S.ClearAllButton>
          </S.Menu>
          <S.SearchHistoryList>
            {searchHistory.length > 0 ? (
              <>
                {searchHistory.map((item) => (
                  <S.SearchHistory key={item.id}>
                    <TimeRecord width={20} height={20} />
                    <S.TimeIconTextWrapper
                      onClick={() => handleSearch(item.keyword)}
                    >
                      {item.keyword}
                    </S.TimeIconTextWrapper>
                    <S.CancelIconDateWrapper>
                      {item.createdAt}
                      <CancelIcon
                        width={18}
                        height={18}
                        onClick={() => handleDeleteKeyword(item.id)}
                      />
                    </S.CancelIconDateWrapper>
                  </S.SearchHistory>
                ))}
              </>
            ) : (
              <S.NoResultWrapper>
                <LiedownDog width={240} />
                <S.NoResultSubText>최근 검색 기록이 없다 멍!</S.NoResultSubText>
              </S.NoResultWrapper>
            )}
          </S.SearchHistoryList>
        </>
      )}

      {searchParams && (
        <SearchList
          searchParams={searchParams}
          data={data || []}
          scrollRef={scrollRef}
          keywordReviewVisibleId={keywordReviewVisibleId}
          setKeywordReviewVisibleId={setKeywordReviewVisibleId}
        />
      )}

      <S.VisitedPlaceCard>
        {reviewlist.map((review) => (
          <S.CardWrapper key={review.placeId}>
            <S.IconWrapper onClick={() => deleteReview(review.placeId)}>
              <CancelIcon width={10} />
            </S.IconWrapper>
            <VisitedPlaceCard
              category={review.category}
              placeName={review.placeName}
              roadAddress={review.roadAddress}
              rating={review.rating}
            />
          </S.CardWrapper>
        ))}
      </S.VisitedPlaceCard>
    </S.Wrapper>
  );
}

export default TodayMungPlaceRegist;
