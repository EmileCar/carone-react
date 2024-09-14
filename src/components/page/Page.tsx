import React from 'react';
import '../../styles/Page.css';
import PageContext from '../../contexts/PageContext';

/**
 * A page component that wraps the main content of the page.
 */
const Page: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <PageContext.Provider value={true}>
            <div className="carone-page">
                {children}
            </div>
        </PageContext.Provider>
    );
};

export default Page;