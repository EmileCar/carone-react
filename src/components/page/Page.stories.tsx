// src/components/page/Page.stories.tsx
import React from 'react';
import Page from './Page';
import Header from './header/Header';
import Footer from './footer/Footer';
import PageContent from './PageContent';
import Section from './section/Section';
import SectionTitle from './section/SectionTitle';
import { HeaderLinkProps } from './header/HeaderLink';
import SideBar from '../sidebar/SideBar';
import Button from '../button/Button';

export default {
    title: 'Page',
    component: Page as React.FC,
};

const links: HeaderLinkProps[] = [
    { label: 'Home', url: '/' },
    { label: 'About', url: '/about' },
    { label: 'Contact', url: '/contact' },
];

export const PageExample = () =>
    <Page>
        <Header links={links} title="Page example"/>
        <PageContent>
            <h1>Page content</h1>
            <p>This is an example of a page component.</p>
        </PageContent>
        <Footer>
            <p>Footer content</p>
        </Footer>
    </Page>;

export const PageExampleWithDividedContent = () => {
    const [visible, setVisible] = React.useState(false);
    return (
        <Page>
            <SideBar visible={visible} onToggleClick={() => setVisible(!visible)} width={300}>
                <p>Side bar content</p>
            </SideBar>
            <Header links={links} title="Page example"/>
            <PageContent>
                <Section style={{backgroundColor: 'red'}} centerAtWidth={400}>
                    <SectionTitle title='Page Title'>
                        Section 1
                    </SectionTitle>
                    <p>Content hereeee...</p>
                </Section>
                <Section>
                    <SectionTitle title='Page Title' showBorder>
                        Section 2
                    </SectionTitle>
                    <p>Content hereeee...</p>
                </Section>
            </PageContent>
            <Footer>
                <p>Footer content</p>
            </Footer>
        </Page>
    );
}