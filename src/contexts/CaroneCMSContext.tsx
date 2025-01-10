import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { ResourceType } from '../configurations/CaroneCMSConfig';

interface CaroneCMSContextProps {
    content: { pages: { [key: string]: any }; components: { [key: string]: any } };
    pending?: boolean;
}

const CaroneCMSContext = createContext<CaroneCMSContextProps | undefined>(undefined);

export const CaroneCMSProvider: React.FC<{ children: ReactNode, url: string | undefined }> = ({ children, url }) => {
    const [content, setContent] = useState<{ pages: {}; components: {} }>({ pages: {}, components: {} });
    const [pending, setPending] = useState<boolean>(false);

    useEffect(() => {
        const contentBaseUrl = url;

        if (!contentBaseUrl) {
            throw new Error('REACT_APP_CONTENT_BASE_URL environment variable is not defined. Please set it in your .env file.');
        }

        const fetchData = async () => {
            setPending(true);
            try {
                const pagesResponse = await fetch(`${contentBaseUrl}/?action=pages_content&resource=${ResourceType.PAGE}`);
                const pagesData = await pagesResponse.json();

                const componentsResponse = await fetch(`${contentBaseUrl}/?action=components_content&resource=${ResourceType.COMPONENT}`);
                const componentsData = await componentsResponse.json();

                setContent({
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
        <CaroneCMSContext.Provider value={{ content, pending }}>
            {children}
        </CaroneCMSContext.Provider>
    );
};

export const useCaroneCMS = (resourceType: ResourceType, pageName: string) => {
    const context = useContext(CaroneCMSContext);
    if (!context) {
        throw new Error('useCaroneCMS must be used within a CaroneCMSProvider');
    }

    const { content } = context;

    switch (resourceType) {
        case ResourceType.PAGE:
            return {
                content: content.pages[pageName],
                pending: context.pending,
            };
        case ResourceType.COMPONENT:
            return {
                content: content.components[pageName],
                pending: context.pending,
            };
        default:
            throw new Error('Invalid resource type');
    }
};