import { S } from '@common/components/tabBar/index.styles';
import { TabBarType } from '@common/components/tabBar/index.type';
import tabItems from '@common/constants/tabBarItems';
import { useLocation } from 'react-router-dom';

function TabBar() {
  const location = useLocation();
  return (
    <S.Wrapper>
      {tabItems.map((item: TabBarType) => {
        const isActive =
          location.pathname === item.path ||
          location.pathname.startsWith(`${item.path}/`);

        return (
          <S.IconArea to={item.path} key={item.path}>
            {isActive ? <item.activeIcon /> : <item.icon />}
            <S.IconDescription>{item.label}</S.IconDescription>
          </S.IconArea>
        );
      })}
    </S.Wrapper>
  );
}

export default TabBar;
