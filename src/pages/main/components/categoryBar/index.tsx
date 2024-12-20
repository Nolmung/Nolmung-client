import Button from '@/common/components/button/Button';
import SearchInput from '@/common/components/searchInput';
import S from '../../styles/CategoryBar.style';
import { CATEGORY_OPTIONS } from '../../constants/categoryBar';
import { useNavigate } from 'react-router-dom';
import { EVENTS } from '@/service/googleAnalytics/events';
import ReactGA from 'react-ga4';
import getIsLogin from '@/common/utils/getIsLogin';

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

  const isLoggedIn = getIsLogin();
  const handleCategoryClick = (value: string) => {
    setBottomCardVisible(false);
    setCategory(value);
    setBottomSheetVisible(true);
    navigate(`/?category=${value}`);
    ReactGA.event({
      category: EVENTS.MAIN.SELECT_CATEGORY.category, // 이벤트 카테고리
      action: 'click', // 이벤트 액션
      label: value + 'isLoggedIn' + isLoggedIn, // 이벤트 레이블로 value 전달
    });
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
              backgroundColor="#fff"
              color="#000"
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
