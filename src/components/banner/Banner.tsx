import React from 'react';
import { useConfig } from '../../contexts/CaroneContext';
import { classNames } from '../../utils/classNameUtil';

/**
 * The props for the Banner component.
 */
export interface BannerProps {
    /** The text to display in the banner */
    text?: string;
    /** A custom class name to apply to the banner */
    className?: string;
    /** A custom style to apply to the banner */
    style?: React.CSSProperties;
    /** The children components */
    children?: React.ReactNode;
}

/**
 * A banner component that can be customized with different props.
 *
 * @param {BannerProps} props the props for the component
 * @returns {React.ReactElement} the banner component
 */
const Banner: React.FC<BannerProps> = ({
    text,
    className = '',
    style,
    children
}: BannerProps): React.ReactElement => {
    useConfig();

    return (
        <div
            className={classNames('carone-banner', className)}
            style={style}
        >
            {text && <p className="carone-banner__text">{text}</p>}
            {children}
        </div>
    );
};

export default Banner;