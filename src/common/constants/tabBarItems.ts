import {
  TabBarMapIcon,
  TabBarRecommendIcon,
  TabBarCalenderIcon,
  TabBarMyIcon,
  TabBarMapIconActive,
  TabBarRecommendIconActive,
  TabBarCalenderIconActive,
  TabBarMyIconActive,
} from '@/assets/images/svgs';

export const tabItems = [
  {
    path: '/',
    icon: TabBarMapIcon,
    activeIcon: TabBarMapIconActive,
    label: '지도',
  },
  {
    path: '/recommend',
    icon: TabBarRecommendIcon,
    activeIcon: TabBarRecommendIconActive,
    label: '추천',
  },
  {
    path: '/todaymung',
    icon: TabBarCalenderIcon,
    activeIcon: TabBarCalenderIconActive,
    label: '오늘멍',
  },
  {
    path: '/my',
    icon: TabBarMyIcon,
    activeIcon: TabBarMyIconActive,
    label: '마이',
  },
];

export default tabItems;
