import SearchInput from '@/common/components/searchInput';
import S from './styles/index.style';
import { useRef, useState, useEffect } from 'react';
import { useReviewStore } from './stores/reviewStore';
import VisitedPlaceCard from '../todaymungWrite/components/VisitedPlaceCard';
import { CancelIcon, TimeRecord } from '@/assets/images/svgs';
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
import { PostReviewRequest } from '@/service/apis/review/index.type';
import { usePostReviews } from '../todaymungWrite/queries';
import { useReviewConfirmModalStore } from '@/stores/useReviewConfirmModalStore';
import { useTodayMungStore } from '../todaymungWrite/stores/todayMungStore';
import ReactGA from 'react-ga4';

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
  const { mutate: reviewMutate } = usePostReviews();
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

    ReactGA.event({
      category: 'Search Interaction',
      action: 'Search Keyword Entered',
      label: searchValue, // 입력된 검색어
    });
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
    ReactGA.event({
      category: 'Search Interaction',
      action: 'Search Keyword Deleted',
      label: 'Keyword Deleted', // 삭제된 항목에 대한 레이블
    });

    setSearchHistory(deleteSearchKeyword(searchHistory, id));
  };

  const handleClearHistory = () => {
    ReactGA.event({
      category: 'Search Interaction',
      action: 'Search History Cleared',
      label: 'All History Deleted',
    });
    if (searchHistory.length === 0) return;
    openModal();
  };

  const handleModalYesButtonClick = () => {
    setSearchHistory(clearSearchHistory());
    closeModal();
  };

  const handleCompleteButtonClick = () => {
    const reviewRequestList: PostReviewRequest[] = reviewlist.map((review) => ({
      placeId: review.placeId,
      rating: review.rating,
      category: review.category,
      labels: review.labels.map((label) => ({
        labelId: label.labelId,
        labelName: label.labelName,
      })),
    }));

    if (reviewRequestList.length > 0) {
      ReactGA.event({
        category: 'Review Interaction',
        action: 'Submit Review',
        label: 'Review Submitted', // 리뷰 등록 액션
      });
      reviewMutate(reviewRequestList);
    }
  };
  const { deleteTodaymungAll } = useTodayMungStore();
  const { deleteReviewAll } = useReviewStore();
  const { isReviewConfirmModalOpen, closeReviewConfirmModal } =
    useReviewConfirmModalStore();

  if (isLoading) return <LoadingSpinnerLottie />;
  if (error) return <div>에러 발생</div>;

  return (
    <>
      <S.Wrapper
        addPadding={reviewlist.length > 0}
        ref={scrollRef}
        className="scroll-container"
      >
        {isReviewConfirmModalOpen && (
          <Modal
            isOpen={isReviewConfirmModalOpen}
            closeModal={closeReviewConfirmModal}
          >
            <S.ConfirmModalContent>
              <S.ConfirmModalTitle>
                작성하신 리뷰는 등록되지 않습니다. <br />
                정말로 나가시겠습니까?
              </S.ConfirmModalTitle>
              <S.ModalButtonWrapper>
                <Button
                  width="110px"
                  height="44px"
                  borderRadius="30px"
                  fontSize="16px"
                  fontWeight="500"
                  onClick={closeReviewConfirmModal}
                >
                  취소
                </Button>
                <Button
                  width="110px"
                  height="44px"
                  backgroundColor="#17AA1A"
                  color="#fff"
                  borderRadius="30px"
                  fontSize="16px"
                  fontWeight="500"
                  onClick={() => {
                    deleteReviewAll();
                    deleteTodaymungAll();
                    closeReviewConfirmModal();
                    navigate(ROUTE.TODAYMUNG_WRITE());
                  }}
                >
                  나가기
                </Button>
              </S.ModalButtonWrapper>
            </S.ConfirmModalContent>
          </Modal>
        )}
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
                  <img src="/webps/emptyImg.webp" width={200} />
                  <S.NoResultSubText>
                    최근 검색 기록이 없다 멍!
                  </S.NoResultSubText>
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
        <S.ButtonWrapper>
          <Button
            width="110px"
            height="44px"
            backgroundColor="#080808"
            color="#fff"
            borderRadius="30px"
            fontSize="16px"
            fontWeight="500"
            onClick={handleCompleteButtonClick}
          >
            리뷰 등록
          </Button>
        </S.ButtonWrapper>
      </S.Wrapper>
    </>
  );
}

export default TodayMungPlaceRegist;
