import Button from '@/common/components/button/Button';
import SearchInput from '@/common/components/searchInput';
import S from '../../styles/CategoryBar.style';
import { CATEGORY_OPTIONS } from '../../constants/categoryBar';
import { useNavigate } from 'react-router-dom';

interface CategoryBarProps {
  category: string | null;
  setCategory: (value: string) => void;
}

function CategoryBar({ category, setCategory }: CategoryBarProps) {
  const naivgate = useNavigate();

  const handleCategoryClick = (value: string) => {
    setCategory(value);
    naivgate(`/?category=${value}`);
  };

  const navigateToSearchPage = () => {
    naivgate('/search');
  };

  return (
    <S.Wrapper>
      <SearchInput onClick={navigateToSearchPage} width={90} />
      <S.CategoryWrapper>
        {CATEGORY_OPTIONS.map(({ value, label, icon: Icon }) => (
          <S.StyledButtonWrapper key={value} isActive={category === value}>
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
