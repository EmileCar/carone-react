import React, { useState } from 'react';
import { usePageContext } from '../../../contexts/PageContext';
import { classNames } from '../../../utils/classNameUtil';
import { useWindowResize } from '../../../hooks/useWindowResize';

/**
 * The props for the Section component.
 */
interface SectionProps {
    /** The maximum width of the content. If not set, the default value of the CaroneConfig will be used */
    maxContentWidth?: number;
    /** If the content should be centered */
    centered?: boolean;
    /** The width at which the content should be centered */
    centerAtWidth?: number;
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
    maxContentWidth,
    centered = false,
    centerAtWidth,
    className = '',
    style,
    children
}) => {
    usePageContext();
    const [isCentered, setIsCentered] = useState<boolean>(false);

    useWindowResize(() => {
        if (centerAtWidth) {
            setIsCentered(window.innerWidth <= centerAtWidth);
        }
    });

    return (
        <section
            className={classNames(
                "carone-section",
                className,
                (centered || isCentered) && 'carone-section__centered',            )}
            style={{
                ...style
            }}
        >
            <div
                className="carone-section__content"
                style={{
                    maxWidth: maxContentWidth ? `${maxContentWidth}px` : 'var(--max-content-width)',
                }}
            >
                {children}
            </div>
        </section>
    );
};

export default Section;