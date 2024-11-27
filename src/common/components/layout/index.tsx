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
  hideHeader: ['/', /^\/detail\/\d+$/, '/search'], // Header를 숨길 경로들
  hideTabBar: [/^\/detail\/\d+$/], // TabBar를 숨길 경로들
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

  const hideHeader = shouldHide('hideHeader', location.pathname);
  const hideTabBar = shouldHide('hideTabBar', location.pathname);

  const [HeaderTitle, setHeaderTitle] = useState<HeaderTitleType>({
    title: '',
    showIcon: false,
    type: 'TitleLeft',
  });

  useEffect(() => {
    switch (location.pathname) {
      case '/':
        setHeaderTitle({ title: '메인', showIcon: true, type: 'TitleCenter' });
        break;
      case '/todayMung':
        setHeaderTitle({
          title: '오늘멍 모아보기',
          showIcon: false,
          type: 'TitleCenter',
        });
        break;

      default:
        setHeaderTitle({ title: '', showIcon: true, type: 'TitleCenter' });
    }
  }, [location.pathname]);

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
