// src/components/button/Button.stories.tsx
import React from 'react';
import Header from './Header';
import HeaderLink, { HeaderLinkProps } from './HeaderLink';
import Page from '../../page/Page';
import HeaderRow from './HeaderRow';

export default {
    title: 'Header',
    component: Header as React.FC,
};

const links: HeaderLinkProps[] = [{ label: 'Home', url: '/' }, { label: 'About', url: '/about' }, { label: 'Contact', url: '/contact' }];

export const SimpleHeader = () => <Page><Header title="Simple Header" links={links} /></Page>;
export const NoTitleHeader = () => <Page><Header links={links} /></Page>;
export const NoLinksHeader = () => <Page><Header title="No Links" links={[]} /></Page>;
export const CustomClassNameHeader = () => <Page><Header title="Custom Class Name" links={links} className="custom-class" linkClassName='custom-link-class' /></Page>;
export const StickyHeader = () => <Page><div style={{height: "100rem"}}><Header title="Sticky Header" links={links} position='sticky' /></div></Page>;
export const ResponsiveHeader = () => <Page><Header title="Responsive Header" links={links} responsiveAt={600} />;</Page>
export const StickyAndResponsiveHeader = () => <Page><div style={{height: "100rem"}}><Header title="Sticky and Responsive Header" links={links} position='sticky' responsiveAt={600} /></div></Page>;
export const HeaderWithChildren = () => <Page><Header title="Header with Children" links={links}><div>Children</div></Header></Page>;
export const CustomHeader = () =>
<Page>
    <Header title="My Page" responsiveAt={600}>
        <HeaderRow style={{backgroundColor: 'gray'}} links={links} justifyContent='flex-end'/>
        <HeaderRow style={{backgroundColor: 'lightgray'}}>
            <div>
                <h1>My Page</h1>
            </div>
            <div>
                <HeaderLink label="Home" url="/" />
            </div>
        </HeaderRow>
    </Header>
</Page>;

<Header>
    
</Header>