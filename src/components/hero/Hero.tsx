import React from 'react';
import '../../styles/Hero.css';
import { classNames } from '../../utils/classNameUtil';
import HeroSlider, { HeroSliderProps } from './HeroSlider';

/**
 * The props for the Hero component
 */
interface HeroProps {
    /** The minimum height of the hero */
    minHeight?: string | number;
    /** If you want background images, provide props for the HeroSlider component */
    heroSliderProps?: HeroSliderProps;
    /** The maximum width of the content. If not set, the default value of the CaroneConfig will be used */
	maxContentWidth?: number;
    /** A custom class name to apply to the hero */
    className?: string;
    /** A custom class name for the content */
    contentClassName?: string;
    /** A custom style object to apply to the hero */
    style?: React.CSSProperties;
    /** The children components */
    children?: React.ReactNode;
}

/**
 * A hero component that can be customized with different props.
 * If the height of the Hero is not as expected because of a Header component, you can use the `insideHero` prop in the Header component.
 *
 * @param {HeroProps} props the props for the component
 * @returns {React.ReactElement} the hero component
 */
const Hero: React.FC<HeroProps> = ({
    minHeight,
    heroSliderProps,
    maxContentWidth,
    className = '',
    contentClassName = '',
    style,
    children,
}) => {
    return (
        <div
            className={classNames('carone-hero', "layered-grid", className)}
            style={{
                minHeight: minHeight ? `${minHeight}px` : '100vh',
                maxWidth: maxContentWidth ? `${maxContentWidth}px` : '100%',
                ...style,
        }}>
            {heroSliderProps && <HeroSlider {...heroSliderProps} />}
            <div className={classNames('carone-hero__content', contentClassName)}>
                {children}
            </div>
        </div>
    );
};

export default Hero;