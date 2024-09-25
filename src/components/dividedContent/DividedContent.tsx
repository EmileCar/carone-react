import React, { useState } from 'react';
import { useWindowResize } from '../../hooks/useWindowResize';
import { classNames } from '../../utils/classNameUtil';
import '../../styles/DividedContent.css';

/**
 * The props for the DividedContent component.
 */
interface DividedContentProps {
    /** The content to display on the left side */
    leftContent: React.ReactNode;
    /** The content to display on the right side */
    rightContent: React.ReactNode;
    /** The width at which the content should wrap */
    wrapAt?: number;
    /** A custom class name to apply to the component */
    className?: string;
    /** A custom style object to apply to the component */
    style?: React.CSSProperties;
}

/**
 * A component that divides the content into two parts.
 *
 * @param {DividedContentProps} props the props for the component
 * @returns {React.ReactElement} the divided content component
 */
const DividedContent: React.FC<DividedContentProps> = ({
    leftContent,
    rightContent,
    wrapAt = 0,
    className = '',
    style,
}) => {
    const [wrapped, setWrapped] = useState<boolean>(false);

    useWindowResize(() => {
        if(wrapAt > 0) {
            setWrapped(window.innerWidth <= wrapAt);
        }
    });

    return (
        <div
            className={classNames('carone-divided-content', wrapped && 'carone-divided-content__wrapped', className)}
            style={style}
        >
            <div className="carone-divided-content__left">
                {leftContent}
            </div>
            <div className="carone-divided-content__right">
                {rightContent}
            </div>
        </div>
    );
};

export default DividedContent;