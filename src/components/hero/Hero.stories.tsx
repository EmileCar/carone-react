// src/components/hero/Hero.stories.tsx
import React from 'react';
import Hero from './Hero';
import Page from '../page/Page';
import Header from '../page/header/Header';
import PageContent from '../page/PageContent';
import Section from '../page/section/Section';
import Footer from '../page/footer/Footer';

export default {
    title: 'Hero',
    component: Hero as React.FC,
};

const heroSliderProps = {
    images: [
        { path: 'https://ksaoosterzele.be/assets/hero/stellingstartdag.jpg', alt: 'Stelling Startdag' },
    ],
    interval: 5000,
    altText: 'Hero image',
};

export const SimpleHero = () => (
    <Page>
        <Header position='fixed' title="Hero" links={[{ label: 'Home', url: '/' }]} responsiveAt={500}/>
        <Hero heroSliderProps={heroSliderProps}>
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

export const HeroWithSlider = () => (
    <Page>
        <Header position='fixed' title="Hero" links={[{ label: 'Home', url: '/' }]} responsiveAt={500}/>
        <PageContent>
            <Hero heroSliderProps={heroSliderProps} minHeight={600}>
                <h1>Hero Title</h1>
                <p>Hero subtitle</p>
                <p>Hero content</p>
                <p>Hero content</p>
                <p>Hero content</p>
            </Hero>
            <Section style={{ backgroundColor: "lightgray"}}>
                <h2>Section title</h2>
                <p>Section content</p>
            </Section>
            <Section style={{ height: "10rem", backgroundColor: "lightblue"}}>
                <h2>Section title</h2>
                <p>Section content</p>
            </Section>
        </PageContent>
        <Footer>
            <p>Footer content</p>
        </Footer>
    </Page>
);