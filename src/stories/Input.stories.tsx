import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';


import { Input } from './Intput';

export default {
  title: 'Form/Input',
  component: Input,
} as ComponentMeta<typeof Input>;


const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const TextInput = Template.bind({});
TextInput.args = {
    id: 'id-input',
    type: 'text',
    label: 'ID'
};