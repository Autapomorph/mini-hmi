import type { ComponentProps } from 'react';
import type { Story, Meta } from '@storybook/react';

import { Switch } from './Switch';

export default {
  title: 'Components/Switch',
  component: Switch,
  argTypes: {
    state: {
      options: [true, false, undefined],
      control: {
        type: 'radio',
        labels: { true: 'Enabled', false: 'Disabled', undefined: 'Not Available' },
      },
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
    enabledColor: {
      table: { category: 'Colors' },
    },
    disabledColor: {
      table: { category: 'Colors' },
    },
    notAvailableColor: {
      table: { category: 'Colors' },
    },
    className: {
      table: { category: 'Other' },
    },
  },
} as Meta;

const Template: Story<ComponentProps<typeof Switch>> = (args): JSX.Element => {
  return <Switch {...args} />;
};

export const Default = Template.bind({});
Default.args = { state: true, x: 30, y: 30, width: 10 };

export const CustomStyles = Template.bind({});
CustomStyles.args = {
  ...Default.args,
  className: 'my-switch',
};

export const CustomColors = Template.bind({});
CustomColors.args = {
  ...CustomStyles.args,
  enabledColor: 'limegreen',
  disabledColor: 'maroon',
  notAvailableColor: 'slategrey',
};
