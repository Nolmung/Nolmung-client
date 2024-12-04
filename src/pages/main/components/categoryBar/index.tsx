import Button from '@/common/components/button/Button';
import SearchInput from '@/common/components/searchInput';
import S from '../../styles/CategoryBar.style';
import { CATEGORY_OPTIONS } from '../../constants/categoryBar';
import { useNavigate } from 'react-router-dom';

interface CategoryBarProps {
  category: string | null;
  setCategory: (value: string) => void;
  setBottomSheetVisible: (
    value: boolean | ((prev: boolean) => boolean),
  ) => void;
  setBottomCardVisible: (value: boolean | ((prev: boolean) => boolean)) => void;
}

function CategoryBar({
  setCategory,
  setBottomSheetVisible,
  setBottomCardVisible,
}: CategoryBarProps) {
  const navigate = useNavigate();

  const handleCategoryClick = (value: string) => {
    setBottomCardVisible(false);

    setCategory(value);
    setBottomSheetVisible(true);
    navigate(`/?category=${value}`);
  };

  const navigateToSearchPage = () => {
    setBottomSheetVisible(false);
    navigate('/search');
  };

  return (
    <S.Wrapper onClick={(e) => e.stopPropagation()}>
      <SearchInput onClick={navigateToSearchPage} width={90} />
      <S.CategoryWrapper>
        {CATEGORY_OPTIONS.map(({ value, label, icon: Icon }) => (
          <S.StyledButtonWrapper key={value}>
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
