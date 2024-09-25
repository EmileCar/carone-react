import React, { useRef } from 'react';
import '../../../styles/Header.css';
import { useState } from "react";
import { classNames } from '../../../utils/classNameUtil';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useWindowResize } from '../../../hooks/useWindowResize';
import { usePageContext } from '../../../contexts/PageContext';

/**
 * A link in the header.
 */
export interface HeaderLink {
	/** The label of the link */
	label: string;
	/** The URL of the link */
	url: string;
	/** If the link should open in a new tab */
	openInNewTab?: boolean;
}

/**
 * The props for the Header component.
 */
interface HeaderProps {
	/** The title of the header. This can be a string or a ReactNode */
	title?: string | React.ReactNode;
	/** The links to display in the header */
	links: HeaderLink[];
	/** A callback function to call when the navigation is toggled */
	onNavToggle?: (isOpen: boolean) => void;
	/** If the header should stick to the top of the page */
	sticky?: boolean;
	/** If the header should be responsive at a certain width in px */
	responsiveAt?: number;
	/** The maximum width of the content. If not set, the default value of the CaroneConfig will be used */
	maxContentWidth?: number;
	/** If the header is inside a hero component */
	insideHero?: boolean;
	/** A custom class name to apply to the header */
	className?: string;
	/** A custom class name for the links */
	linkClassName?: string;
	/** A custom class name for the content */
	contentClassName?: string;
	/** A custom style object to apply to the header */
	style?: React.CSSProperties;
	/** The children components */
	children?: React.ReactNode;
}

/**
 * A header component that can be customized with different props.
 * This component needs to be used inside a Page component.
 *
 * @param {HeaderProps} props the props for the component
 * @returns {React.ReactElement} the header component
 */
const Header: React.FC<HeaderProps> = ({
	title,
	links,
	onNavToggle,
	sticky = false,
	responsiveAt,
	maxContentWidth,
	insideHero,
	className = '',
	linkClassName = '',
	contentClassName,
	style,
	children,
}) => {
	usePageContext();

	const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
	const [isResponsive, setIsResponsive] = useState<boolean>(false);
	const headerRef = useRef<HTMLDivElement>(null);

	const handleClickNavToggle = () => {
		const newNavState = !isNavOpen;
		setIsNavOpen(newNavState);
		if (onNavToggle) onNavToggle(newNavState);
	};

	useWindowResize(() => {
		if (responsiveAt && responsiveAt > 0) {
			if (window.innerWidth <= responsiveAt) {
				setIsResponsive(true);
			} else {
				setIsResponsive(false);
				setIsNavOpen(false);
			}
		}
	});

	const getHeaderPosition = () => {
		if (sticky && insideHero) {
			return 'fixed';
		}
		if (sticky) {
			return 'sticky';
		}
		if (insideHero) {
			return 'absolute';
		}
		return 'relative';
	};

	return (
		<header
			className={classNames(
				'carone-header',
				className,
				(isResponsive) && 'carone-header__responsive'
			)}
			ref={headerRef}
			style={{
				position: getHeaderPosition(),
				...style,
		}}>
      		<div className={
				classNames(
					'carone-header__wrapper',
					isNavOpen && isResponsive && 'carone-header__navOpen'
				)}
				style={{
					maxWidth: maxContentWidth ? `${maxContentWidth}px` : 'var(--max-content-width)',
				}}
			>
				{title &&
					<div className="carone-header__title-container">
						{typeof title === 'string' ? <h1 className="header__title">{title}</h1> : title}
					</div>
				}

				<div className={classNames("carone-header__content", contentClassName)}>
					<nav className={classNames("carone-header__navbar", (isNavOpen && isResponsive) && "carone-header__navOpen")}>
						<ul className="carone-header__menu-items">
							{links.map((link, index) => (
								<li className="carone-header__menu-item" key={index}>
									<a className={classNames("carone-header__menu-item-link", linkClassName)} href={link.url} {...(link.openInNewTab && { target: '_blank' })}>
										{link.label}
									</a>
								</li>
							))}
						</ul>
					</nav>
					<div className="carone-header__toggle-button-container">
						<span
							className={`bi ${isNavOpen ? 'bi-x-lg' : 'bi-list'} carone-header__toggle-button`}
							onClick={handleClickNavToggle}
							style={{ fontSize: 'var(--title-font-size)' }}
						/>
					</div>
					{children}
				</div>
			</div>
   		</header>
  );
}

export default Header;
