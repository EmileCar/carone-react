import React from "react";
import { useFormContext } from "../../contexts/FormContext";
import { classNames } from "../../utils/classNameUtil";
import '../../styles/Form.css';

/**
 * The props for the Input component.
 */
interface InputProps {
    /** The type of the input */
    type: string;
    /** The name of the input */
    name?: string;
    /** The value of the input. Only string and number are supported */
    value?: string | number;
    /** The callback function to call when the input value changes */
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    /** The callback function to call when the input loses focus */
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
    /** The placeholder text for the input */
    placeholder?: string;
    /** If the input should be disabled */
    disabled?: boolean;
    /** If the input should be focused when rendered */
    focus?: boolean;
    /** The step value for the input. Only number type inputs support this */
    step?: number;
    /** A custom class name to apply to the input */
    className?: string;
    /** A custom style object to apply to the input */
    style?: React.CSSProperties;
}

/**
 * An input component that can be customized with different props.
 * This component needs to be used inside a Form component.
 *
 * @param {InputProps} props the props for the component
 * @returns {React.ReactElement} the input component
 */
const Input: React.FC<InputProps> = ({
    type,
    name,
    value = '',
    onChange,
    onBlur,
    placeholder,
    disabled,
    focus = false,
    step,
    className = '',
    style,
}) => {
    useFormContext();

    return (
        <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            placeholder={placeholder}
            disabled={disabled}
            className={classNames("carone-input inherit-font", className)}
            autoFocus={focus}
            step={step}
            style={style}
        />
    );
}

export default Input;