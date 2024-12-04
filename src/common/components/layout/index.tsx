import { CATEGORY_OPTIONS } from '@/pages/main/constants/categoryBar';
import Header from '@common/components/header';
import { Flex as MainLayout } from '@common/components/layout/flex';
import { S } from '@common/components/layout/index.styles';
import {
  LayoutProps,
  HeaderTitleType,
} from '@common/components/layout/index.type';
import TabBar from '@common/components/tabBar';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

type PathRule = string | RegExp;
type PathRules = {
  [key: string]: PathRule[];
};

/**  Header 혹은 tabBar가 필요 없는 페이지의 경우 path 추가하기 */
const pathRules: PathRules = {
  hideHeader: ['/', /^\/detail\/\d+$/, '/search', '/login', '/recommend'], // Header를 숨길 경로들
  hideTabBar: [
    /^\/detail\/\d+$/,
    '/login',
    /\?category(=|$)/,
    /\/\?search(=|$)/,
  ], // TabBar를 숨길 경로들
};

/** 헤더, 텝바를 보여줄 지 정규식 검사하는 함수  */
const shouldHide = (key: keyof PathRules, pathname: string): boolean => {
  const rules = pathRules[key] || [];
  return rules.some((rule) =>
    typeof rule === 'string' ? rule === pathname : rule.test(pathname),
  );
};

function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const hideHeader = shouldHide(
    'hideHeader',
    location.pathname + location.search,
  );
  const hideTabBar = shouldHide(
    'hideTabBar',
    location.pathname + location.search,
  );
  const [HeaderTitle, setHeaderTitle] = useState<HeaderTitleType>({
    title: '',
    showIcon: false,
    type: 'TitleLeft',
  });
  useEffect(() => {
     if (location.pathname.startsWith('/todaymung/detail')) {
       setHeaderTitle({
         title: '오늘멍 상세보기',
         showIcon: true,
         type: 'TitleCenter',
       });
       return;
     }
     const searchParams = new URLSearchParams(location.search);
    const category = searchParams.get('category');
    const categoryLabel = category
      ? CATEGORY_OPTIONS.find((options) => options.value === category)?.label
      : null;

    const search = searchParams.get('search');
    const pathName = location.pathname;

    switch (true) {
       case pathName === '/' && !!category:
         setHeaderTitle({
          title: `${categoryLabel}`,
          showIcon: true,
          type: 'TitleCenter',
        });
        break;
      case pathName === '/' && !!search:
        setHeaderTitle({
          title: `${search}`,
          showIcon: true,
          type: 'TitleCenter',
        });
         break;

      case pathName === '/todaymung':
        {
          setHeaderTitle({
            title: '오늘멍 모아보기',
            showIcon: false,
            type: 'TitleCenter',
          });
        }
        break;

      case pathName == '/todaymung/write':
        setHeaderTitle({
          title: '오늘멍 작성하기',
          showIcon: true,
          type: 'TitleCenter',
        });
        break;

      case pathName == '/todaymung/placeregist':
        setHeaderTitle({
          title: '오늘멍 장소등록',
          showIcon: true,
          type: 'TitleCenter',
        });
        break;

      default:
        setHeaderTitle({ title: '', showIcon: true, type: 'TitleCenter' });
    }
  }, [location.pathname, location.search]);

  return (
    <S.Wrapper>
      {!hideHeader && <Header {...HeaderTitle} />}
      <MainLayout $direction="column" $justify="flex-start" $align="flex-start">
        {children}
      </MainLayout>
      {!hideTabBar && <TabBar />}
    </S.Wrapper>
  );
}

export default Layout;
