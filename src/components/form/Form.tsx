import React from 'react';
import FormContext from '../../contexts/FormContext';
import { classNames } from '../../utils/classNameUtil';
import '../../styles/Form.css';

/**
 * The props for the Form component.
 */
interface FormProps {
    /** The function to call when the form is submitted */
    onSubmit?: () => void;
    /** A custom class name to apply to the form */
    className?: string;
    /** If the form should be disabled */
    disabled?: boolean;
    /** The children components */
    children: any;
}

/**
 * A form component that can be customized with different props.
 */
const Form: React.FC<FormProps> = ({
    onSubmit,
    className = '',
    disabled = false,
    children
}) => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit && onSubmit();
    }

    return (
        <FormContext.Provider value={true}>
            <form
                className={classNames(
                    'carone-form',
                    className,
                    disabled && 'disabled'
                )}
                onSubmit={handleSubmit}
            >
                {children}
            </form>
        </FormContext.Provider>
    );
}

export default Form;
