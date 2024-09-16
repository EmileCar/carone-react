import './styles/carone.global.css';

// Exporting contexts, providers and configurations
export { CaroneProvider, useConfig } from './contexts/CaroneContext';
export { CaroneConfig } from './configurations/CaroneConfig';

// Exporting components
export { default as Page } from './components/page/Page';
export { default as Header, HeaderLink } from './components/page/header/Header';
export { default as PageContent } from './components/page/PageContent';
export { default as Section } from './components/page/section/Section';
export { default as SectionTitle } from './components/page/section/SectionTitle';
export { default as Footer } from './components/page/footer/Footer';
export { default as DividedContent } from './components/dividedContent/DividedContent';
export { default as Button } from './components/button/Button';
export { default as Form } from './components/form/Form';
export { default as Input } from './components/form/Input';
export { default as Label } from './components/form/Label';
export { default as Group } from './components/form/Group';
export { default as Table } from './components/table/Table';
export { default as Column } from './components/table/Column';
export { default as Paginator } from './components/table/Paginator';

// Exporting hooks
export { useWindowResize } from './hooks/useWindowResize';

// Exporting utilities
export { HoverEffect } from './utils/hoverEffect';