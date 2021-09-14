import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import BrandLogos from './BrandLogos';

export default {
  title: 'Components/BrandLogos',
  component: BrandLogos,
} as ComponentMeta<typeof BrandLogos>;

const Template: ComponentStory<typeof BrandLogos> = (args) => <BrandLogos {...args} />;

export const Default = Template.bind({});

Default.args = {
  brandCode: 'utools',
  selectBrandCode: (_: string) => () => { },
};
