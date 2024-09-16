# carone-react
A React library for simple web projects. This library is a collection of components that can be used to build simple web projects quick. The library is built using React and styled-components.

## Installation
To install the library, you can use npm:
```bash
npm install carone-react
```

## Usage
To use the library, you can import the components from the library and use them in your project. Here is an example of how you can use the Button component:
```jsx
import React from 'react';
import { Button } from 'carone-react';

const App = () => {
	return (
		<Button onClick={() => {}} text="Click me" />
	);
};
```

Each component has their own props that you can use to customize the component. Not every component can be used directly. Some components are built to be used with other components. For example, the Header component is built to be used inside a Page component. You can find more information about how to use these components in the [Components](#components) section.

Without proper configuration, the components will not look good because no styling is applied. It is recommended to wrap your app in a `CaroneProvider` to configure the default style values of the application.
```jsx
import React from 'react';
import { CaroneProvider } from 'carone-react';
import { Button } from 'carone-react';

const App = () => {
	return (
		<CaroneProvider>
			<Button onClick={() => {}} text="Click me" />
		</CaroneProvider>
	);
};
```
If you wrap your app in a `CaroneProvider`, the application will have a default styling set. It is of course possible to customize these styles by passing a `config` property to the `CaroneProvider`. All properties of this config object are optional, and if not provided, default values will be used. The `CaroneConfig` object has the following properties:
- `colors`: An object with the following properties:
	- `main`: The main color of the application.
	- `secondary`: The secondary color of the application.
	- `error`: The error color of the application.
	- `success`: The success color of the application.
	- `font`: The font color of the application.
	- `fontOnMain`: The font color on the main color of the application.
- `fonts`: An object with the following properties:
	- `mainFont`: The main font (family) of the application.
	- `titleFont`: The title font (family) of the application.
	- `sizes`: An object with the following properties:
		- `small`: The small font size of the application.
		- `default`: The default font size of the application.
		- `large`: The large font size of the application.
		- `subtitle`: The subtitle font size of the application.
		- `title`: The title font size of the application.
- `sizes`: An object with the following properties:
	- `padding`: An object with the following properties:
		- `xxs`: The extra extra small padding of the application.
		- `xs`: The extra small padding of the application.
		- `sm`: The small padding of the application.
		- `md`: The medium padding of the application.
		- `lg`: The large padding of the application.
		- `xl`: The extra large padding of the application.
		- `xxl`: The extra extra large padding of the application.
	- `borderRadius`: An object with the following properties:
		- `small`: The small border radius of the application.
		- `medium`: The medium border radius of the application.
		- `large`: The large border radius of the application.

Here is an example of how you can customize the default styles of the application (the default values are shown as an example):
```tsx
import React from 'react';
import { CaroneProvider, CaroneConfig } from 'carone-react';
import { Button } from 'carone-react';

const App = () => {
	const config: CaroneConfig = {
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

	return (
		<CaroneProvider config={config}>
			<Button onClick={() => {}} text="Click me" />
		</CaroneProvider>
	);
};
```
Now the application will have the custom styles set and the components will look according to your style.

If you need to access the theme in your components, you can use the `useConfig` hook. This hook will return the `CaroneConfig` object that is used in the application.
```tsx
import React from 'react';
import { useConfig } from 'carone-react';

const MyComponent = () => {
	const config = useConfig();

	return (
		<div style={{ color: config.colors!.main }}>
			Hello world!
		</div>
	);
};
```
Additionally, you can also use enums to access your style values. The `CaroneConfig` object has the following enums:
- `Color`: An enum with the following properties:
	- `MAIN`: The main color of the application.
	- `SECONDARY`: The secondary color of the application.
	- `ERROR`: The error color of the application.
	- `SUCCESS`: The success color of the application.
	- `FONT`: The font color of the application.
	- `FONTONMAIN`: The font color on the main color of the application.
- `Size`: An enum with the following properties:
	- `XXS`: The small font size of the application.
	- `XS`: The extra small font size of the application.
	- `SM`: The small font size of the application.
	- `MD`: The medium font size of the application.
	- `LG`: The large font size of the application.
	- `XL`: The extra large font size of the application.
	- `XXL`: The extra extra large font size of the application.
- `FontSize`: An enum with the following properties:
	- `SMALL`: The small font size of the application.
	- `DEFAULT`: The default font size of the application.
	- `LARGE`: The large font size of the application.
	- `SUBTITLE`: The subtitle font size of the application.
	- `TITLE`: The title font size of the application.
- `BorderRadius`: An enum with the following properties:
	- `SMALL`: The small border radius of the application.
	- `MEDIUM`: The medium border radius of the application.
	- `LARGE`: The large border radius of the application.

Here is an example of how you can use the enums to access your style values:
```tsx
import React from 'react';
import { useConfig, Colors } from 'carone-react';

const MyComponent = () => {
	const config = useConfig();

	return (
		<div style={{ color: Color.MAIN }}>
			Hello world!
		</div>
	);
};
```

## Components
To be written...