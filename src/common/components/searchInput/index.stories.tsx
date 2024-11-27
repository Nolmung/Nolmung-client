import { Meta, StoryObj } from '@storybook/react';

import SearchInput from '.';

const meta: Meta<typeof SearchInput> = {
  title: 'Components/Header',
  component: Header,
  argTypes: {
    title: { control: 'text' },
    showIcon: { control: 'boolean' },
    type: {
      control: 'radio',
      options: SearchInputStoriesType,
    },
  },
};

export default meta;
