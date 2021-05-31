import { createContext } from 'react';

interface IDimensionsContext {
  scale: number;
  xOffset: number;
  yOffset: number;
}

const DimensionsContext = createContext<IDimensionsContext>({
  scale: 1,
  xOffset: 0,
  yOffset: 0,
});

export default DimensionsContext;
