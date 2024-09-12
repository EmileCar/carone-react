import React from 'react';
import '../../styles/Header.css';
import { useState, useEffect } from "react";
import { classNames } from '../../utils/classNameUtil';

export interface HeaderLink {
	label: string;
	url: string;
	external?: boolean;
}

interface HeaderProps {
	title: string;
	links: HeaderLink[];
	className: string;
	onNavToggle?: (isOpen: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ title, links, className, onNavToggle }) => {
	const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

	useEffect(() => {
		setIsNavOpen(false);
	}, [location]);

	const handleClickNavToggle = () => {
		const newNavState = !isNavOpen;
		setIsNavOpen(newNavState);
		if (onNavToggle) onNavToggle(newNavState);
	};

	return (
		<header className="header">
      		<div className={classNames('header__content', className, isNavOpen && "open")}>
				<a href="/" className="header__logo--container layered-grid">
					<h1>{title}</h1>
				</a>

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
