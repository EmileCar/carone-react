import { ReactNode } from "react";

/**
 * The available colors of the application.
 * The values of these colors are used as CSS variables.
*/
export enum Color {
	MAIN = 'var(--main-color)',
	SECONDARY = 'var(--secondary-color)',
	ERROR = 'var(--error-color)',
	SUCCESS = 'var(--success-color)',
	FONT = 'var(--default-font-color)',
	FONTONMAIN = 'var(--font-color-on-main-color)'
}

/**
 * The available sizes of the application.
 * The values of these sizes are used as CSS variables.
*/
export enum Size {
	XXS = 'var(--xxs)',
	XS = 'var(--xs)',
	SM = 'var(--sm)',
	MD = 'var(--md)',
	LG = 'var(--lg)',
	XL = 'var(--xl)',
	XXL = 'var(--xxl)',
}

/**
 * The available font sizes of the application.
 * The values of these sizes are used as CSS variables.
*/
export enum FontSize {
	SMALL = 'var(--small-font-size)',
	DEFAULT = 'var(--default-font-size)',
	LARGE = 'var(--large-font-size)',
	SUBTITLE = 'var(--subtitle-font-size)',
	TITLE = 'var(--title-font-size)'
}

/**
 * The available border radius sizes of the application.
 * The values of these sizes are used as CSS variables.
*/
export enum BorderRadius {
	SMALL = 'var(--border-radius-sm)',
	MEDIUM = 'var(--border-radius-md)',
	LARGE = 'var(--border-radius-lg)'
}

type ColorConfig = {
	main: string;
	secondary: string;
	error: string;
	success: string;
	font: string;
	fontOnMain: string;
};

type FontConfig = {
	mainFont: string;
	titleFont: string;
	sizes: {
		small: string;
		default: string;
		large: string;
		subtitle: string;
		title: string;
	}
};

type SizeConfig = {
	padding: {
		xxs: string;
		xs: string;
		sm: string;
		md: string;
		lg: string;
		xl: string;
		xxl: string;
	},
	borderRadius: {
		small: string;
		medium: string;
		large: string;
	}
};

/**
 * CaroneConfig is the configuration object for the CaroneProvider.
 * All properties are optional, and if not provided, default values will be used.
 *
 * @param colors {Partial<ColorConfig>} The colors of the application.
 * @param fonts {Partial<FontConfig>} The fonts of the application.
 * @param sizes {Partial<SizeConfig>} The sizes of the application.
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
        }
    };
	* <CaroneProvider config={config}>
	*   <App />
	* </CaroneProvider>
	* ```
*/
export interface CaroneConfig {
	/** The colors of the application */
	colors?: Partial<ColorConfig>;
	/** The fonts of the application */
	fonts?: Partial<FontConfig>;
	/** The sizes of the application */
	sizes?: Partial<SizeConfig>;
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
			small: '0.8rem',
			default: '1rem',
			large: '1.5rem',
			subtitle: '1.8rem',
			title: '3rem',
		}
	},
	sizes: {
		padding: {
			xxs: '0.1rem',
			xs: '0.2rem',
			sm: '0.5rem',
			md: '1rem',
			lg: '1.5rem',
			xl: '2rem',
			xxl: '3rem',
		},
		borderRadius: {
			small: '0.2rem',
			medium: '0.5rem',
			large: '1rem',
		}
	}
};
