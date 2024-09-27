import React from 'react';
import '../../styles/Button.css';
import LoadingSpinner from '../loading/LoadingSpinner';
import { classNames } from '../../utils/classNameUtil';
import { HoverEffect } from '../../configurations/HoverEffect';
import { useConfig } from '../../contexts/CaroneContext';
import { withSharedProps } from '../../configurations/SharedProps';

/**
 * The props for the Button component.
 */
interface ButtonProps {
    /** The text to display on the button */
    text?: string;
    /** If the text should be uppercase */
    uppercase?: boolean;
    /** The callback function to call when the button is clicked */
    onClick: () => any;
    /** The type of the button */
    type?: 'button' | 'submit' | 'reset';
    /** If the button should take up the full width of its container */
    fullWidth?: boolean;
    /** If the button should be disabled */
    disabled?: boolean;
    /** If the button should have one or more hover effects. Can be a single effect, an array of effects, or a custom string (your classname of the effect). You can use the `HoverEffect` enum to get the available effects. */
    hoverEffect?: HoverEffect | (HoverEffect | string)[] | string;
    /** The amount of px to make the button round */
    borderRadius?: number;
    /** The icon of a button. This will a put before the text. */
    icon?: string;
    /** If the state is pending, a loading icon will be shown instead of the text. */
    pending?: boolean;
    /** If the default action of the button should be prevented */
    preventDefault?: boolean;
    /** A custom class name to apply to the button */
    className?: string;
    /** A custom style object to apply to the button */
    style?: React.CSSProperties;
}

/**
 * A button component that can be customized with different props.
 *
 * @param {ButtonProps} props the props for the component
 * @returns {React.ReactElement} the button component
 */
const Button: React.FC<ButtonProps> = ({
    text = "Default button",
    uppercase = false,
    onClick,
    type = 'button',
    fullWidth = false,
    disabled = false,
    hoverEffect = '',
    borderRadius = 0,
    icon = '',
    pending= false,
    preventDefault = false,
    className = '',
    style,
}) => {
    const context = useConfig();

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (preventDefault) e.preventDefault();
        onClick();
    };

    const hoverEffectClasses = Array.isArray(hoverEffect) ? hoverEffect.join(' ') : hoverEffect;

    return (
        <button
            onClick={handleClick}
            className={classNames(
                'carone-button inherit-font',
                className,
                hoverEffectClasses,
            )}
            type={type}
            disabled={disabled}
            style={{
                ...(borderRadius && { borderRadius: `${borderRadius}px` }),
                ...(fullWidth && { width: '100%' }),
                ...(uppercase && { textTransform: 'uppercase' }),
                ...style,
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

/**
 * A button component that can be customized with different props.
 *
 * @param {ButtonProps & SharedProps} props the props for the component
 * @returns {React.ReactElement} the button component
 */
export default withSharedProps(Button);
