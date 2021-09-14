import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Shelf from './Shelf';
import { fetchBrand } from '../commands/fetchBrand';

export default {
  title: 'Components/Shelf',
  component: Shelf,
} as ComponentMeta<typeof Shelf>;

const Template: ComponentStory<typeof Shelf> = (_args) => 
  <Shelf brandCode='utools' fetchBrand={fetchBrand} />;

export const Default = Template.bind({});
