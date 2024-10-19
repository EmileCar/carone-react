import React, { createContext, ReactNode, useContext, useEffect } from 'react';
import { CaroneConfig, defaultConfig } from '../configurations/CaroneConfig';
import { BannerProvider } from './BannerContext';
import { PopupProvider } from './PopupContext';

const defaultConfigWithFlag = {
    ...defaultConfig,
    provided: false,
};

const CaroneContext = createContext<CaroneConfig & { provided: boolean }>(defaultConfigWithFlag);

interface ConfigProviderProps {
    config?: Partial<CaroneConfig>;
    children: ReactNode;
}

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
const config = {
    	colors: {
            main: 'blue',
            secondary: 'black',
            error: 'red',
            success: 'green',
            font: 'green',
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
            padding: {
                xs: '0.1rem',
                sm: '0.2rem',
                md: '0.5rem',
                lg: '1rem',
                xl: '1.5rem',
                xxl: '2rem',
                xxxl: '3rem',
            },
            borderRadius: {
                small: '0.2rem',
                medium: '0.5rem',
                large: '1rem',
            }
        },
		maxContentWidth: '1200px'
    };
 * <CaroneProvider config={config}>
 *   <App />
 * </CaroneProvider>
 * ```
 */
export const CaroneProvider = ({ config = {}, children }: ConfigProviderProps) => {
    const mergedConfig: CaroneConfig & { provided: boolean } = {
        ...defaultConfig,
        ...config,
        colors: { ...defaultConfig.colors, ...config.colors },
        fonts: { ...defaultConfig.fonts, ...config.fonts },
        sizes: { ...defaultConfig.sizes, ...config.sizes },
        provided: true,
    };

    useEffect(() => {
        const root = document.documentElement;

        // Apply colors
        const colors = mergedConfig.colors || defaultConfig.colors!;
        root.style.setProperty('--main-color', colors.main || defaultConfig.colors!.main!);
        root.style.setProperty('--secondary-color', colors.secondary || defaultConfig.colors!.secondary!);
        root.style.setProperty('--grey-color', colors.grey || defaultConfig.colors!.grey!);
        root.style.setProperty('--background-color', colors.background || defaultConfig.colors!.background!);
        root.style.setProperty('--error-color', colors.error || defaultConfig.colors!.error!);
        root.style.setProperty('--success-color', colors.success || defaultConfig.colors!.success!);
        root.style.setProperty('--default-font-color', colors.font || defaultConfig.colors!.font!);
        root.style.setProperty('--font-color-on-main-color', colors.fontOnMain || defaultConfig.colors!.fontOnMain!);

        // Apply fonts
        const fonts = mergedConfig.fonts || defaultConfig.fonts!;
        root.style.setProperty('--main-font', fonts.mainFont || defaultConfig.fonts!.mainFont!);
        root.style.setProperty('--title-font', fonts.titleFont || defaultConfig.fonts!.titleFont!);
        const fontSizes = fonts.sizes || defaultConfig.fonts!.sizes!;
        Object.entries(fontSizes).forEach(([key, value]) => {
            root.style.setProperty(`--${key}-font-size`, value);
        });

        // Apply sizes and border radius
        const sizes = mergedConfig.sizes || defaultConfig.sizes!;
        const paddings = sizes.padding || defaultConfig.sizes!.padding!;
        Object.entries(paddings).forEach(([key, value]) => {
            root.style.setProperty(`--${key}`, value);
        });

        const borderRadius = sizes.borderRadius || defaultConfig.sizes!.borderRadius!;
        Object.entries(borderRadius).forEach(([key, value]) => {
            root.style.setProperty(`--border-radius-${key}`, value);
        });

		// Apply max content width
		const maxContentWidth = mergedConfig.maxContentWidth || defaultConfig.maxContentWidth!;
		root.style.setProperty('--max-content-width', maxContentWidth);
    }, [mergedConfig]);

    return (
        <CaroneContext.Provider value={mergedConfig}>
            <PopupProvider>
                <BannerProvider>
                    {children}
                </BannerProvider>
            </PopupProvider>
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
    const context = useContext(CaroneContext);

    if (!context.provided) {
        throw new Error('Carone-react components must be used within a CaroneProvider. Wrap your application inside a CaroneProvider.');
    }

    return context;
};