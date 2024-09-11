import React, { createContext, useContext, useEffect } from 'react';
import { CaroneConfig, ConfigProviderProps, defaultConfig } from '../configurations/CaroneConfig';

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
 * <CaroneProvider config={{ mainColor: '#ff0000', secondaryColor: '#00ff00' }}>
 *   <App />
 * </CaroneProvider>
 * ```
 */
export const CaroneProvider = ({ config = {}, children }: ConfigProviderProps) => {
  const mergedConfig = { ...defaultConfig, ...config };

  useEffect(() => {
    const root = document.documentElement;

    root.style.setProperty('--main-color', mergedConfig.mainColor || defaultConfig.mainColor!);
    root.style.setProperty('--secondary-color', mergedConfig.secondaryColor || defaultConfig.secondaryColor!);
    root.style.setProperty('--error-color', mergedConfig.errorColor || defaultConfig.errorColor!);
    root.style.setProperty('--success-color', mergedConfig.successColor || defaultConfig.successColor!);

    const sizes = mergedConfig.sizes || defaultConfig.sizes!;
    Object.entries(sizes).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });

    const fontSizes = mergedConfig.fontSizes || defaultConfig.fontSizes!;
    Object.entries(fontSizes).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });

    const borderRadiusSizes = mergedConfig.borderRadiusSizes || defaultConfig.borderRadiusSizes!;
    Object.entries(borderRadiusSizes).forEach(([key, value]) => {
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
 * const { mainColor, secondaryColor } = useConfig();
 * ```
*/
export const useConfig = () => {
  return useContext(CaroneContext);
};
