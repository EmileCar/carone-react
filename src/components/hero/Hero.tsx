import React from 'react';
import '../../styles/Hero.css';
import { classNames } from '../../utils/classNameUtil';

/**
 * The props for the Hero component
 */
interface HeroProps {
    /** The minimum height of the hero */
    minHeight?: string | number;
    /** The background image of the hero */
    backgroundImage?: string;
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
    backgroundImage,
    maxContentWidth,
    className = '',
    style,
    children,
}) => {
    return (
        <div
            className={classNames('carone-hero', className)}
            style={{
                backgroundImage: `url(${backgroundImage})`,
                minHeight: minHeight ? `${minHeight}px` : '100vh',
                maxWidth: maxContentWidth ? `${maxContentWidth}px` : '100%',
                ...style,
        }}>
            <div className={classNames('carone-hero-content', className)}>
                {children}
            </div>
        </div>
    );
};

export default Hero;