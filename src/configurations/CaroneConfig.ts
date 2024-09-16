import { ReactNode } from "react";

/**
 * The available sizes of the application.
 * The values of these sizes are used as CSS variables.
*/
export enum Size {
  XS = '--s-99',
  SM = '--s-2',
  MD = '--s-1',
  LG = '--s0',
  XL = '--s1',
  XXL = '--s2',
  XXXL = '--s3'
}

/**
 * The available font sizes of the application.
 * The values of these sizes are used as CSS variables.
*/
export enum FontSize {
  Small = '--small-font-size',
  Default = '--default-font-size',
  Large = '--large-font-size',
  Subtitle = '--subtitle-font-size',
  Title = '--title-font-size'
}

/**
 * The available border radius sizes of the application.
 * The values of these sizes are used as CSS variables.
*/
export enum BorderRadius {
  Small = '--border-radius-sm',
  Medium = '--border-radius-md',
  Large = '--border-radius-lg'
}

/**
 * The available colors of the application.
*/
export type Colors = {
  main: string;
  secondary: string;
  error: string;
  success: string;
  font: string;
  fontOnMain: string;
};

export type FontConfig = {
  mainFont: string;
  titleFont: string;
  sizes: Partial<Record<FontSize, string>>;
};

export type SizeConfig = {
  padding: Partial<Record<Size, string>>;
  borderRadius: Partial<Record<BorderRadius, string>>;
};

/**
 * CaroneConfig is the configuration object for the CaroneProvider.
 * All properties are optional, and if not provided, default values will be used.
 *
 * @param colors {Partial<Colors>} The colors of the application.
 * @param fonts {Partial<FontConfig>} The fonts of the application.
 * @param sizes {Partial<SizeConfig>} The sizes of the application.
*/
export interface CaroneConfig {
  colors?: Partial<Colors>;
  fonts?: Partial<FontConfig>;
  sizes?: Partial<SizeConfig>;
}

export interface ConfigProviderProps {
  config?: Partial<CaroneConfig>;
  children: ReactNode;
}

export const defaultConfig: CaroneConfig = {
  colors: {
    main: 'blue',
    secondary: 'black',
    error: 'red',
    success: 'green',
    font: 'green',
    fontOnMain: 'white',
  },
  fonts: {
    mainFont: 'Verdana',
    titleFont: 'Arial',
    sizes: {
      [FontSize.Small]: '0.8rem',
      [FontSize.Default]: '1rem',
      [FontSize.Large]: '1.5rem',
      [FontSize.Subtitle]: '1.8rem',
      [FontSize.Title]: '3rem',
    }
  },
  sizes: {
    padding: {
      [Size.XS]: '0.1rem',
      [Size.SM]: '0.2rem',
      [Size.MD]: '0.5rem',
      [Size.LG]: '1rem',
      [Size.XL]: '1.5rem',
      [Size.XXL]: '2rem',
      [Size.XXXL]: '3rem',
    },
    borderRadius: {
      [BorderRadius.Small]: '0.2rem',
      [BorderRadius.Medium]: '0.5rem',
      [BorderRadius.Large]: '1rem',
    }
  }
};
