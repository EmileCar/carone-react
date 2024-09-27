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
    /** The maximum height of the hero */
    maxHeigh?: string | number;
    /** The background color of the hero */
    backgroundColor?: string;
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
    maxHeigh,
    backgroundColor,
    heroSliderProps,
    maxContentWidth,
    className = '',
    contentClassName = '',
    style,
    children,
}) => {
    return (
        <section
            className={classNames('carone-hero', "layered-grid", className)}
            style={{
                backgroundColor: backgroundColor ? backgroundColor : 'transparent',
                minHeight: minHeight ? `${minHeight}px` : 'auto',
                maxHeight: maxHeigh ? `${maxHeigh}px` : 'auto',
                ...style,
        }}>
            {heroSliderProps && <HeroSlider {...heroSliderProps} />}
            <div
                className={classNames('carone-hero__content', contentClassName)}
                style={{
                    maxWidth: maxContentWidth ? `${maxContentWidth}px` : 'var(--max-content-width)',
                }}
            >
                {children}
            </div>
        </section>
    );
};

export default Hero;