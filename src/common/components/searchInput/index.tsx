import { S } from './index.style';

import { Search } from '@/assets/images/svgs';

function SearchInput() {
  return (
    <>
      <S.Wrapper placeholder="장소를 검색해주세요" />
      <Search width={22} height={22} />
    </>
  );
}

export default SearchInput;
