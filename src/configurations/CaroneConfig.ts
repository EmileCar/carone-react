import { ReactNode } from "react";

type SizeKeys = '--s-99' | '--s-2' | '--s-1' | '--s0' | '--s1' | '--s2' | '--s3';
type FontSizeKeys = '--small-font-size' | '--default-font-size' | '--large-font-size' | '--subtitle-font-size' | '--title-font-size';
type BorderRadiusSizeKeys = '--border-radius-sm' | '--border-radius-md' | '--border-radius-lg';

/**
 * CaroneConfig is the configuration object for the CaroneProvider.
 * All properties are optional, and if not provided, default values will be used.
 *
 * @param mainColor - The main color of the application.
 * @param secondaryColor - The secondary color of the application.
 * @param errorColor - The color for error messages.
 * @param successColor - The color for success messages.
 * @param mainFont - The main font for the application.
 * @param titleFont - The font for titles in the application.
 * @param sizes - The sizes for the application.
 *  - `--s-99`
 * - `--s-2`
 * - `--s-1`
 * - `--s0`
 * - `--s1`
 * - `--s2`
 * - `--s3`
 * @param fontSizes - The font sizes for the application.
 * - `--small-font-size`
 * - `--default-font-size`
 * - `--large-font-size`
 * - `--subtitle-font-size`
 * - `--title-font-size`
 * @param borderRadiusSizes - The border radius sizes for the application.
 * - `--border-radius-sm`
 * - `--border-radius-md`
 * - `--border-radius-lg`
 */
export interface CaroneConfig {
  mainColor?: string;
  secondaryColor?: string;
  errorColor?: string;
  successColor?: string;
  mainFont?: string;
  titleFont?: string;
  fontSizes?: {
    [key in FontSizeKeys]?: string;
  };
  sizes?: {
    [key in SizeKeys]?: string;
  };
  borderRadiusSizes?: {
    [key in BorderRadiusSizeKeys]?: string;
  };
}

export interface ConfigProviderProps {
  config?: Partial<CaroneConfig>;
  children: ReactNode;
}

export const defaultConfig: CaroneConfig = {
  mainColor: 'blue',
  secondaryColor: 'black',
  errorColor: 'red',
  successColor: 'green',
  mainFont: 'Arial',
  titleFont: 'Arial',
  fontSizes: {
    '--small-font-size': '1rem',
    '--default-font-size': '1.2rem',
    '--large-font-size': '1.5rem',
    '--subtitle-font-size': '1.8rem',
    '--title-font-size': '3rem',
  },
  sizes: {
    '--s-99': '0.1rem',
    '--s-2': '0.2rem',
    '--s-1': '0.5rem',
    '--s0': '1rem',
    '--s1': '1.5rem',
    '--s2': '2rem',
    '--s3': '3rem',
  },
  borderRadiusSizes: {
    '--border-radius-sm': '0.2rem',
    '--border-radius-md': '0.5rem',
    '--border-radius-lg': '1rem',
  },
};