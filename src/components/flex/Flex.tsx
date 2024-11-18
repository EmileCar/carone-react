import React from 'react';
import { classNames } from '../../utils/classNameUtil';
import { Size } from '../../configurations/CaroneConfig';
import '../../styles/Flex.css';

/**
 * The props for the Flex component.
 */
interface FlexProps {
    /** The justify content */
    justifyContent?: 'start' | 'end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
    /** The align items */
    alignItems?: 'start' | 'end' | 'center' | 'stretch' | 'baseline';
    /** The flex direction */
    direction?: 'row' | 'column';
    /** The gap between the flex items */
    gap?: number | string | Size;
    /** A custom class name to apply to the flex */
    className?: string;
    /** A custom style object to apply to the flex */
    style?: React.CSSProperties;
    /** The children components */
    children: React.ReactNode;
}

/**
 * A flex component that can be customized with different props.
 *
 * @param {FlexProps} props the props for the component
 * @returns {React.ReactElement} the flex component
 */
const Page: React.FC<FlexProps> = ({
    justifyContent,
    alignItems,
    direction,
    gap,
    className= '',
    style,
    children,
}) => {
    return (
        <div
            className={classNames(
                'carone-flex',
                className,
            )}
            style={{
                justifyContent: justifyContent,
                alignItems: alignItems,
                flexDirection: direction,
                gap: gap,
                ...style,
            }}
        >
            {children}
        </div>
    );
};

export default Page;