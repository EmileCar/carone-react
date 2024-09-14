import React from 'react';

const Footer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <footer className="carone-footer">
            {children}
        </footer>
    );
}

export default Footer;