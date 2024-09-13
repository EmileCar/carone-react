import React from "react";
import { useFormContext } from "../../contexts/FormContext";
import { classNames } from "../../utils/classNameUtil";
import '../../styles/Form.css';

/**
 * The props for the Label component.
 */
interface LabelProps {
    /** The display text of the label */
    text: string;
    /** A custom class name to apply to the label */
    className?: string;
    /** The error message to display. If this is set, the label will be styled as an error */
    errorMessage?: string;
    /** If the field is required */
    required?: boolean;
    /** The children components */
    children?: React.ReactNode;
}

/**
 * A label component that can be customized with different props.
 * This component needs to be used inside a Form component.
 */
const Label: React.FC<LabelProps> = ({
    text,
    className = '',
    children,
    errorMessage,
    required
}) => {
    useFormContext();

    return (
        <label className={classNames(
            "carone-label",
            className,
            errorMessage && "carone-error"
        )}>
            {text} {required && <span className="required">*</span>}
            {children}
            {errorMessage && <small className="error-message">{errorMessage}</small>}
        </label>
    );
}

export default Label;