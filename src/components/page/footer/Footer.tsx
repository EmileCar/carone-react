import React from 'react';
import { classNames } from '../../../utils/classNameUtil';

/**
 * The props for the Footer component.
 */
interface FooterProps {
    /** A custom class name to apply to the footer */
    className?: string;
    /** A custom style object to apply to the footer */
    style?: React.CSSProperties;
    /** The children components */
    children: React.ReactNode;
}

/**
 * The footer of the application.
 * This component should be used inside a Page component.
 *
 * @param {React.FC} children the children components
 * @returns {React.ReactElement} the footer component
 */
const Footer: React.FC<FooterProps> = ({
    className = '',
    style,
    children
}) => {

    return (
        <footer
            className={classNames("carone-footer", className)}
            style={style}
        >
            {children}
        </footer>
    );
}

export default Footer;