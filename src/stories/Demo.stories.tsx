import { useState, useEffect } from 'react';
import type { ComponentProps } from 'react';
import { Story, Meta } from '@storybook/react';

import { Diagram } from '../components/Diagram';
import { Switch } from '../components/Switch';
import { Sensor } from '../components/Sensor';

import * as SensorStories from '../components/Sensor/Sensor.stories';
import * as SwitchStories from '../components/Switch/Switch.stories';

const possibleDiagramItems = {
  Switch,
  Sensor,
};

export default {
  title: 'Demos/Diagram',
  component: Diagram,
  subcomponents: { Switch, Sensor },
  argTypes: {
    backgroundImage: {
      table: { category: 'Background' },
    },
    width: {
      table: { category: 'Sizes' },
    },
    height: {
      table: { category: 'Sizes' },
    },
    className: {
      table: { category: 'Other' },
    },
  },
} as Meta;

const Template: Story<ComponentProps<typeof Diagram>> = (args): JSX.Element => {
  interface State {
    switch?: boolean;
    sensor1?: number;
    sensor2?: number;
    sensor3?: number;
    sensor4?: number;
  }

  const [state, setState] = useState<State>({
    switch: undefined,
    sensor1: undefined,
    sensor2: 42442.41241244124,
    sensor3: 212.421421,
    sensor4: 0.545345,
  });

  useEffect(() => {
    const id = setInterval(() => {
      setState(prevState => {
        const prevSwitch1State = prevState.switch;

        let newSwitchesState;
        switch (prevSwitch1State) {
          case undefined:
            newSwitchesState = false;
            break;

          case false:
            newSwitchesState = true;
            break;

          case true:
            newSwitchesState = undefined;
            break;

          default:
            newSwitchesState = undefined;
        }

        return {
          ...prevState,
          switch: newSwitchesState,
          sensor2: 42442 * Math.random(),
          sensor3: 212 + Math.random(),
          sensor4: 0.54 + Math.random() / 100,
        };
      });
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <Diagram {...args}>
      <Switch
        className="my-switch"
        state={state.switch}
        x={440}
        y={545}
        width={10}
        notAvailableColor="black"
      />
      <Switch
        className="my-switch"
        state={state.switch}
        x={277}
        y={344}
        width={12}
        disabledColor="orange"
      />
      <Switch
        className="my-switch"
        state={state.switch}
        x={600}
        y={190}
        width={10}
        enabledColor="SpringGreen"
      />
      <Switch
        className="my-switch"
        state={state.switch}
        x={185}
        y={185}
        width={10}
        enabledColor="limegreen"
        disabledColor="maroon"
        notAvailableColor="slategrey"
      />
      <Switch className="my-switch" state={state.switch} x={680} y={450} width={25} />
      <Sensor
        className="my-sensor"
        value={state.sensor1}
        x={325}
        y={525}
        width={52}
        height={20}
        format="0.00 °C"
        formatOptions={{ nullFormat: 'N/A' }}
      />
      <Sensor
        className="my-sensor"
        value={state.sensor2}
        x={220}
        y={300}
        width={100}
        height={20}
        format="0.00 мл"
      />
      <Sensor
        className="my-sensor my-sensor--3"
        value={state.sensor3}
        x={465}
        y={185}
        width={100}
        height={20}
        format="0.00 °C"
      />
      <Sensor
        className="my-sensor"
        value={state.sensor4}
        x={120}
        y={100}
        width={100}
        height={20}
        format="0.00%"
      />
      <Sensor
        className="my-sensor"
        value={state.sensor4}
        x={660}
        y={320}
        width={100}
        height={20}
        format="0%"
      />
    </Diagram>
  );
};

export const FullApp = Template.bind({});
FullApp.args = { backgroundImage: '/images/house_plan.svg', width: 917, height: 614 };

type PlaygroundStoryType = Story<
  ComponentProps<typeof Diagram> & {
    items: ({ type: string } & (ComponentProps<typeof Switch> | ComponentProps<typeof Sensor>))[];
  }
>;

const PlaygroundTemplate: PlaygroundStoryType = ({ items, ...args }): JSX.Element => {
  return (
    <Diagram {...args}>
      {items.map(({ type, ...item }) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const Item = possibleDiagramItems[type];
        if (!Item) return null;
        return <Item {...item} />;
      })}
    </Diagram>
  );
};

export const Playground = PlaygroundTemplate.bind({});
Playground.args = {
  ...FullApp.args,
  items: [
    {
      ...SwitchStories.CustomColors.args,
      type: 'Switch',
      state: true,
      x: 440,
      y: 545,
      width: 10,
    },
    {
      ...SwitchStories.CustomStyles.args,
      type: 'Switch',
      state: false,
      x: 277,
      y: 344,
      width: 12,
    },
    {
      ...SensorStories.CustomStyles.args,
      type: 'Sensor',
      value: 212.35,
      x: 465,
      y: 185,
      width: 100,
      height: 20,
      format: '0.00 °C',
      className: 'my-sensor my-sensor--3',
    },
    {
      ...SensorStories.CustomStyles.args,
      type: 'Sensor',
      value: 0.5545,
      x: 120,
      y: 100,
      width: 100,
      height: 20,
      format: '0.00%',
    },
  ],
};
Playground.argTypes = {
  items: {
    table: {
      category: 'Items',
    },
  },
};
