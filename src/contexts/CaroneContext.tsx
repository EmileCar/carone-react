import React, { createContext, useContext, useEffect } from 'react';
import { CaroneConfig, ConfigProviderProps, defaultConfig, Size, FontSize, BorderRadius } from '../configurations/CaroneConfig';

const CaroneContext = createContext<CaroneConfig>(defaultConfig);

/**
 * CaroneProvider provides a context for configuring the web application.
 * Put this in the root of your project.
 *
 * @param config - The configuration object. If certain properties are not provided, default values will be used.
 * @param children - The children components (the rest of the application).
 *
 * @example
 * ```tsx
 * // the default configuration object as an example
 * const config = {
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
 * <CaroneProvider config={config}>
 *   <App />
 * </CaroneProvider>
 * ```
 */
export const CaroneProvider = ({ config = {}, children }: ConfigProviderProps) => {
  const mergedConfig: CaroneConfig = {
    ...defaultConfig,
    ...config,
    colors: { ...defaultConfig.colors, ...config.colors },
    fonts: { ...defaultConfig.fonts, ...config.fonts },
    sizes: { ...defaultConfig.sizes, ...config.sizes },
  };

  useEffect(() => {
    const root = document.documentElement;

    // Apply colors
    const colors = mergedConfig.colors || defaultConfig.colors!;
    root.style.setProperty('--main-color', colors.main || defaultConfig.colors!.main!);
    root.style.setProperty('--secondary-color', colors.secondary || defaultConfig.colors!.secondary!);
    root.style.setProperty('--error-color', colors.error || defaultConfig.colors!.error!);
    root.style.setProperty('--success-color', colors.success || defaultConfig.colors!.success!);
    root.style.setProperty('--default-font-color', colors.font || defaultConfig.colors!.font!);
    root.style.setProperty('--font-color-on-main-color', colors.fontOnMain || defaultConfig.colors!.fontOnMain!);

    // Apply fonts
    const fonts = mergedConfig.fonts || defaultConfig.fonts!;
    root.style.setProperty('--main-font', fonts.mainFont || defaultConfig.fonts!.mainFont!);
    root.style.setProperty('--title-font', fonts.titleFont || defaultConfig.fonts!.titleFont!);
    Object.entries(fonts.sizes || {}).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });

    // Apply sizes and border radius
    const sizes = mergedConfig.sizes || defaultConfig.sizes!;
    Object.entries(sizes.padding || {}).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
    Object.entries(sizes.borderRadius || {}).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
  }, [mergedConfig]);

  return (
    <CaroneContext.Provider value={mergedConfig}>
      {children}
    </CaroneContext.Provider>
  );
};

/**
 * useConfig is a hook that provides the configuration object that was passed to the CaroneProvider at the root of your project.
 * Use this hook in any component to access the configuration.
 *
 * @returns The configuration object.
 *
 * @example
 * ```tsx
 * const { colors } = useConfig();
 * console.log(colors.main); // Access the main color
 * ```
 */
export const useConfig = () => {
  return useContext(CaroneContext);
};
