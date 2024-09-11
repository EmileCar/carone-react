import { ReactNode } from "react";

type SizeKeys = '--s-99' | '--s-2' | '--s-1' | '--s0' | '--s1' | '--s2' | '--s3';
type FontSizeKeys = '--small-font-size' | '--default-font-size' | '--large-font-size' | '--subtitle-font-size' | '--title-font-size';
type BorderRadiusSizeKeys = '--border-radius-sm' | '--border-radius-md' | '--border-radius-lg';

export interface CaroneConfig {
  mainColor?: string;
  secondaryColor?: string;
  errorColor?: string;
  successColor?: string;
  sizes?: {
    [key in SizeKeys]?: string;
  };
  fontSizes?: {
    [key in FontSizeKeys]?: string;
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
  mainColor: '#3498db',
  secondaryColor: '#2ecc71',
  sizes: {
    '--s-99': '0.1rem',
    '--s-2': '0.2rem',
    '--s-1': '0.5rem',
    '--s0': '1rem',
    '--s1': '1.5rem',
    '--s2': '2rem',
    '--s3': '3rem',
  },
  fontSizes: {
    '--small-font-size': '1rem',
    '--default-font-size': '1.2rem',
    '--large-font-size': '1.5rem',
    '--subtitle-font-size': '1.8rem',
    '--title-font-size': '3rem',
  },
  borderRadiusSizes: {
    '--border-radius-sm': '0.2rem',
    '--border-radius-md': '0.5rem',
    '--border-radius-lg': '1rem',
  },
};