import React from "react";
import { useFormContext } from "../../contexts/FormContext";
import { classNames } from "../../utils/classNameUtil";
import { useConfig } from "../../contexts/CaroneContext";

/**
 * The props for the Input component.
 */
interface TextAreaProps {
    /** The number of rows for the textarea */
    rows?: number;
    /** The name of the input */
    name?: string;
    /** The value of the input. Only string and number are supported */
    value?: string | number;
    /** The callback function to call when the input value changes */
    onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    /** The callback function to call when the input loses focus */
    onBlur?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
    /** The placeholder text for the input */
    placeholder?: string;
    /** If the input should be disabled */
    disabled?: boolean;
    /** If the input should be focused when rendered */
    focus?: boolean;
    /** A custom class name to apply to the input */
    className?: string;
    /** A custom style object to apply to the input */
    style?: React.CSSProperties;
}

/**
 * An input component that can be customized with different props.
 * This component needs to be used inside a Form component.
 *
 * @param {TextAreaProps} props the props for the component
 * @returns {React.ReactElement} the input component
 */
const TextArea: React.FC<TextAreaProps> = ({
    rows,
    name,
    value = '',
    onChange,
    onBlur,
    placeholder,
    disabled,
    focus = false,
    className = '',
    style,
}) => {
    const context = useConfig();
    const globalClassName = context.globalClassNames?.Input;
    useFormContext();

    return (
        <textarea
            rows={rows}
            name={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            placeholder={placeholder}
            disabled={disabled}
            className={classNames("carone-input carone-textarea inherit-font", className, globalClassName)}
            autoFocus={focus}
            style={style}
        />
    );
}

export default TextArea;