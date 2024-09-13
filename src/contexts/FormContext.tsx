import React, { createContext, useContext } from 'react';

/**
 * The context for form-related components.
 * This context is used to check if these components are used inside a Form component.
 */
const FormContext = createContext<boolean | null>(null);

/**
 * useFormContext is a hook that provides the context of the Form component.
 * The context doesn't contain any useful information, it's just a way to check if the component is used inside a Form component.
 */
export const useFormContext = () => {
    const context = useContext(FormContext);
    if (context === null) {
        throw new Error('Form-related components <Group, Label, Input, CheckBox, AutoComplete> must be used within a Form component');
    }
    return context;
};

export default FormContext;