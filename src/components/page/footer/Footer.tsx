import React from 'react';
import { useBanner } from '../../../contexts/BannerContext';

/**
 * The footer of the application.
 * This component should be used inside a Page component.
*/
const Footer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { setBanner } = useBanner();

    return (
        <footer className="carone-footer">
            {children}
        </footer>
    );
}

export default Footer;