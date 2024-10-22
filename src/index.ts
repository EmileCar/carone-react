import './styles/carone.global.css';

// Exporting contexts, providers and configurations
export { CaroneProvider, useConfig } from './contexts/CaroneContext';
export { useCaroneCMS } from './contexts/CaroneCMSContext';
export { CaroneConfig, Size, FontSize, Color, BorderRadius } from './configurations/CaroneConfig';
export { useBanner } from './contexts/BannerContext';
export { usePopupContext } from './contexts/PopupContext';

// Exporting components
export { default as Page } from './components/page/Page';
export { default as Banner } from './components/banner/Banner';
export { default as Header } from './components/page/header/Header';
export { default as HeaderRow } from './components/page/header/HeaderRow';
export { default as HeaderLink, HeaderLinkProps } from './components/page/header/HeaderLink';
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
export { default as TextArea } from './components/form/TextArea';
export { default as Table } from './components/table/Table';
export { default as Column } from './components/table/Column';
export { default as Paginator } from './components/table/Paginator';
export { default as Hero } from './components/hero/Hero';
export { default as SideBar } from './components/sidebar/SideBar';
export { default as Popup } from './components/popup/Popup';
export { default as ConfirmButtons } from './components/popup/ConfirmButtons';
export { default as FetchedDataLayout } from './components/fetchedDataLayout/FetchedDataLayout';
export { default as LoadingSpinner } from './components/loading/LoadingSpinner';
export { HeroSliderImageProps, HeroSliderProps } from './components/hero/HeroSlider';

// Exporting hooks
export { useWindowResize } from './hooks/useWindowResize';
export { useFetch } from './hooks/useFetch';
export { useForm } from './hooks/useForm';

// Exporting utilities
export { classNames } from './utils/classNameUtil';