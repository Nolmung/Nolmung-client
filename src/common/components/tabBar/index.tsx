import { S } from '@common/components/tabBar/index.styles';
import { TabBarType } from '@common/components/tabBar/index.type';
import tabItems from '@common/constants/tabBarItems';
import { useLocation, useNavigate } from 'react-router-dom';
import { isTabActive } from './utils/tabUtils';
import { useLoginPromptModalStore } from '@/stores/useLoginPromptModalStore';
import useIsReviewEmpty from '@/common/utils/useIsReviewEmpty';
import useIsTodaymungEmpty from '@/common/utils/useIsTodaymungEmpty';
import getIsLogin from '@/common/utils/getIsLogin';
import { useConfirmModalStore } from '@/stores/useConfirmModalStore';

function TabBar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { open } = useLoginPromptModalStore();
  const isReviewEmpty = useIsReviewEmpty();
  const isTodaymungEmpty = useIsTodaymungEmpty();

  const { openConfirmModal } = useConfirmModalStore();
  const handleTabIconClick = (path: string) => {
    if (!getIsLogin()) {
      if (path === '/todaymung' || path === '/my') {
        open();
      } else {
        navigate(path);
      }
    } else {
      if (location.pathname === '/todaymung/write') {
        if (!isReviewEmpty || !isTodaymungEmpty) {
          openConfirmModal();
        } else {
          navigate(path);
        }
      } else {
        navigate(path);
      }
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
