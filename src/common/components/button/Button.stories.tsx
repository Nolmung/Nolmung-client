import { Meta, StoryFn } from '@storybook/react';
import Button from './Button';
import { ButtonProps } from './Button.type';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    label: { control: 'text' },
    onClick: { action: 'clicked' },
    width: { control: 'text' },
    height: { control: 'text' },
    backgroundColor: { control: 'color' },
    color: { control: 'color' },
    fontSize: { control: 'text' },
    fontWeight: { control: 'number' },
    borderRadius: { control: 'text' },
  },
} as Meta;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Default Button',
  width: '142px',
  height: '48px',
  backgroundColor: '#F5F6F8',
  color: '#5D5D5D',
  fontSize: '14px',
  fontWeight: '600',
  borderRadius: '12px',
};

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary Button',
  backgroundColor: '#007BFF',
  color: '#FFFFFF',
};

export const Rounded = Template.bind({});
Rounded.args = {
  label: 'Rounded Button',
  borderRadius: '24px',
  backgroundColor: '#28A745',
  color: '#FFFFFF',
};

export const Large = Template.bind({});
Large.args = {
  label: 'Large Button',
  width: '200px',
  height: '60px',
  fontSize: '18px',
};

export const Small = Template.bind({});
Small.args = {
  label: 'Small Button',
  width: '100px',
  height: '32px',
  fontSize: '12px',
};
