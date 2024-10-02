import React from 'react';
import { classNames } from '../../../utils/classNameUtil';
import { Link } from 'react-router-dom';

/**
 * A link in the header.
 */
export interface HeaderLinkProps {
	/** The label of the link */
	label: string;
	/** The URL of the link */
	url: string;
	/** If the link should open in a new tab */
	openInNewTab?: boolean;
    /** A custom class name to apply to the link */
    className?: string;
    /** A custom style object to apply to the link */
    style?: React.CSSProperties;
}

/**
 * A link in the header that can be customized with different props.
 *
 * @param {HeaderLink} props the props for the component
 * @returns {React.ReactElement} the header link component
 */
const HeaderLink: React.FC<HeaderLinkProps> = ({
    label,
    url,
    openInNewTab,
    className,
    style,
}) => {
    return (
        <li className="carone-header__menu-item">
            <Link
                className={classNames("carone-header__menu-item-link", className)}
                style={style}
                to={url}
                {...(openInNewTab && { target: '_blank' })}
            >
                {label}
            </Link>
        </li>
    );
}

export default HeaderLink;