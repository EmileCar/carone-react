import React from 'react';
import { usePageContext } from '../../../contexts/PageContext';
import { classNames } from '../../../utils/classNameUtil';

/**
 * The props for the Section component.
 */
interface SectionProps {
    /** A custom class name to apply to the section */
    className?: string;
    /** The content of the section */
    children: React.ReactNode;
}

/**
 * A section component that defines a section of the page.
 * This component needs to be used inside a Page component.
 */
const Section: React.FC<SectionProps> = ({
    className = '',
    children
}) => {
    usePageContext();

    return (
        <section className={classNames("carone-section", className)}>
            {children}
        </section>
    );
};

export default Section;