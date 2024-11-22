import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Button from './Button';

// Storybook에서 보여줄 메타데이터 설정
export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

const Template: StoryFn<{ label: string; onClick: () => void }> = (args) => (
  <Button {...args} />
);

// 기본 스토리
export const Primary = Template.bind({});
Primary.args = {
  label: 'Click Me',
  onClick: () => alert('asadsadsadas'),
};
