import { Meta, StoryObj } from '@storybook/react';

import Header from '@/common/components/header';

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  argTypes: {
    title: { control: 'text' },
    showIcon: { control: 'boolean' },
    type: {
      control: 'radio',
      options: [1, 2],
      description: '1: Title on the left, 2: Title in the center',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Header>;

// 타입 1: 제목이 왼쪽에 있는 경우
export const Type1: Story = {
  args: {
    title: '제목왼쪽',
    showIcon: true,
    type: 1,
  },
};

// 타입 2: 제목이 중앙에 있는 경우
export const Type2: Story = {
  args: {
    title: '제목중앙',
    showIcon: true,
    type: 2,
  },
};

// 아이콘이 없는 경우
export const NoIcon: Story = {
  args: {
    title: '노아이콘',
    showIcon: false,
    type: 2,
  },
};
