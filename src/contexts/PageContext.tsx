import React, { createContext, useContext } from 'react';

/**
 * The context for page-related components.
 * This context is used to check if these components are used inside a Page component.
 */
const PageContext = createContext<boolean | null>(null);

/**
 * usePageContext is a hook that provides the context of the Page component.
 * The context doesn't contain any useful information, it's just a way to check if the component is used inside a Form component.
 */
export const usePageContext = () => {
    const context = useContext(PageContext);
    if (context === null) {
        throw new Error('Page-related components <Header, Footer> must be used within a Page component');
    }
    return context;
};

export default PageContext;