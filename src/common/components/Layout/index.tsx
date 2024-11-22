import Header from '@common/components/Header';
import { Flex as MainLayout } from '@common/components/Layout/flex';
import {
  LayoutProps,
  HeaderTitleType,
} from '@common/components/Layout/index.type';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

const Layout = ({ children }: LayoutProps) => {
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
        setHeaderTitle({ title: '오늘멍 모아보기', showIcon: false, type: 1 });
        break;

      default:
        setHeaderTitle({ title: '', showIcon: false, type: 1 });
    }
  }, [location.pathname]);

  return (
    <Wrapper>
      <Header {...HeaderTitle} />
      <MainLayout direction="column" justify="flex-start" align="center">
        {children}
      </MainLayout>
    </Wrapper>
  );
};

export default Layout;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 425px; /* 앱뷰의 최대 너비 설정 */
  margin: 0 auto; /* 화면 중앙 정렬 */
  background-color: #fff; /* 배경색 설정 */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* 선택 사항: 앱처럼 보이게 그림자 추가 */
  min-height: 100vh; /* 전체 화면 높이를 유지 */
  overflow-x: hidden;
  box-sizing: border-box;
`;
