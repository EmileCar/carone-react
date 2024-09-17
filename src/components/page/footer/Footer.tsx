import React from 'react';

/**
 * The footer of the application.
 * This component should be used inside a Page component.
*/
const Footer: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    return (
        <footer className="carone-footer">
            {children}
        </footer>
    );
}

export default Footer;