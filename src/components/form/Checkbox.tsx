import React from "react";
import "./form.css";

interface CheckboxProps {
    name: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    checked: boolean;
    customClassName?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({
    name,
    onChange,
    checked,
    customClassName = ""
}) => {
    return (
        <>
            <input
                id="customCheckbox"
                className={`checkbox ${customClassName}`}
                onChange={onChange}
                type="checkbox"
                name={name}
                checked={checked}
            />
        </>
    );
}

export default Checkbox;
