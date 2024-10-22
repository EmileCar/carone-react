import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { ResourceType } from '../configurations/CaroneCMSConfig';

interface CaroneCMSContextProps {
    data: { pages?: any; components?: any };
    setData: (data: any) => void;
    pending?: boolean;
}

const CaroneCMSContext = createContext<CaroneCMSContextProps | undefined>(undefined);

export const CaroneCMSProvider: React.FC<{ children: ReactNode, url: string | undefined }> = ({ children, url }) => {
    const [data, setData] = useState<{ pages?: any; components?: any }>({});
    const [pending, setPending] = useState<boolean>(false);

    useEffect(() => {
        const contentBaseUrl = url;

        if (!contentBaseUrl) {
            throw new Error('REACT_APP_CONTENT_BASE_URL environment variable is not defined. Please set it in your .env file.');
        }

        const fetchData = async () => {
            setPending(true);
            try {
                const pagesResponse = await fetch(`${contentBaseUrl}/?action=content&resource=${ResourceType.PAGE}`);
                const pagesData = await pagesResponse.json();

                const componentsResponse = await fetch(`${contentBaseUrl}/?action=content&resource=${ResourceType.COMPONENT}`);
                const componentsData = await componentsResponse.json();

                setData({
                    pages: pagesData,
                    components: componentsData,
                });
            } catch (err) {
                throw new Error('Error fetching data from CMS.');
            } finally {
                setPending(false);
            }
        };

        fetchData();
    }, []);

    return (
        <CaroneCMSContext.Provider value={{ data, setData, pending }}>
            {children}
        </CaroneCMSContext.Provider>
    );
};

export const useCaroneCMS = (): CaroneCMSContextProps => {
    const context = useContext(CaroneCMSContext);
    if (!context) {
        throw new Error('useCaroneCMS must be used within a CaroneCMSProvider');
    }
    return context;
};