import React from 'react';
import { useFormContext } from '../../contexts/FormContext';
import { classNames } from '../../utils/classNameUtil';
import '../../styles/Form.css';

/**
 * The props for the Group component.
 */
interface GroupProps {
    /** A custom class name to apply to the group */
    className?: string;
    /** A custom style object to apply to the group */
    style?: React.CSSProperties;
    /** The children components */
    children: any;
}

/**
 * A group component that can be customized with different props.
 * This component needs to be used inside a Form component.
 *
 * @param {GroupProps} props the props for the component
 * @returns {React.ReactElement} the group component
 */
const Group: React.FC<GroupProps> = ({
    className = '',
    style,
    children
}) => {
    useFormContext();

    return (
        <div
            className={classNames('carone-form__group', className)}
            style={style}
        >
            {children}
        </div>
    );
}

export default Group;
