
import React, { ReactNode } from "react";
import { classNames } from "../../../utils/classNameUtil";
import "../../../styles/Page.css";

interface SectionTitleProps {
    title: string;
    children?: ReactNode;
    maxWidth?: number;
    showBorder?: boolean;
    className?: string;
    uppercase?: boolean;
}


const SectionTitle: React.FC<SectionTitleProps> = ({
    title,
    children,
    maxWidth,
    showBorder = true,
    className = '',
    uppercase = false
}) => {
    return (
        <div className={classNames(
                "carone-section-title__container",
                className
            )}
            style={{
                maxWidth: maxWidth ? `${maxWidth}px` : '100%'
            }}
        >
            <div className="carone-section-title">
                <h2 style={{ textTransform: uppercase ? 'uppercase' : 'none' }}>{title}</h2>
                {showBorder && <div className="carone-section-title__border"/>}
            </div>
            {children}
        </div>
    );
};

export default SectionTitle;