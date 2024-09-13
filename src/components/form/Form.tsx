import React, { useState } from 'react';
import FormContext from '../../contexts/FormContext';
import { classNames } from '../../utils/classNameUtil';
import '../../styles/Form.css';
import { useWindowResize } from '../../hooks/useWindowResize';

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
    /** The width at which the form should wrap */
    wrapAt?: number;
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
    wrapAt = 0,
    children
}) => {
    const [wrapped, setWrapped] = useState<boolean>(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit && onSubmit();
    }

    useWindowResize(() => {
        if(wrapAt > 0) {
            setWrapped(window.innerWidth <= wrapAt);
        }
    });

    return (
        <FormContext.Provider value={true}>
            <form
                className={classNames(
                    'carone-form',
                    className,
                    disabled && 'disabled',
                    wrapped && 'carone-form__wrapped'
                )}
                onSubmit={handleSubmit}
            >
                {children}
            </form>
        </FormContext.Provider>
    );
}

export default Form;
