import React from 'react';

import Header from '.';

export default {
  title: 'Components/Header',
  component: Header,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Header {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};

