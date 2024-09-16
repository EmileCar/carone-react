// src/components/page/Page.stories.tsx
import React from 'react';
import Page from './Page';
import Header, { HeaderLink } from './header/Header';
import Footer from './footer/Footer';
import PageContent from './PageContent';
import DividedContent from '../dividedContent/DividedContent';
import Section from './section/Section';
import SectionTitle from './section/SectionTitle';

export default {
    title: 'Page',
    component: Page as React.FC,
};

const links: HeaderLink[] = [
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

export const PageExampleWithDividedContent = () =>
    <Page>
        <Header links={links} title="Page example"/>
        <PageContent>
            <Section>
                <SectionTitle title='Page Title'>
                    Section 1
                </SectionTitle>
                <p>Content hereeee...</p>
            </Section>
            <Section>
                <SectionTitle title='Page Title'>
                    Section 2
                </SectionTitle>
                <p>Content hereeee...</p>
            </Section>
        </PageContent>
        <Footer>
            <p>Footer content</p>
        </Footer>
    </Page>;