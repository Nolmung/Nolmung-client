import Header from '@common/components/header';
import { Meta, StoryObj } from '@storybook/react';

const HeaderStoriesType = ['TitleLeft', 'TitleCenter'] as const;

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  argTypes: {
    title: { control: 'text' },
    showIcon: { control: 'boolean' },
    type: {
      control: 'radio',
      options: HeaderStoriesType,
    },
  },
};

export default meta;

type Story = StoryObj<typeof Header>;

export const TitleLeft: Story = {
  args: {
    title: '제목왼쪽',
    showIcon: true,
    type: 'TitleLeft',
  },
};

export const TitleCenter: Story = {
  args: {
    title: '제목중앙',
    showIcon: true,
    type: 'TitleCenter',
  },
};

export const NoIcon: Story = {
  args: {
    title: '노아이콘',
    showIcon: false,
    type: 'TitleCenter',
  },
};
