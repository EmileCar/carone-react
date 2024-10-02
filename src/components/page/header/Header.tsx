import React, { createContext, useRef } from 'react';
import '../../../styles/Header.css';
import { useState } from "react";
import { classNames } from '../../../utils/classNameUtil';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useWindowResize } from '../../../hooks/useWindowResize';
import { usePageContext } from '../../../contexts/PageContext';
import { HeaderLinkProps } from './HeaderLink';
import HeaderRow from './HeaderRow';

export const HeaderContext = createContext(false);

/**
 * The props for the Header component.
 */
interface HeaderProps {
	/** The title of the header. This can be a string or a ReactNode */
	title?: string | React.ReactNode;
	/** The links to display in the header */
	links?: HeaderLinkProps[];
	/** A callback function to call when the navigation is toggled */
	onNavToggle?: (isOpen: boolean) => void;
	/** The position of the header, can be 'fixed', 'sticky', 'absolute', or 'relative' (default) */
	position?: 'fixed' | 'sticky' | 'absolute' | 'relative';
	/** If the header should be responsive at a certain width in px */
	responsiveAt?: number;
	/** The maximum width of the content. If not set, the default value of the CaroneConfig will be used */
	maxContentWidth?: number;
	/** A custom class name to apply to the header */
	className?: string;
	/** A custom class name for the links */
	linkClassName?: string;
	/** A custom class name for the wrapper */
	wrapperClassName?: string;
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
	position = 'relative',
	responsiveAt,
	maxContentWidth,
	className = '',
	linkClassName,
	wrapperClassName,
	style,
	children,
}) => {
	const isUsingChildren = !!children;
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

	return (
		<HeaderContext.Provider value={true}>
			<header
				className={classNames(
					'carone-header',
					className,
					(isResponsive) && 'carone-header__responsive'
				)}
				ref={headerRef}
				style={{
					position: position,
					...style,
			}}>
				{isUsingChildren
					?
						(() => {
							if (links) {
								console.warn('The "links" prop will not be used when children are provided.');
							}
							if (maxContentWidth) {
								console.warn('The "maxContentWidth" prop will not be used when children are provided.');
							}
							return children
						})()
					:
					<HeaderRow maxContentWidth={maxContentWidth} links={links} openNav={isNavOpen && isResponsive} linkClassName={linkClassName} className={wrapperClassName}>
						{title &&
							<div className="carone-header__title-container">
								{typeof title === 'string' ? <h1 className="header__title">{title}</h1> : title}
							</div>
						}
						<div className="carone-header__toggle-button-container">
							<span
								className={`bi ${isNavOpen ? 'bi-x-lg' : 'bi-list'} carone-header__toggle-button`}
								onClick={handleClickNavToggle}
								style={{ fontSize: 'var(--title-font-size)' }}
							/>
						</div>
					</HeaderRow>
				}
			</header>
		</HeaderContext.Provider>
  );
}

export default Header;
