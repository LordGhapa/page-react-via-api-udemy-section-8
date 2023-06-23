import { Heading } from '.';

export default {
  title: 'Heading',
  component: Heading,
  tags: ['autodocs'],
  argTypes: {
    title: { type: 'string' },
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

export const Template = (args) => <Heading {...args} />;

export const Primary = {
  args: {
    title: 'Title',
  },
};
