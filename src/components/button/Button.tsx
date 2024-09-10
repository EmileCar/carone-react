import React from 'react';
import styled from 'styled-components';
import LoadingSpinner from '../loading/LoadingSpinner';
import { classNames } from '../../utils/classNameUtil';

interface ButtonProps {
    text?: string;
    onClick: () => void;
    fullWidth?: boolean;
    disabled?: boolean;
    uppercase?: boolean;
    customClassName?: string;
    hover?: boolean;
    darken?: boolean;
    round?: boolean;
    inverted?: boolean;
    submit?: boolean;
    icon?: string;
    pending?: boolean;
}

const StyledButton = styled.button<ButtonProps>`
  background-color: var(--main-color);
  padding: var(--s0);
  border-radius: ${(props) => (props.round ? '50px' : 'var(--border-radius-md)')};
  color: white;
  text-decoration: none;
  transition: transform 0.1s ease-in-out, filter 0.1s ease-in-out;
  display: inline-block;
  border: none;
  outline: none;
  cursor: pointer;
  text-align: center;
  min-height: 55px;
  box-shadow: 1px 0px 15px rgb(197, 197, 197);
  width: ${(props) => (props.fullWidth ? '100%' : props.submit ? '50%' : 'auto')};
  margin-top: ${(props) => (props.submit ? 'var(--s1)' : '0')};
  background-color: ${(props) => (props.inverted ? 'white' : 'var(--main-color)')};
  color: ${(props) => (props.inverted ? 'var(--main-color)' : 'white')};
  font-weight: ${(props) => (props.uppercase ? 'bold' : 'normal')};
  text-transform: ${(props) => (props.uppercase ? 'uppercase' : 'none')};

  &:hover {
    transform: ${(props) => (props.hover ? 'scale(1.05)' : 'none')};
    filter: ${(props) => (props.darken ? 'brightness(0.8)' : 'none')};
  }
`;

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  fullWidth = false,
  disabled = false,
  uppercase = false,
  customClassName = '',
  hover = false,
  darken = false,
  round = false,
  inverted = false,
  submit = false,
  icon,
  pending = false,
}) => {

  return (
    <StyledButton
      onClick={onClick}
      fullWidth={fullWidth}
      disabled={disabled}
      uppercase={uppercase}
      hover={hover}
      darken={darken}
      round={round}
      inverted={inverted}
      submit={submit}
      className={customClassName}
    >
      {pending ? <LoadingSpinner color='white' size={22}/> : (
        <>
          {icon && <span className={`pi ${icon}`}></span>}
          {text}
        </>
      )}
    </StyledButton>
  );
};

export default Button;
