import { S } from '@common/components/tabBar/index.styles';
import { TabBarType } from '@common/components/tabBar/index.type';
import tabItems from '@common/constants/tabBarItems';
import { useLocation, useNavigate } from 'react-router-dom';
import { isTabActive } from './utils/tabUtils';
import { useLoginPromptModalStore } from '@/stores/useLoginPromptModalStore';
import useIsReviewEmpty from '@/common/utils/useIsReviewEmpty';
import useIsTodaymungEmpty from '@/common/utils/useIsTodaymungEmpty';
import { useReviewStore } from '@/pages/todaymungPlaceRegist/stores/reviewStore';
import { useTodayMungStore } from '@/pages/todaymungWrite/stores/todayMungStore';

function TabBar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { open } = useLoginPromptModalStore();
  const isReviewEmpty = useIsReviewEmpty();
  const isTodaymungEmpty = useIsTodaymungEmpty();

  const { deleteReviewAll } = useReviewStore();
  const { deleteTodaymungAll } = useTodayMungStore();

  const isLoggedIn = localStorage.getItem('accessToken');

  const handleTabIconClick = (path: string) => {
    if (!isLoggedIn) {
      if (path === '/todaymung' || path === '/my') {
        open();
        return;
      }
    } else {
      if (location.pathname === '/todaymung/write') {
        if (!isReviewEmpty || !isTodaymungEmpty) {
          window.confirm('작성중인 글이 있습니다. 이동하시겠습니까?');
          deleteReviewAll();
          deleteTodaymungAll();
        }
      }
      navigate(path);
    }
  };

  return (
    <S.Wrapper>
      {tabItems.map((item: TabBarType) => (
        <S.IconArea
          onClick={() => handleTabIconClick(item.path)}
          key={item.path}
        >
          {isTabActive(item.path, location.pathname) ? (
            <item.activeIcon />
          ) : (
            <item.icon />
          )}
          <S.IconDescription>{item.label}</S.IconDescription>
        </S.IconArea>
      ))}
    </S.Wrapper>
  );
}

export default TabBar;
