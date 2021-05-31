import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import '../static/styles/App.css';

export const parameters = {
  layout: 'fullscreen',
  actions: { argTypesRegex: '^on[A-Z].*' },
  options: {
    storySort: {
      order: ['Demos', 'Components'],
    },
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
};

export const decorators = [
  renderStory => (
    <div className="wrapper">
      <div className="main">{renderStory()}</div>
    </div>
  ),
];
