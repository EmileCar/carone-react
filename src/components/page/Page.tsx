import React from 'react';
import '../../styles/Page.css';
import PageContext from '../../contexts/PageContext';
import { classNames } from '../../utils/classNameUtil';

/**
 * The props for the Page component.
 */
interface PageProps {
    className?: string;
    children: React.ReactNode;
}

/**
 * A page component that defines a page of the application.
 * You can use Header, PageContent and Footer components inside this component.
 *
 * @example
 * inside your Component or Layout:
 * ```tsx
 * <Page>
 *      <Header links={links} title="Page example"/>
 *      <PageContent>
 *         <h1>Page content</h1>
 *        <p>This is an example of a page component.</p>
 *      </PageContent>
 *      <Footer>
 *        <p>Footer content</p>
 *      </Footer>
 * </Page>
 * ```
 * It is recommended using this in your own layout component.
 * ```tsx
 * const Layout: React.FC = ({ children }) => {
 *    return (
 *      <Page>
 *          <Header links={links} title="Page example"/>
 *          <PageContent>
 *              {children}
 *          </PageContent>
 *          <Footer>
 *             <p>Footer content</p>
 *         </Footer>
 *      </Page>
 * )};
 * ```
 */
const Page: React.FC<PageProps> = ({
    children,
    className= ''
}) => {
    return (
        <PageContext.Provider value={true}>
            <div
                className={classNames('carone-page', className)}
            >
                {children}
            </div>
        </PageContext.Provider>
    );
};

export default Page;