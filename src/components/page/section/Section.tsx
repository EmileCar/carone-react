import React from 'react';
import { usePageContext } from '../../../contexts/PageContext';
import { classNames } from '../../../utils/classNameUtil';

/**
 * The props for the Section component.
 */
interface SectionProps {
    /** A custom class name to apply to the section */
    className?: string;
    /** A custom style object to apply to the section */
    style?: React.CSSProperties;
    /** The content of the section */
    children: React.ReactNode;
}

/**
 * A section component that defines a section of the page.
 * This component needs to be used inside a Page component.
 *
 * @param {SectionProps} props the props for the component
 * @returns {React.ReactElement} the section component
 */
const Section: React.FC<SectionProps> = ({
    className = '',
    style,
    children
}) => {
    usePageContext();

    return (
        <section className={classNames("carone-section", className)} style={style}>
            {children}
        </section>
    );
};

export default Section;