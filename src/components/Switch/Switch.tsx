import { useContext } from 'react';
import clsx from 'clsx';

import DimensionsContext from '../../context/dimensionsContext';

interface Props {
  /**
   * State to be displayed<br/>
   *
   * Available states: **on**, **off** and **not available**:
   *
   * * `true` is treated as **on**
   * * `false` is treated as **off**
   * * `undefined` is treated as **not available**
   */
  state: boolean | undefined;
  /**
   * X position (in pixels)
   */
  x: number;
  /**
   * Y position (in pixels)
   */
  y: number;
  /**
   * Width (in pixels)
   */
  width: number;
  /**
   * Height (in pixels)<br/>
   * @default width
   */
  height?: number;
  /**
   * CSS color for **enabled** state
   */
  enabledColor?: string;
  /**
   * CSS color for **disabled** state
   */
  disabledColor?: string;
  /**
   * CSS color for **not available** state
   */
  notAvailableColor?: string;
  /**
   * Custom class name to be attached
   */
  className?: string;
}

/**
 * Displays boolean values<br/>
 * Supports 3 states: **on**, **off** and **not available**:
 */
const Switch = ({
  state,
  x,
  y,
  width,
  height = width,
  className,
  enabledColor = 'forestgreen',
  disabledColor = 'firebrick',
  notAvailableColor = 'darkgrey',
}: Props): JSX.Element => {
  const { scale, xOffset, yOffset } = useContext(DimensionsContext);

  let color;
  switch (state) {
    case true:
      color = enabledColor;
      break;
    case false:
      color = disabledColor;
      break;
    default:
      color = notAvailableColor;
      break;
  }

  return (
    <div
      className={clsx(className)}
      style={{
        position: 'absolute',
        top: `${yOffset + scale * y}px`,
        left: `${xOffset + scale * x}px`,
        width: `${width * scale * 2}px`,
        height: `${height * scale * 2}px`,
        backgroundColor: color,
      }}
    />
  );
};

export { Switch };
