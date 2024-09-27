// src/components/button/Button.stories.tsx
import React from 'react';
import Header from './Header';
import HeaderLink, { HeaderLinkProps } from './HeaderLink';
import Page from '../../page/Page';

export default {
    title: 'Header',
    component: Header as React.FC,
};

const links: HeaderLinkProps[] = [{ label: 'Home', url: '/' }, { label: 'About', url: '/about' }, { label: 'Contact', url: '/contact' }];

export const SimpleHeader = () => <Page><Header title="Simple Header" links={links} /></Page>;
export const NoTitleHeader = () => <Page><Header links={links} /></Page>;
export const NoLinksHeader = () => <Page><Header title="No Links" links={[]} /></Page>;
export const CustomClassNameHeader = () => <Page><Header title="Custom Class Name" links={links} className="custom-class" linkClassName='custom-link-class' /></Page>;
export const StickyHeader = () => <Page><div style={{height: "100rem"}}><Header title="Sticky Header" links={links} sticky /></div></Page>;
export const ResponsiveHeader = () => <Page><Header title="Responsive Header" links={links} responsiveAt={600} />;</Page>
export const StickyAndResponsiveHeader = () => <Page><div style={{height: "100rem"}}><Header title="Sticky and Responsive Header" links={links} sticky responsiveAt={600} /></div></Page>;
export const HeaderWithChildren = () => <Page><Header title="Header with Children" links={links}><div>Children</div></Header></Page>;
export const CustomHeader = () => <Page><Header title="My Page" style={{justifyContent: 'space-between'}} responsiveAt={600}>
    <div style={{display: 'flex'}}>
        <p>Children</p>
        <p>Yes</p>
    </div>
    <div style={{display: 'flex'}}>
        <p>Children</p>
        <p>Yes</p>
    </div>
</Header></Page>;