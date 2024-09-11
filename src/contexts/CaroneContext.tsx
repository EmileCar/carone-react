import React, { createContext, useContext, ReactNode, useEffect } from 'react';

interface Config {
  mainColor: string;
  secondaryColor: string;
  resetStyle?: boolean;
}

interface ConfigProviderProps {
  config?: Partial<Config>;
  children: ReactNode;
}

const defaultConfig: Config = {
  mainColor: '#3498db',
  secondaryColor: '#2ecc71',
  resetStyle: false,
};

const CaroneContext = createContext<Config>(defaultConfig);

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
    if (mergedConfig.resetStyle) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = '../styles/reset.css';
      document.head.appendChild(link);

      return () => {
        document.head.removeChild(link);
      };
    }
  }, [mergedConfig.resetStyle]);

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
