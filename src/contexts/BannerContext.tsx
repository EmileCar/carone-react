import React, { createContext, useState, useContext, ReactNode, ReactElement } from 'react';
import { BannerProps } from '../components/banner/Banner';

interface BannerContextProps {
    banner: ReactElement<BannerProps> | null;
    registerBanner: (banner: ReactElement<BannerProps> | null) => void;
}

const BannerContext = createContext<BannerContextProps | undefined>(undefined);

export const BannerProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [banner, registerBanner] = useState<ReactElement<BannerProps> | null>(null);

    return (
        <BannerContext.Provider value={{ banner, registerBanner }}>
            {children}
        </BannerContext.Provider>
    );
};

export const useBanner = () => {
    const context = useContext(BannerContext);
    if (!context) {
        throw new Error('useBanner must be used within a BannerProvider');
    }
    return context;
};