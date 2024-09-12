import React from 'react';
import '../../styles/Header.css';
import { useState, useEffect } from "react";
import { classNames } from '../../utils/classNameUtil';

/**
 * A link in the header.
 */
export interface HeaderLink {
	label: string;
	url: string;
	external?: boolean;
}

/**
 * The props for the Header component.
 */
interface HeaderProps {
	/** The title of the header. This can be a string or a ReactNode */
	title?: string | React.ReactNode;
	/** The links to display in the header */
	links: HeaderLink[];
	/** The class name for the links */
	linkClassName?: string;
	/** A custom class name to apply to the header */
	className?: string;
	/** A callback function to call when the navigation is toggled */
	onNavToggle?: (isOpen: boolean) => void;
	/** If the header should stick to the top of the page */
	sticky?: boolean;
	/** If the header should be responsive */
	resposive?: boolean;
	/** The maximum width of the content */
	maxContentWidth?: number;
}

const Header: React.FC<HeaderProps> = ({
	title,
	links,
	linkClassName = '',
	className = '',
	onNavToggle,
	sticky = false,
	resposive = false,
	maxContentWidth = 1200
}) => {
	const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

	const handleClickNavToggle = () => {
		const newNavState = !isNavOpen;
		setIsNavOpen(newNavState);
		if (onNavToggle) onNavToggle(newNavState);
	};

	return (
		<header
			className={classNames(
				'carone-header',
				className,
			)}
			style={{
				...(sticky && { position: 'sticky'}
			),
		}}>
      		<div className={
				classNames(
					'carone-header__content',
					(isNavOpen && resposive) && "carone-header__navOpen"
				)}
				style={{
					maxWidth: maxContentWidth
				}}
			>
				{title &&
					<div className="carone-header__title-container">
						{typeof title === 'string' ? <h1 className="header__title">{title}</h1> : title}
					</div>
				}

				<nav className={classNames("carone-header__navbar", (isNavOpen && resposive) && "carone-header__navOpen")}>
					<ul className="carone-header__menu-items">
						{links.map((link, index) => (
							<li className="carone-header__menu-item" key={index}>
								<a className={classNames("carone-header__menu-item-link", linkClassName)} href={link.url} {...(link.external && { target: '_blank' })}>
									{link.label}
								</a>
							</li>
						))}
					</ul>
				</nav>
        		<span className="pi pi-bars carone-header__toggle-button" style={{ fontSize: '3rem' }} onClick={handleClickNavToggle}></span>
			</div>
   		</header>
  );
}

export default Header;
