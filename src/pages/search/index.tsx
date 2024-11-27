import { S } from './styles/index.style';

import { GoBackIcon } from '@/assets/images/svgs';
import SearchInput from '@/common/components/searchInput';
function Search() {
  return (
    <S.Header>
      <S.IconWrapper>
        <GoBackIcon />
      </S.IconWrapper>
      <SearchInput width={90} />
    </S.Header>
  );
}

export default Search;
