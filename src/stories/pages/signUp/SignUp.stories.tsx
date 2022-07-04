import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SignUp }  from './SignUp';

export default {
  title: 'Page/SignUp',
  component: SignUp,
} as ComponentMeta<typeof SignUp>;

const Template: ComponentStory<typeof SignUp> = (args) => <SignUp {...args} />;

export const example = Template.bind({});