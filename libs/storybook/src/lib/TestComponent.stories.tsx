import React from "react";
import { Story, Meta } from '@storybook/react';
import { TestComponent, TestComponentProps } from './TestComponent';

export default {
  component: TestComponent,
  title: 'TestComponent',
} as Meta;

const Template: Story<TestComponentProps> = (args) => (
  <TestComponent {...args} />
);

export const Default = Template.bind({});
Default.args = {};
