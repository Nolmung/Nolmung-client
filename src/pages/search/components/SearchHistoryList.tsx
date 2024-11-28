import { CancelIcon, TimeRecord } from '@/assets/images/svgs';
import { SearchHistoryItem } from '..';
import { S } from '../styles/index.style';

interface SearchHistoryListProps {
  searchHistory: SearchHistoryItem[];
  handleDeleteKeyword: (id: number) => void;
}

function SearchHistoryList({
  searchHistory,
  handleDeleteKeyword,
}: SearchHistoryListProps) {
  return (
    <div>
      {searchHistory.map((item) => (
        <S.SearchHistory key={item.id}>
          <TimeRecord width={20} height={20} />
          <S.TimeIconTextWrapper>{item.keyword}</S.TimeIconTextWrapper>
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
    </div>
  );
}

export default SearchHistoryList;
