import { Footer } from '.';

export default {
  title: 'Footer',
  component: Footer,
  args: {
    html: 'feito por um ser qualquer',
  },
};

export const Template = (args) => {
  return (
    <div>
      <Footer {...args} />
    </div>
  );
};
