import React from 'react';
import { Preview } from '@storybook/react';
import { CaroneProvider } from '../src/contexts/CaroneContext';
import './../resources/reset.css';
import './../src/styles/carone.global.css';

const preview: Preview = {
  decorators: [
    (Story) => (
      <CaroneProvider>
        <Story />
      </CaroneProvider>
    ),
  ],
};

export default preview;