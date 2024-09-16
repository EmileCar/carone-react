
import React, { ReactNode } from "react";
import { classNames } from "../../../utils/classNameUtil";
import "../../../styles/Page.css";

/**
 * The props for the SectionTitle component.
 */
interface SectionTitleProps {
    /** The title of the section */
    title: string;
    /** Additional content to apply below the title */
    children?: ReactNode;
    /** The maximum width of the component */
    maxWidth?: number;
    /** If the title should have a border below */
    showBorder?: boolean;
    /** A custom class name to apply to the component */
    className?: string;
    /** If the title should be uppercase */
    uppercase?: boolean;
}

/**
 * A section title component that displays a title with an optional border and content below.
 * This component can be customized with different props.
*/
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