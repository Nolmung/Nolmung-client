import { CancelIcon, TimeRecord } from '@/assets/images/svgs';
import { SearchHistoryItem } from '..';
import { S } from '../styles/index.style';

interface SearchHistoryListProps {
  handleSearchIconClick: (keyword?: string) => void;
  searchHistory: SearchHistoryItem[];
  handleDeleteKeyword: (id: number) => void;
}

function SearchHistoryList({
  handleSearchIconClick,
  searchHistory,
  handleDeleteKeyword,
}: SearchHistoryListProps) {
  return (
    <div>
      {searchHistory.map((item) => (
        <S.SearchHistory aria-label={`${item.keyword}`} key={item.id}>
          <TimeRecord width={20} height={20} />
          <S.TimeIconTextWrapper
            onClick={() => handleSearchIconClick(item.keyword)}
          >
            {item.keyword}
          </S.TimeIconTextWrapper>
          <S.CancelIconDateWrapper>
            {item.createdAt}
            <CancelIcon
              aria-label="삭제버튼"
              width={18}
              height={18}
              onClick={() => handleDeleteKeyword(item.id)}
            />
          </S.CancelIconDateWrapper>
        </S.SearchHistory>
      ))}
    </div>
  );
}

export default SearchHistoryList;
