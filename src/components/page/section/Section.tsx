import React from 'react';
import { usePageContext } from '../../../contexts/PageContext';
import { classNames } from '../../../utils/classNameUtil';

interface SectionProps {
    className?: string;
    children: React.ReactNode;
}

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