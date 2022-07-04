import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';


import { Input } from './Intput';

export default {
  title: 'Form/Input',
  component: Input,
} as ComponentMeta<typeof Input>;


const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const IDInput = Template.bind({});
IDInput.args = {
  id: 'id-input',
  type: 'text',
  label: 'ID',
  status: 'valid'
};

export const PwInput = Template.bind({});
PwInput.args = {
  id: 'pw-input',
  type: 'password',
  label: 'Password',
  status: 'valid'
}

export const CheckBox = Template.bind({});
CheckBox.args = {
  id: 'checkbox-type',
  type: 'checkbox',
  label: '체크박스',
  status: 'valid'
}

export const Radio = Template.bind({});
Radio.args = {
  id: 'radio-type',
  type: 'radio',
  label: '선택1',
  status: 'valid'
}

export const InvalidTextInput = Template.bind({});
InvalidTextInput.args = {
  id: 'text-input',
  type: 'text',
  label: 'Text',
  status: 'invalid'
}