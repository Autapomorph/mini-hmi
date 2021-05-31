import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';

import type { ReactNode } from 'react';

import DimensionsContext from '../../context/dimensionsContext';

interface Props {
  children: ReactNode;
  /**
   * Image url to be used as a background
   */
  backgroundImage: string;
  /**
   * Original background image width (in pixels)
   */
  width: number;
  /**
   * Original background image height (in pixels)
   */
  height: number;
  /**
   * Custom class name to be attached
   */
  className?: string;
}

/**
 * Root component for other mini-hmi components
 */
const Diagram = ({ children, className, backgroundImage, width, height }: Props): JSX.Element => {
  const diagramRef = useRef<HTMLDivElement>(null);

  const [scale, setScale] = useState(1);
  const [xOffset, setXOffset] = useState(0);
  const [yOffset, setYOffset] = useState(0);

  useEffect(() => {
    const onResize = () => {
      if (!diagramRef.current) return;

      const parent = diagramRef.current.parentElement;

      if (!parent) return;

      const parentBounds = parent.getBoundingClientRect();

      const scaleX = parentBounds.width / width;
      const scaleY = parentBounds.height / height;
      setScale(Math.min(scaleX, scaleY));
      setXOffset((parentBounds.width - scale * width) / 2);
      setYOffset((parentBounds.height - scale * height) / 2);
    };

    window.addEventListener('resize', onResize);
    onResize();

    return () => {
      window.removeEventListener('resize', onResize);
    };
  });

  return (
    <DimensionsContext.Provider
      value={{
        scale,
        xOffset,
        yOffset,
      }}
    >
      <div
        ref={diagramRef}
        className={clsx(className)}
        style={{
          position: 'relative',
          height: '100%',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundAttachment: 'scroll',
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        {children}
      </div>
    </DimensionsContext.Provider>
  );
};

export { Diagram };
