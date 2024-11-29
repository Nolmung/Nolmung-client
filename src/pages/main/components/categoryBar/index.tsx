import Button from '@/common/components/button/Button';
import SearchInput from '@/common/components/searchInput';
import { useState } from 'react';
import S from '../../styles/CategoryBar.style';
import { CATEGORY_OPTIONS } from '../../constants/categoryBar';
import { useNavigate } from 'react-router-dom';

function CategoryBar() {
  const [selectedValue, setSelectedValue] = useState<string>('');
  const naivgate = useNavigate();

  const handleCategoryClick = (value: string) => {
    naivgate(`/?category=${value}`);
  };

  return (
    <S.Wrapper>
      <SearchInput width={90} />
      <S.CategoryWrapper>
        {CATEGORY_OPTIONS.map(({ value, label, icon: Icon }) => (
          <S.StyledButtonWrapper key={value} isActive={selectedValue === value}>
            <Button
              onClick={() => handleCategoryClick(value)}
              width="fit-content"
              height="fit-content"
              backgroundColor="#fff" // 기본값 유지
              color="#000" // 기본값 유지
              fontWeight="500"
              fontSize="14px"
              borderRadius="20px"
            >
              <S.ButtonContentWrapper>
                <Icon width={16} height={16} />
                {label}
              </S.ButtonContentWrapper>
            </Button>
          </S.StyledButtonWrapper>
        ))}
      </S.CategoryWrapper>
    </S.Wrapper>
  );
}

export default CategoryBar;
