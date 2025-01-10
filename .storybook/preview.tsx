import React from 'react';
import { Preview } from '@storybook/react';
import { CaroneProvider } from '../src/contexts/CaroneContext';
import './../resources/reset.css';
import './../resources/carone.global.css';
import { CaroneConfig } from '../src/configurations/CaroneConfig';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const config: CaroneConfig = {
    colors: {
        main: 'darkblue',
        secondary: 'lightblue',
        error: 'red',
        success: 'green',
        font: 'black',
        fontOnMain: 'white'
    },
    fonts: {
        mainFont: 'Verdana',
        titleFont: 'Arial',
        sizes: {
            small: '0.8rem',
            default: '1rem',
            large: '1.5rem',
            subtitle: '1.8rem',
            title: '3rem',
        }
    },
    sizes: {
        borderRadius: {
            small: '0.2rem',
            medium: '0.5rem',
            large: '1rem',
        }
    },
    maxContentWidth: '960px'
};

const preview: Preview = {
  decorators: [
    (Story) => (
      <CaroneProvider config={config}>
        <BrowserRouter>
          <Story />
        </BrowserRouter>
      </CaroneProvider>
    ),
  ],
};


export const parameters = {
  layout: 'fullscreen',
};

export default preview;