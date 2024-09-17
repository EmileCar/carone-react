import React from 'react';
import '../../styles/Banner.css';

export interface BannerProps {
    text?: string;
    children?: React.ReactNode;
}

const Banner: React.FC<BannerProps> = ({
    text,
    children
}) => {

    return (
        <div className="carone-banner">
            {text && <p className="carone-banner__text">{text}</p>}
            {children}
        </div>
    );
};

export default Banner;