import TabBar from '@common/components/TabBar';
import tabItems from '@common/constants/tabBarItems';
import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

import GlobalStyle from '@/styles/GlobalStyles';

const meta: Meta<typeof TabBar> = {
  title: 'Components/TabBar',
  component: TabBar,
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={['/']}>
        <div style={{ width: '390px', margin: '0 auto' }}>
          <GlobalStyle />
          <Story />
        </div>
      </MemoryRouter>
    ),
  ],
  argTypes: {
    items: {
      description: 'TabBar에 표시될 아이템 리스트',
      control: { type: 'object' }, // Props를 컨트롤할 수 있도록 설정
    },
  },
};

export default meta;

type Story = StoryObj<typeof TabBar>;

export const 기본: Story = {
  args: {
    items: tabItems, // tabItems를 Props로 전달
  },
};
