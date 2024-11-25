import tabItems from '@common/constants/tabBarItems';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import { TabBarType } from '@/common/components/TabBara/index.type';

function TabBar() {
  const location = useLocation();

  return (
    <Wrapper>
      {tabItems.map((item: TabBarType) => (
        <IconArea to={item.path} key={item.path}>
          {location.pathname === item.path ? (
            <item.activeIcon />
          ) : (
            <item.icon />
          )}
          <IconDescription>{item.label}</IconDescription>
        </IconArea>
      ))}
    </Wrapper>
  );
}

export default TabBar;

const Wrapper = styled.div`
  width: 100%;
  height: 90px;
  min-width: 320px;
  position: sticky;
  bottom: 0;
  left: 0;
  background-color: #fff;
  z-index: 1000;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const IconArea = styled(Link)`
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  text-align: center;
  color: #5e5e5e;
`;

const IconDescription = styled.div`
  font-size: 12px;
  text-align: center;
`;
