import React, { ReactNode } from 'react';
import { usePageContext } from '../../contexts/PageContext';
import { classNames } from '../../utils/classNameUtil';

/**
 * The props for the PageContent component.
 */
interface PageContentProps {
    maxContentWidth?: number;
    className?: string;
    children: ReactNode;
}

/**
 * The content of a page.
*/
const PageContent: React.FC<PageContentProps> = ({
    maxContentWidth = 1200,
    className = '',
    children,
}) => {
    usePageContext();

    return (
        <main
            className={classNames('carone-page__content', className)}
            style={{
                maxWidth: maxContentWidth
            }}
        >
            {children}
        </main>
    );
};

export default PageContent;