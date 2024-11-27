import { Meta, StoryObj } from '@storybook/react';

import SearchInput from '@/common/components/searchInput';

const meta: Meta<typeof SearchInput> = {
  title: 'Components/SearchInput',
  component: SearchInput,
  argTypes: {
    placeholder: { control: 'text', description: 'Input placeholder text' },
    value: { control: 'text', description: 'Controlled value of the input' },
    onChange: { action: 'changed', description: 'Input change event handler' },
    disabled: { control: 'boolean', description: 'Disable the input field' },
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
      description: 'Size of the input field',
    },
  },
};

export default meta;

type Story = StoryObj<typeof SearchInput>;

export const Default: Story = {
  args: {
    placeholder: 'Search here...',
    value: '',
    disabled: false,
    size: 'medium',
  },
};

export const WithValue: Story = {
  args: {
    placeholder: 'Search here...',
    value: 'Pre-filled value',
    disabled: false,
    size: 'medium',
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Search here...',
    value: '',
    disabled: true,
    size: 'medium',
  },
};

export const SmallSize: Story = {
  args: {
    placeholder: 'Small size input',
    value: '',
    disabled: false,
    size: 'small',
  },
};

export const LargeSize: Story = {
  args: {
    placeholder: 'Large size input',
    value: '',
    disabled: false,
    size: 'large',
  },
};
