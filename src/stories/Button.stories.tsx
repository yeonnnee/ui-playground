import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  shape: 'circle',
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  shape: 'circle',
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  shape: 'circle',
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  shape: 'circle',
  size: 'small',
  label: 'Button',
};

export const Square = Template.bind({});
Square.args = {
  shape: 'square',
  size: 'small',
  label: 'Button',
};