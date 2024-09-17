// src/components/popup/Popup.stories.tsx
import React from 'react';
import Popup from './Popup';
import Page from '../page/Page';
import { usePopupContext } from '../../contexts/PopupContext';
import Button from '../button/Button';
import PageContent from '../page/PageContent';

export default {
    title: 'Popup',
    component: Popup as React.FC,
};

// NOT A GOOD EXAMPLE
export const SimplePopup = () => <Popup title="Simple Popup" onClose={() => {}}><p>Popup content</p></Popup>;
export const PopupInPage = () => {
    const { registerPopup } = usePopupContext();

    const openTestPopup = () => {
        console.log('openTestPopup');
        registerPopup(<Popup title="Popup in Page"><p>Popup content</p></Popup>);
    }

    return (
        <Page>
            <PageContent>
                <Button onClick={openTestPopup} text='Open Popup'/>
            </PageContent>
        </Page>
    );
}