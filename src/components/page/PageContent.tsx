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
    /** The content of the page */
    children: ReactNode;
}

/**
 * The content of a page.
*/
const PageContent: React.FC<PageContentProps> = ({
    maxContentWidth,
    className = '',
    children,
}) => {
    usePageContext();

    return (
        <main
            className={classNames('carone-page__content', className)}
            style={{
                maxWidth: maxContentWidth ? `${maxContentWidth}px` : "var(--max-content-width)",
            }}
        >
            {children}
        </main>
    );
};

export default PageContent;