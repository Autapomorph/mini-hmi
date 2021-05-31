import { useContext } from 'react';
import useFitText from 'use-fit-text';
import { format as numerableFormat } from 'numerable';
import clsx from 'clsx';

import DimensionsContext from '../../context/dimensionsContext';
import type { NumerableFormatOptions } from '../../types/numerable';

interface Props {
  /**
   * Value to be displayed
   */
  value: string | number | null | undefined;
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
   * Format for `value`<br/>
   * See [numerable formats](https://github.com/gastonmesseri/numerable#1234-formatting-numbers)
   */
  format?: string | null | undefined;
  /**
   * Format options for `value`<br/>
   * See [numerable format options](https://github.com/gastonmesseri/numerable#format)
   */
  formatOptions?: NumerableFormatOptions;
  /**
   * Custom class name to be attached
   */
  className?: string;
}

/**
 * Displays numeric values with optional format<br/>
 * Text will be auto resized to fit Sensor dimensions
 */
const Sensor = ({
  value,
  x,
  y,
  width,
  height = width,
  format,
  formatOptions = { nullFormat: 'N/A' },
  className,
}: Props): JSX.Element => {
  const { scale, xOffset, yOffset } = useContext(DimensionsContext);

  const { fontSize, ref } = useFitText({
    minFontSize: 1,
    maxFontSize: scale > 1 ? 100 * scale : 100,
    resolution: 10,
  });

  return (
    <div
      ref={ref}
      className={clsx(className)}
      style={{
        position: 'absolute',
        fontSize: fontSize === '100%' && scale > 1 ? `${scale * 100}%` : fontSize, // stylelint-disable
        top: `${yOffset + scale * y}px`,
        left: `${xOffset + scale * x}px`,
        width: `${width * scale}px`,
        height: `${height * scale}px`,
        lineHeight: `${height * scale}px`,
        whiteSpace: 'nowrap',
      }}
    >
      {numerableFormat(value, format, formatOptions)}
    </div>
  );
};

export type { NumerableFormatOptions };
export { Sensor };
