import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { fetchItems } from '../commands';
import ItemTable from './ItemTable';

export default {
  title: 'Components/ItemTable',
  component: ItemTable,
} as ComponentMeta<typeof ItemTable>;

const Template: ComponentStory<typeof ItemTable> = (args) => <ItemTable {...args} />;

export const Default = Template.bind({});

Default.args = {
  fetchItems: fetchItems,
};
