// src/components/hero/Hero.stories.tsx
import React from 'react';
import Hero from './Hero';
import Page from '../page/Page';
import Header from '../page/header/Header';
import PageContent from '../page/PageContent';
import HeroSlider from './HeroSlider';

export default {
    title: 'Hero',
    component: Hero as React.FC,
};

const heroSliderProps = {
    imagePaths: [
        'https://ksaoosterzele.be/assets/hero/stellingstartdag.jpg',
        'https://ksaoosterzele.be/assets/hero/kampsfeer.jpg',
        'https://via.placeholder.com/1920x1080',
    ],
    interval: 5000,
    altText: 'Hero image',
    blurredImagePath: 'https://ksaoosterzele.be/assets/hero/blur.jpg',
};

export const SimpleHero = () => (
    <Page>
        <Header sticky title="Hero" links={[{ label: 'Home', url: '/' }]} responsiveAt={500} insideHero/>
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
        <Header sticky title="Hero" links={[{ label: 'Home', url: '/' }]} responsiveAt={500} insideHero/>
        <Hero heroSliderProps={heroSliderProps}>
            <h1>Hero Title</h1>
            <p>Hero subtitle</p>
        </Hero>
        <PageContent>
            <div style={{height: 8000}}>
                page content
            </div>
        </PageContent>
    </Page>
);