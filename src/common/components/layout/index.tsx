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
  const hideHeader = noHeaderPaths.includes(location.pathname);

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
      case '/todaymung':
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
      {/* <S.Container> */}
      <MainLayout $direction="column" $justify="flex-start" $align="flex-start">
        {children}
      </MainLayout>
      {/* </S.Container> */}
      <TabBar />
    </S.Wrapper>
  );
}

export default Layout;
