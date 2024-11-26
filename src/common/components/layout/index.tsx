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

function Layout({ children }: LayoutProps) {
  const location = useLocation();

  // Header가 필요 없는 페이지의 경우 path 추가하기
  const noHeaderPaths = ['/'];

  /** 동적 라우팅 path, '/detail/:id' 패턴 */
  const noHeaderDynamicPaths = [/^\/detail\/\d+$/];

  const hideHeader =
    noHeaderPaths.includes(location.pathname) ||
    noHeaderDynamicPaths.some((regex) => regex.test(location.pathname));

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
      <TabBar />
    </S.Wrapper>
  );
}

export default Layout;
