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
	/** A custom class name to apply to the header */
	className: string;
	/** A callback function to call when the navigation is toggled */
	onNavToggle?: (isOpen: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ title, links, className, onNavToggle }) => {
	const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

	const handleClickNavToggle = () => {
		const newNavState = !isNavOpen;
		setIsNavOpen(newNavState);
		if (onNavToggle) onNavToggle(newNavState);
	};

	return (
		<header className="header">
      		<div className={classNames('header__content', className, isNavOpen && "open")}>
				{title &&
					<div className="header__title--container">
						{typeof title === 'string' ? <h1 className="header__title">{title}</h1> : title}
					</div>
				}

				<nav className={`navbar ${isNavOpen ? 'navOpen' : ''}`}>
					<ul className="menu__items">
						{links.map((link, index) => (
						<li className="menu__item" key={index}>
							{/* Render either an internal or external link */}
							{link.external ? (
							<a className="item__link" href={link.url} target="_blank" rel="noopener noreferrer">
								{link.label}
							</a>
							) : (
							<a className="item__link" href={link.url}>
								{link.label}
							</a>
							)}
						</li>
						))}
					</ul>
				</nav>
        		<span className="pi pi-bars toggle-button" style={{ fontSize: '3rem' }} onClick={handleClickNavToggle}></span>
			</div>
   		</header>
  );
}

export default Header;
