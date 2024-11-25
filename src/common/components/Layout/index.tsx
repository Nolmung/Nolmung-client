import Header from '@common/components/Header';
import { Flex as MainLayout } from '@common/components/Layout/flex';
import {
  LayoutProps,
  HeaderTitleType,
} from '@common/components/Layout/index.type';
import TabBar from '@common/components/TabBar';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

function Layout({ children }: LayoutProps) {
  const location = useLocation();

  const [HeaderTitle, setHeaderTitle] = useState<HeaderTitleType>({
    title: '',
    showIcon: false,
    type: 1,
  });

  useEffect(() => {
    switch (location.pathname) {
      case '/':
        setHeaderTitle({ title: '메인', showIcon: true, type: 2 });
        break;
      case '/todayMung':
        setHeaderTitle({
          title: '오늘멍 모아보기',
          showIcon: false,
          type: 1,
        });
        break;

      default:
        setHeaderTitle({ title: '', showIcon: false, type: 1 });
    }
  }, [location.pathname]);

  return (
    <Wrapper>
      <Header {...HeaderTitle} />
      <MainLayout $direction="column" $justify="flex-start" $align="flex-start">
        {children}
      </MainLayout>
      <TabBar />
    </Wrapper>
  );
}

export default Layout;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 425px;
  min-width: 320px;
  margin: 0 auto;
  background-color: #fff;
  border: 1px solid rgb(235, 235, 235);
  min-height: 100vh;
`;
