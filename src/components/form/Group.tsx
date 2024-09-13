import React from 'react';
import { useFormContext } from '../../contexts/FormContext';
import { classNames } from '../../utils/classNameUtil';
import '../../styles/Form.css';

/**
 * The props for the Group component.
 */
interface GroupProps {
    className?: string;
    children: any;
}

/**
 * A group component that can be customized with different props.
 * This component needs to be used inside a Form component.
 */
const Group: React.FC<GroupProps> = ({ className = "", children }) => {
    useFormContext();

    return (
        <div className={classNames('carone-form__group', className)}>
            {children}
        </div>
    );
}

export default Group;
