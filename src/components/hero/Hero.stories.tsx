// src/components/hero/Hero.stories.tsx
import React from 'react';
import Hero from './Hero';
import Page from '../page/Page';
import Header from '../page/header/Header';
import PageContent from '../page/PageContent';

export default {
    title: 'Hero',
    component: Hero as React.FC,
};

export const SimpleHero = () => (
    <Page>
        <Header title="Hero" links={[{ label: 'Home', url: '/' }]} responsiveAt={500}/>
        <Hero backgroundImage="https://via.placeholder.com/1920x1080">
            <h1>Hero title</h1>
            <p>Hero subtitle</p>
        </Hero>
        <PageContent>
            <div style={{height: 8000}}>
                page content
            </div>
        </PageContent>
    </Page>
);

export const Test = () => (
    <Page>
        <Header title="Hero" links={[{ label: 'Home', url: '/' }]} responsiveAt={500}/>
        <div style={{flexGrow: 1}}>
            <h1>Hero title</h1>
            <p>Hero subtitle</p>
        </div>
        <div>
            <div style={{height: 8000}}>
                page content
            </div>
        </div>
    </Page>
);