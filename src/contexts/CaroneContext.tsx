import React, { createContext, useContext, ReactNode, useEffect } from 'react';

type SizeKeys = '--s-99' | '--s-2' | '--s-1' | '--s0' | '--s1' | '--s2' | '--s3';

export interface CaroneConfig {
  mainColor?: string;
  secondaryColor?: string;
  sizes?: {
    [key in SizeKeys]?: string;
  };
}

interface ConfigProviderProps {
  config?: Partial<CaroneConfig>;
  children: ReactNode;
}

const defaultConfig: CaroneConfig = {
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
};

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

    const sizes = mergedConfig.sizes || defaultConfig.sizes!;
    Object.entries(sizes).forEach(([key, value]) => {
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
