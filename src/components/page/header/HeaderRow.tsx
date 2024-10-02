import React , { ReactNode, useContext } from "react";
import { HeaderContext } from "./Header";
import { classNames } from "../../../utils/classNameUtil";
import HeaderLink, { HeaderLinkProps } from "./HeaderLink";

interface HeaderRowProps {
    links?: HeaderLinkProps[];
    maxContentWidth?: number;
    justifyContent?: 'flex-start' | 'center' | 'flex-end';
    openNav?: boolean;
    className?: string;
    linkClassName?: string;
    style?: React.CSSProperties;
    children?: ReactNode;
}

const HeaderRow: React.FC<HeaderRowProps> = ({
    links,
    maxContentWidth,
    justifyContent = 'space-between',
    openNav,
    className,
    linkClassName,
    style,
    children,
}) => {
    const isInsideHeader = useContext(HeaderContext);

    if (!isInsideHeader) {
        throw new Error('HeaderRow can only be used inside a Header component');
    }

    return (
        <div className={
            classNames(
                'carone-header__row',
                className,
            )}
            style={style}
        >
            <div className={
                classNames("carone-header__content")}
                style={{ maxWidth: maxContentWidth, justifyContent: justifyContent }}
            >
                {children}
                {links &&
                    <nav className={classNames("carone-header__navbar", openNav ? 'carone-header__navOpen' : '')}>
                        <ul className="carone-header__menu-items">
                            {links.map((link, index) => (
                                <HeaderLink key={index} {...link} className={linkClassName} />                           ))}
                        </ul>
                    </nav>
                }
            </div>
        </div>
    );
};

export default HeaderRow;