import React, { useState } from 'react';
import FormContext from '../../contexts/FormContext';
import { classNames } from '../../utils/classNameUtil';
import '../../styles/Form.css';
import { useWindowResize } from '../../hooks/useWindowResize';
import { useConfig } from '../../contexts/CaroneContext';

/**
 * The props for the Form component.
 */
interface FormProps {
    /** The callback function to call when the form is submitted */
    onSubmit?: () => void;
    /** If the form should be disabled */
    disabled?: boolean;
    /** The width at which the form should wrap */
    wrapAt?: number;
    /** A custom class name to apply to the form */
    className?: string;
    /** A custom style object to apply to the form */
    style?: React.CSSProperties;
    /** The children components */
    children: any;
}

/**
 * A form component that can be customized with different props.
 *
 * @param {FormProps} props the props for the component
 * @returns {React.ReactElement} the form component
 */
const Form: React.FC<FormProps> = ({
    onSubmit,
    disabled = false,
    wrapAt = 0,
    className = '',
    style,
    children,
}) => {
    const context = useConfig();
    const globalClassName = context.globalClassNames?.Form;

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
                    wrapped && 'carone-form__wrapped',
                    globalClassName,
                )}
                onSubmit={handleSubmit}
                style={style}
            >
                {children}
            </form>
        </FormContext.Provider>
    );
}

export default Form;
