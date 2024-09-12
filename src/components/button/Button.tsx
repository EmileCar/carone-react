import React from 'react';
import '../../styles/Button.css';
import LoadingSpinner from '../loading/LoadingSpinner';
import { classNames } from '../../utils/classNameUtil';

interface ButtonProps {
    /** The text to display on the button */
    text?: string;
    /** If the text should be uppercase */
    uppercase?: boolean;
    /** The callback function to call when the button is clicked */
    onClick: () => void;
    /** If the button should take up the full width of its container */
    fullWidth?: boolean;
    /** If the button should be disabled */
    disabled?: boolean;
    /** A custom class name to apply to the button */
    className?: string;
    /** If the button should have one or more hover effects */
    hoverEffect?: string;
    /** The amount of px to make the button round */
    borderRadius?: number;
    /** The icon of a button. This will a put before the text. */
    icon?: string;
    /** If the state is pending, a loading icon will be shown instead of the text. */
    pending?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    text = "Default button",
    uppercase = false,
    onClick,
    fullWidth = false,
    disabled = false,
    className = '',
    hoverEffect = '',
    borderRadius = 0,
    icon = '',
    pending= false
}) => {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        onClick();
    };

    return (
        <button
            onClick={handleClick}
            className={classNames(
                'carone-button inherit-font',
                className,
                hoverEffect,
            )}
            disabled={disabled}
            style={{
                ...(borderRadius && { borderRadius: `${borderRadius}px` }),
                ...(fullWidth && { width: '100%' }),
                ...(uppercase && { textTransform: 'uppercase' }),
            }}
        >
            {pending ? <LoadingSpinner color='white' size={22}/> : (
            <>
                {icon && <span className={`pi ${icon}`}></span>}
                {text}
            </>
            )}
        </button>
    );
};

export default Button;
