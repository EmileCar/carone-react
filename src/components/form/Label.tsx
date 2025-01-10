import React from "react";
import { useFormContext } from "../../contexts/FormContext";
import { classNames } from "../../utils/classNameUtil";
import { useConfig } from "../../contexts/CaroneContext";

/**
 * The props for the Label component.
 */
interface LabelProps {
    /** The display text of the label */
    text: string;
    /** The error message to display. If this is set, the label will be styled as an error */
    errorMessage?: string;
    /** If the field is required */
    required?: boolean;
    /** A custom class name to apply to the label */
    className?: string;
    /** A custom style object to apply to the label */
    style?: React.CSSProperties;
    /** The children components */
    children?: React.ReactNode;
}

/**
 * A label component that can be customized with different props.
 * This component needs to be used inside a Form component.
 *
 * @param {LabelProps} props the props for the component
 * @returns {React.ReactElement} the label component
 */
const Label: React.FC<LabelProps> = ({
    text,
    errorMessage,
    required,
    className = '',
    style,
    children,
}) => {
    const context = useConfig();
    const globalClassName = context.globalClassNames?.Label;
    useFormContext();

    return (
        <label className={classNames(
            "carone-label",
            className,
            errorMessage && "carone-error",
            globalClassName
        )}
            style={style}
        >
            <span>
                {text} {required && <span className="required">*</span>}
            </span>
            {children}
            {errorMessage && <small className="error-message">{errorMessage}</small>}
        </label>
    );
}

export default Label;