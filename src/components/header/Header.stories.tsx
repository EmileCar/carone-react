// src/components/button/Button.stories.tsx
import React from 'react';
import Header, { HeaderLink } from './Header';

export default {
    title: 'Header',
    component: Header as React.FC,
};

const links: HeaderLink[] = [{ label: 'Home', url: '/' }, { label: 'About', url: '/about' }, { label: 'Contact', url: '/contact' }];

export const SimpleHeader = () => <Header title="Simple Header" links={links} />;
export const NoTitleHeader = () => <Header links={links} />;
export const NoLinksHeader = () => <Header title="No Links" links={[]} />;
export const CustomClassNameHeader = () => <Header title="Custom Class Name" links={links} className="custom-class" linkClassName='custom-link-class' />;
export const StickyHeader = () => <div style={{height: "100rem"}}><Header title="Sticky Header" links={links} sticky /></div>;