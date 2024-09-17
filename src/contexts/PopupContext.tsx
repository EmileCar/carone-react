import React, { createContext, useState, useContext, useEffect } from 'react';

interface PopupContextProps {
    popup: React.ReactNode;
    registerPopup: (popup: React.ReactNode) => void;
    closePopup: () => void;
}

/**
 * The context for popup-related components.
 */
export const PopupContext = createContext<PopupContextProps>({
    popup: null,
    registerPopup: () => {},
    closePopup: () => {},
});

/**
 * The provider for the PopupContext.
 * This provider is used to provide the popup state and functions to open/close a popup.
 */
export const PopupProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [popup, setPopup] = useState<React.ReactNode>(null);

    const registerPopup = (popup: React.ReactNode) => {
        console.log('registerPopup');
        setPopup(popup);
    };

    const closePopup = () => {
        setPopup(null);
    };

    useEffect(() => {
        if (popup) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }, [popup]);

    return (
        <PopupContext.Provider value={{ popup, registerPopup, closePopup }}>
            {children}
        </PopupContext.Provider>
    );
};

/**
 * usePopupContext is a hook that provides the context of the Popup component.
 * The context contains the popup state and functions to open/close a popup.
*/
export const usePopupContext = () => {
    return useContext(PopupContext);
};
