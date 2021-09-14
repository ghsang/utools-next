import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import BrandCategories from './BrandCategories';

export default {
  title: 'Components/BrandCategories',
  component: BrandCategories,
} as ComponentMeta<typeof BrandCategories>;

const Template: ComponentStory<typeof BrandCategories> = (args) => <BrandCategories {...args} />;

export const Default = Template.bind({});

Default.args = {
  brand: {
    id: '1',
    code: 'utools',
    src: '',
    name: '우진툴',
    categories: [{ id: '1', code: 'leveler', name: '수평' }],
  },
  category: 'all',
  selectCategory: (c) => () => {alert(c);},
};
