import tabItems from '@common/constants/tabBarItems';
import { useLocation } from 'react-router-dom';
import { S } from '@common/components/tabBar/index.styles';
import { TabBarType } from '@common/components/tabBar/index.type';

function TabBar() {
  const location = useLocation();

  return (
    <S.Wrapper>
      {tabItems.map((item: TabBarType) => (
        <S.IconArea to={item.path} key={item.path}>
          {location.pathname === item.path ? (
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
