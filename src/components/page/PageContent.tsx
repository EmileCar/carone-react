import React, { ReactNode } from 'react';
import { usePageContext } from '../../contexts/PageContext';
import { classNames } from '../../utils/classNameUtil';

/**
 * The props for the PageContent component.
 */
interface PageContentProps {
    /** The maximum width of the content. If not set, the default value of the CaroneConfig will be used */
    maxContentWidth?: number;
    /** A custom class name to apply to the content */
    className?: string;
    /** A custom style object to apply to the content */
    style?: React.CSSProperties;
    /** The content of the page */
    children: ReactNode;
}

/**
 * The content of a page.
 *
 * @param {PageContentProps} props the props for the component
 * @returns {React.ReactElement} the page content component
 */
const PageContent: React.FC<PageContentProps> = ({
    maxContentWidth,
    className = '',
    style,
    children,
}) => {
    usePageContext();

    return (
        <main
            className={classNames('carone-page__content', className)}
            style={{
                maxWidth: maxContentWidth ? `${maxContentWidth}px` : "var(--max-content-width)",
                ...style
            }}
        >
            {children}
        </main>
    );
};

export default PageContent;