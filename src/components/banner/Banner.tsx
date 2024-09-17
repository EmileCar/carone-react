import React from 'react';
import '../../styles/Banner.css';
import { useConfig } from '../../contexts/CaroneContext';

export interface BannerProps {
    text?: string;
    children?: React.ReactNode;
}

const Banner: React.FC<BannerProps> = ({
    text,
    children
}) => {
    useConfig();

    return (
        <div className="carone-banner">
            {text && <p className="carone-banner__text">{text}</p>}
            {children}
        </div>
    );
};

export default Banner;