import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Nav from './Nav';

export default {
  title: 'Components/Nav',
  component: Nav,
} as ComponentMeta<typeof Nav>;

const Template: ComponentStory<typeof Nav> = (_args) => <Nav/>;

export const Default = Template.bind({});
