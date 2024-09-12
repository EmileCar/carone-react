import React from 'react';
import '../../styles/Button.css';
import LoadingSpinner from '../loading/LoadingSpinner';
import { classNames } from '../../utils/classNameUtil';

interface ButtonProps {
    text?: string;
    onClick: () => void;
    fullWidth?: boolean;
    disabled?: boolean;
    uppercase?: boolean;
    className?: string;
    hover?: boolean;
    darken?: boolean;
    round?: boolean;
    inverted?: boolean;
    submit?: boolean;
    icon?: string;
    pending?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    text,
    onClick,
    fullWidth = false,
    disabled = false,
    uppercase = false,
    className = '',
    hover = false,
    darken = false,
    round = false,
    inverted = false,
    submit = false,
    icon,
    pending = false,
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
                hover && 'hover',
                darken && 'darken',
                uppercase && 'uppercase',
                inverted && 'inverted',
                submit && 'submit',
                fullWidth && 'full-width'
            )}
            disabled={disabled}
            style={{ borderRadius: round ? '50px' : undefined }}
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
