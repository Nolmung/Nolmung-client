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
import { useLocation, useNavigate } from 'react-router-dom';

type PathRule = string | RegExp;
type PathRules = {
  [key: string]: PathRule[];
};

/**  Header 혹은 tabBar가 필요 없는 페이지의 경우 path 추가하기 */
const pathRules: PathRules = {
  hideHeader: [
    '/',
    /^\/detail\/\d+$/,
    '/search',
    '/login',
    '/recommend',
    /\?cur=main/,
  ], // Header를 숨길 경로들
  hideTabBar: [
    /^\/detail\/\d+$/,
    '/login',
    /\?category(=|$)/,
    /\/\?search(=|$)/,
    '/my/review',
    '/signUp',
    '/dogs',
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

  const [handleBackButtonClick, setHandleBackButtonClick] = useState(
    () => () => {
      window.history.back();
    },
  );

  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname.startsWith('/todaymung/detail')) {
      setHeaderTitle({
        title: '오늘멍 상세보기',
        showIcon: true,
        type: 'TitleCenter',
      });
      setHandleBackButtonClick(() => () => {
        navigate('/todaymung');
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

    console.log('location', location);

    switch (true) {
      case pathName === '/' && !!category:
        console.log('1');
        setHeaderTitle({
          title: `${categoryLabel}`,
          showIcon: true,
          type: 'TitleCenter',
        });
        setHandleBackButtonClick(() => () => {
          console.log('hi');
          window.history.back();
        });

        break;

      case pathName === '/' && !!search:
        console.log('2');
        setHeaderTitle({
          title: `${search}`,
          showIcon: true,
          type: 'TitleCenter',
        });
        setHandleBackButtonClick(() => () => {
          console.log('sdf');
          window.history.back();
        });
        break;

      case pathName === '/' && !!search:
        console.log('2');
        setHeaderTitle({
          title: `${search}`,
          showIcon: true,
          type: 'TitleCenter',
        });
        setHandleBackButtonClick(() => () => {
          console.log('sdf');
          window.history.back();
        });
        break;

      case pathName === '/todaymung':
        {
          console.log('3');
          setHeaderTitle({
            title: '오늘멍 모아보기',
            showIcon: false,
            type: 'TitleCenter',
          });
          setHandleBackButtonClick(() => () => {
            console.log('sdf');
            window.history.back();
          });
        }
        break;

      case pathName.startsWith('/todaymung/detail'):
        setHandleBackButtonClick(() => () => {
          navigate(-1);
        });
        break;

      case pathName == '/todaymung/write':
        console.log('4');
        setHeaderTitle({
          title: '오늘멍 작성하기',
          showIcon: true,
          type: 'TitleCenter',
        });
        setHandleBackButtonClick(() => () => {
          console.log('hi');
          navigate('/todaymung');
        });
        break;

      case pathName == '/todaymung/placeregist' && !!search:
        console.log('10');
        setHeaderTitle({
          title: '오늘멍 장소등록',
          showIcon: true,
          type: 'TitleCenter',
        });
        setHandleBackButtonClick(() => () => {
          console.log('bi');
          navigate('/todaymung/write');
        });
        break;

      case pathName == '/todaymung/placeregist':
        setHeaderTitle({
          title: '오늘멍 장소등록',
          showIcon: true,
          type: 'TitleCenter',
        });
        setHandleBackButtonClick(() => () => {
          navigate('/todaymung');
        });
        break;

      case pathName == '/my':
        console.log('7');
        setHeaderTitle({
          title: '마이페이지',
          showIcon: false,
          type: 'TitleLeft',
        });
        break;

      case pathName == '/my/review':
        console.log('6');
        setHeaderTitle({
          title: '내가 쓴 리뷰',
          showIcon: true,
          type: 'TitleLeft',
        });
        setHandleBackButtonClick(() => () => {
          navigate('/my');
        });
        break;

      case pathName == '/my/favorite':
        console.log('8');
        setHeaderTitle({
          title: '즐겨찾기',
          showIcon: true,
          type: 'TitleLeft',
        });
        setHandleBackButtonClick(() => () => {
          navigate('/my');
        });
        break;

      default:
        setHeaderTitle({ title: '', showIcon: true, type: 'TitleCenter' });
    }
  }, [location.pathname, location.search]);

  return (
    <S.Wrapper>
      {!hideHeader && (
        <Header
          handleBackButtonClick={handleBackButtonClick}
          {...HeaderTitle}
        />
      )}
      <MainLayout $direction="column" $justify="flex-start" $align="flex-start">
        {children}
      </MainLayout>
      {!hideTabBar && <TabBar />}
    </S.Wrapper>
  );
}

export default Layout;
