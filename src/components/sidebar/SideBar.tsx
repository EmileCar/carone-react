import React, { ReactNode } from 'react';
import '../../styles/SideBar.css';
import { classNames } from '../../utils/classNameUtil';

interface SideBarProps {
    visible: boolean;
    onToggleClick: () => void;
    width?: string | number;
    className?: string;
    style?: React.CSSProperties;
    children?: ReactNode;
}

const SideBar: React.FC<SideBarProps> = ({
    visible = true,
    onToggleClick,
    width = '250px',
    className,
    style,
    children,
}) => {
    return (
        <div className={classNames(
                'carone-sidebar',
                className,
                visible ? 'carone-sidebar__visible' : ''
            )}
            style={{ ...style, width}}
        >
            <div className="carone-sidebar__header">
                <button className="toggle-button" onClick={onToggleClick}>
                    <i className={`bi ${visible ? 'bi-chevron-left' : 'bi-chevron-right'}`}></i>
                </button>
            </div>
            <div className="sidebar-content">
                {children}
            </div>
        </div>
    );
}

export default SideBar;
