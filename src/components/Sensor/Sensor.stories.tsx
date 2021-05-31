import type { ComponentProps } from 'react';
import type { Story, Meta } from '@storybook/react';

import { Sensor } from './Sensor';

export default {
  title: 'Components/Sensor',
  component: Sensor,
  argTypes: {
    value: {
      table: { category: 'Value' },
    },
    x: {
      table: { category: 'Position' },
    },
    y: {
      table: { category: 'Position' },
    },
    width: {
      table: { category: 'Sizes' },
    },
    height: {
      table: { category: 'Sizes' },
    },
    format: {
      table: { category: 'Format' },
    },
    formatOptions: {
      table: { category: 'Format' },
    },
    className: {
      table: { category: 'Other' },
    },
  },
} as Meta;

const Template: Story<ComponentProps<typeof Sensor>> = (args): JSX.Element => {
  return <Sensor {...args} />;
};

export const Default = Template.bind({});
Default.args = { value: 25600, x: 30, y: 30, width: 100, height: 20 };

export const CustomStyles = Template.bind({});
CustomStyles.args = {
  ...Default.args,
  className: 'my-sensor',
};

export const CustomFormat = Template.bind({});
CustomFormat.args = {
  ...CustomStyles.args,
  format: '0.0a pts',
};
