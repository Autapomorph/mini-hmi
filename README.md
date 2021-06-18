# mini-hmi

React component library to build Human-machine interface\
[Storybook demos](https://mini-hmi.vercel.app/)

## Installing

```sh
npm i mini-hmi
```

## Usage

You need to wrap `mini-hmi` components with `Diagram`:

```javascript
import { Diagram, Switch, Sensor } from 'mini-hmi';

<Diagram backgroundImage="path/to/background.img" width={1920} height={1080}>
  <Switch className="my-switch" state={false} x={440} y={545} width={10} />
  <Sensor className="my-sensor" value={0.34} x={660} y={320} width={100} height={20} format="0%" />
</Diagram>
```

## Available components

### Diagram

Root component to display other components\
Shows background image you provide and aligns nested components

Props:

|      Prop       |                 Description                  |   Type   | Required |
| :-------------: | :------------------------------------------: | :------: | :------: |
| backgroundImage |     Image url to be used as a background     | `string` |    ✅    |
|      width      | Original background image width (in pixels)  | `number` |    ✅    |
|     height      | Original background image height (in pixels) | `number` |    ✅    |
|    className    |       Custom class name to be attached       | `string` |    ❌    |

### Switch

Displays boolean values\
Supports 3 states: **on**, **off** and **not available**

Props:

|       Prop        |           Description            |           Type           | Required |
| :---------------: | :------------------------------: | :----------------------: | :------: |
|       state       |         State to display         | `boolean` \| `undefined` |    ✅    |
|         x         |      X position (in pixels)      |         `number`         |    ✅    |
|         y         |      Y position (in pixels)      |         `number`         |    ✅    |
|       width       |        Width (in pixels)         |         `number`         |    ✅    |
|      height       |        Height (in pixels)        |         `number`         |    ❌    |
|   enabledColor    |        **enabled** color         |         `string`         |    ❌    |
|   disabledColor   |        **disabled** color        |         `string`         |    ❌    |
| notAvailableColor |          **N/A** color           |         `string`         |    ❌    |
|     className     | Custom class name to be attached |         `string`         |    ❌    |

### Sensor

Displays numeric values with optional format\
See `numerable` [formats](https://github.com/gastonmesseri/numerable#1234-formatting-numbers) and [options](https://github.com/gastonmesseri/numerable#format)

Props:

|     Prop      |           Description            |                     Type                      | Required |
| :-----------: | :------------------------------: | :-------------------------------------------: | :------: |
|     value     |         State to display         | `number` \| `string` \| `null` \| `undefined` |    ✅    |
|       x       |      X position (in pixels)      |                   `number`                    |    ✅    |
|       y       |      Y position (in pixels)      |                   `number`                    |    ✅    |
|     width     |        Width (in pixels)         |                   `number`                    |    ✅    |
|    height     |        Height (in pixels)        |                   `number`                    |    ❌    |
|    format     |        Format for `value`        |       `string` \| `null` \| `undefined`       |    ❌    |
| formatOptions |    Format options for `value`    |                   `string`                    |    ❌    |
|   className   | Custom class name to be attached |                   `string`                    |    ❌    |

## Customization

You can provide `className` prop to any component to display custom styles
