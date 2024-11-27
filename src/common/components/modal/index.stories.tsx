import { Meta, StoryFn } from '@storybook/react';
import Modal from './index';
import { ModalProps } from './index.type';

export default {
  title: 'Components/Modal',
  component: Modal,
  argTypes: {
    isOpen: { control: 'boolean' },
    closeModal: { action: 'closeModal' },
    children: { control: 'text' },
  },
} as Meta;

const Template: StoryFn<ModalProps> = (args) => <Modal {...args} />;

export const Default = Template.bind({});
Default.args = {
  isOpen: true,
  children: (
    <div style={{ padding: '16px', textAlign: 'center' }}>모달입니다</div>
  ),
};

export const WithLongContent = Template.bind({});
WithLongContent.args = {
  isOpen: true,
  children: (
    <div style={{ padding: '16px', textAlign: 'center' }}>
      <p>긴 글을 작성할 경우</p>
      <p>이런 식으로 커스텀 할 수 있어요 !</p>
    </div>
  ),
};

export const Closed = Template.bind({});
Closed.args = {
  isOpen: false,
};
