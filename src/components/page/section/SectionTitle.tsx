
import React, { ReactNode } from "react";
import { classNames } from "../../../utils/classNameUtil";
import { useConfig } from "../../../contexts/CaroneContext";

/**
 * The props for the SectionTitle component.
 */
interface SectionTitleProps {
    /** The title of the section */
    title: string;
    /** The maximum width of the component */
    maxWidth?: number;
    /** If the title should have a border below */
    showBorder?: boolean;
    /** If the title should be uppercase */
    uppercase?: boolean;
    /** A custom class name to apply to the component */
    className?: string;
    /** A custom class name for the border */
    borderClassName?: string;
    /** A custom style object to apply to the component */
    style?: React.CSSProperties;
    /** Additional content to apply below the title */
    children?: ReactNode;
}

/**
 * A section title component that displays a title with an optional border and content below.
 * This component can be customized with different props.
 *
 * @param {SectionTitleProps} props the props for the component
 * @returns {React.ReactElement} the section title component
*/
const SectionTitle: React.FC<SectionTitleProps> = ({
    title,
    maxWidth,
    showBorder = true,
    uppercase = false,
    className = '',
    borderClassName = '',
    style,
    children,
}) => {
    const config = useConfig();
    const globalClassName = config.globalClassNames?.SectionTitle?.className;
    const globalBorderClassNames = config.globalClassNames?.SectionTitle?.borderClassName;

    return (
        <div className={classNames(
                "carone-section-title__container",
                className,
                globalClassName
            )}
            style={{
                maxWidth: maxWidth ? `${maxWidth}px` : '100%',
                ...style
            }}
        >
            <div className="carone-section-title">
                <h2 style={{ textTransform: uppercase ? 'uppercase' : 'none' }}>{title}</h2>
                {showBorder && <div className={classNames("carone-section-title__border", borderClassName, globalBorderClassNames)}></div>}
            </div>
            {children}
        </div>
    );
};

export default SectionTitle;