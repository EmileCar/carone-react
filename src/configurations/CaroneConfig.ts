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
	/** The main color of the application */
	main: string;
	/** The secondary color of the application */
	secondary: string;
	/** The error color of the application */
	error: string;
	/** The success color of the application */
	success: string;
	/** The default font color of the application */
	font: string;
	/** The font color on the main color of the application */
	fontOnMain: string;
};

type FontConfig = {
	/** The main font family of the application. Enter the values like in CSS */
	mainFont: string;
	/** The title font family of the application. Enter the values like in CSS */
	titleFont: string;
	/** The font sizes of the application. Use these sizes in the app from the FontSize enum */
	sizes: {
		/** The font size for small text */
		small: string;
		/** The font size for default text */
		default: string;
		/** The font size for large text */
		large: string;
		/** The font size for subtitle text */
		subtitle: string;
		/** The font size for title text */
		title: string;
	}
};

type SizeConfig = {
	/** The padding sizes of the application. Use these sizes in the app from the Size enum */
	padding: {
		xxs: string;
		xs: string;
		sm: string;
		md: string;
		lg: string;
		xl: string;
		xxl: string;
	},
	/** The border radius sizes of the application. Use these sizes in the app from the BorderRadius enum */
	borderRadius: {
		small: string;
		medium: string;
		large: string;
	}
};

type DeepPartial<T> = {
	[P in keyof T]?: DeepPartial<T[P]>;
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
        },
		maxContentWidth: '1200px'
    };
* <CaroneProvider config={config}>
*   <App />
* </CaroneProvider>
* ```
*/
export interface CaroneConfig {
	/**
	 * The colors of the application.
	 *
	 * @default
	 *   main: 'blue',
	 *   secondary: 'black',
	 *   error: 'red',
	 *   success: 'green',
	 *   font: 'green',
	 *   fontOnMain: 'white'
	*/
	colors?: DeepPartial<ColorConfig>;
	/**
	 * The fonts of the application.
	 *
	 * @default
	 *   mainFont: 'Verdana',
	 *   titleFont: 'Arial',
	 *   sizes: {
	 *     small: '0.8rem',
	 *     default: '1rem',
	 *     large: '1.5rem',
	 *     subtitle: '1.8rem',
	 *     title: '3rem',
	 *   }
	*/
	fonts?: DeepPartial<FontConfig>;
	/**
	 * The sizes of the application.
	 *
	 * @default
	 *  padding: {
	 *		xxs: '0.1rem',
	 *		xs: '0.2rem',
	 *		sm: '0.5rem',
	 *		md: '1rem',
	 *		lg: '1.5rem',
	 *		xl: '2rem',
	 *		xxl: '3rem',
	 *	 },
	 *	 borderRadius: {
	 *		small: '0.2rem',
	 *		medium: '0.5rem',
	 *		large: '1rem',
	 *	 }
	*/
	sizes?: DeepPartial<SizeConfig>;
	/** The maximum width of the content */
	maxContentWidth?: string;
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
	},
	maxContentWidth: '1200px'
};
