import { CATEGORY_OPTIONS } from '@/pages/main/constants/categoryBar';
import { useReviewStore } from '@/pages/todaymungPlaceRegist/stores/reviewStore';
import { useTodayMungStore } from '@/pages/todaymungWrite/stores/todayMungStore';
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
import LoginPromptModal from '../loginPromptModal';
import { useLoginPromptModalStore } from '@/stores/useLoginPromptModalStore';
import { useConfirmModalStore } from '@/stores/useConfirmModalStore';
import { ROUTE } from '@/common/constants/route';
import { useReviewConfirmModalStore } from '@/stores/useReviewConfirmModalStore';
import ReactGA from 'react-ga4';

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
    '/todaymung',
    '/my',
    /\?cur=main/,
    /\/oauth\/kakao\/callback/,
  ],
  /** TabBar를 숨길 경로들 */
  hideTabBar: [
    /^\/detail\/\d+$/,
    '/login',
    /\?category(=|$)/,
    /\/\?search(=|$)/,
    '/my/review',
    '/signUp',
    '/dogs',
    /^\/dogs\/edit\/\d+$/,
    /\/oauth\/kakao\/callback/,
  ], // TabBar를 숨길 경로들
};

/** 헤더, 텝바를 보여줄 지 정규식 검사하는 함수  */
const shouldHide = (key: keyof PathRules, pathname: string): boolean => {
  const rules = pathRules[key] || [];
  return rules.some((rule) =>
    typeof rule === 'string' ? rule === pathname : rule.test(pathname),
  );
};

/** 페이지 내의 공용 Container */
function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const { reviewlist } = useReviewStore();
  const { openConfirmModal } = useConfirmModalStore();

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
      navigate(-1);
    },
  );

  const navigate = useNavigate();
  const { deleteReviewAll } = useReviewStore();
  const { title, content, dogs, medias } = useTodayMungStore();
  const { openReviewConfirmModal } = useReviewConfirmModalStore();

  useEffect(() => {
    /** 뒤로가기 감지 핸들러  */
    const handlePopState = () => {
      if (
        location.pathname.startsWith('/todaymung/placeregist') &&
        reviewlist.length > 0
      ) {
        openReviewConfirmModal();
      }
    };
    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);
  
  /** 헤더가 보여질 path 경로 추가 */
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const category = searchParams.get('category');
    const categoryLabel = category
      ? CATEGORY_OPTIONS.find((options) => options.value === category)?.label
      : null;

    const search = searchParams.get('search');
    const pathName = location.pathname;

    if (location.pathname.startsWith('/todaymung/detail')) {
      setHeaderTitle({
        title: '오늘멍 상세보기',
        showIcon: true,
        type: 'TitleCenter',
      });
      setHandleBackButtonClick(() => () => {
        navigate('/todaymung');
        ReactGA.event({
          category: 'goBack',
          action: 'click goBack button',
          label: 'goBack from todaymungDetail to todaymung',
        });
      });
      return;
    }

    if (location.pathname.startsWith('/dogs/edit')) {
      setHeaderTitle({
        title: '반려견 수정',
        showIcon: true,
        type: 'TitleLeft',
      });
      setHandleBackButtonClick(() => () => {
        navigate(-1);
        ReactGA.event({
          category: 'goBack',
          action: 'click goBack button',
          label: 'goBack from dogsEdit to myDogs',
        });
        return;
      });
    }

    switch (true) {
      case pathName === '/' && !!category:
        setHeaderTitle({
          title: `${categoryLabel}`,
          showIcon: true,
          type: 'TitleCenter',
        });
        setHandleBackButtonClick(() => () => {
          navigate(ROUTE.MAIN());
          ReactGA.event({
            category: 'goBack',
            action: 'click goBack button',
            label: 'goBack from mainCategory to main',
          });
        });

        break;

      case pathName === '/' && !!search:
        setHeaderTitle({
          title: `${search}`,
          showIcon: true,
          type: 'TitleCenter',
        });
        setHandleBackButtonClick(() => () => {
          navigate(ROUTE.MAIN());
          ReactGA.event({
            category: 'goBack',
            action: 'click goBack button',
            label: 'goBack from mainSearch to main',
          });
        });
        break;

      case pathName === '/todaymung':
        {
          setHeaderTitle({
            title: '오늘멍 모아보기',
            showIcon: false,
            type: 'TitleCenter',
          });
          setHandleBackButtonClick(() => () => {
            navigate(-1);
            ReactGA.event({
              category: 'goBack',
              action: 'click goBack button',
              label: 'goBack from todaymung historyBack',
            });
          });
        }
        break;

      case pathName === '/dogs':
        {
          setHeaderTitle({
            title: '반려견 등록',
            showIcon: true,
            type: 'TitleCenter',
          });
          setHandleBackButtonClick(() => () => {
            navigate(-1);
            localStorage.removeItem('accessToken');
            ReactGA.event({
              category: 'goBack',
              action: 'click goBack button',
              label: 'goBack from dogs historyBack',
            });
          });
        }
        break;

      case pathName.startsWith('/todaymung/detail'):
        setHandleBackButtonClick(() => () => {
          navigate(-1);
          ReactGA.event({
            category: 'goBack',
            action: 'click goBack button',
            label: 'goBack from todaymungDetail historyBack',
          });
        });
        break;

      case pathName == '/todaymung/write':
        setHeaderTitle({
          title: '오늘멍 작성하기',
          showIcon: true,
          type: 'TitleCenter',
        });
        setHandleBackButtonClick(() => () => {
          if (title || content || dogs.length > 0 || medias.length > 0) {
            openConfirmModal();
          } else {
            deleteReviewAll();
            navigate('/todaymung');
            ReactGA.event({
              category: 'goBack',
              action: 'click goBack button',
              label: 'goBack from todaymungWrite to todaymung',
            });
          }
        });
        break;

      case pathName == '/todaymung/placeregist':
        setHeaderTitle({
          title: '오늘멍 장소등록',
          showIcon: true,
          type: 'TitleCenter',
        });
        setHandleBackButtonClick(() => () => {
          if (reviewlist.length > 0) {
            openReviewConfirmModal();
          } else {
            navigate('/todaymung/write');
            ReactGA.event({
              category: 'goBack',
              action: 'click goBack button',
              label: 'goBack from todaymungPlaceRegist to todaymungWrite',
            });
          }
        });
        break;

      case pathName == '/my':
        setHeaderTitle({
          title: '마이페이지',
          showIcon: false,
          type: 'TitleCenter',
        });
        break;

      case pathName == '/my/review':
        setHeaderTitle({
          title: '내가 쓴 리뷰',
          showIcon: true,
          type: 'TitleLeft',
        });
        setHandleBackButtonClick(() => () => {
          navigate('/my');
          ReactGA.event({
            category: 'goBack',
            action: 'click goBack button',
            label: 'goBack from myReview to my',
          });
        });
        break;

      case pathName == '/my/favorite':
        setHeaderTitle({
          title: '즐겨찾기 목록',
          showIcon: true,
          type: 'TitleCenter',
        });
        setHandleBackButtonClick(() => () => {
          navigate('/my');
          ReactGA.event({
            category: 'goBack',
            action: 'click goBack button',
            label: 'goBack from myFavorite to my',
          });
        });
        break;
      case pathName == '/my/dogs/add':
        setHeaderTitle({
          title: '',
          showIcon: true,
          type: 'TitleCenter',
        });
        setHandleBackButtonClick(() => () => {
          navigate('/my/dogs');
          ReactGA.event({
            category: 'goBack',
            action: 'click goBack button',
            label: 'goBack from myDogsAdd to myDogs',
          });
        });
        break;
      default:
        setHeaderTitle({ title: '', showIcon: true, type: 'TitleCenter' });
    }
  }, [location.pathname, location.search, reviewlist]);

  const { isOpen, close } = useLoginPromptModalStore();

  return (
    <S.Wrapper>
      {isOpen && <LoginPromptModal closeModal={close} />}
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
