import { useEffect, useState } from 'react';

/**
 * A type that represents the methods that can be called on a value.
 */
type ValueMethods = {
    notEmpty: () => boolean;
};

/**
 * A type that represents the values of a form with additional methods.
 */
type ExtendedValues<T> = T & ValueMethods;

/**
 * A hook that handles form state and submission.
 * @param initialValues The initial values of the form.
 * @param submitFunction The function to call when the form is submitted.
 * @returns An object with the form values, error states, value change handler, error setter, and form submission handler.
 */
const useForm = <T extends Record<string, any>>(initialValues: T, submitFunction: (request: T, method: "POST" | "PUT") => Promise<void>) => {
    const isNotEmpty = (values: T) => {
        return Object.values(values).some(value => value !== null && value !== undefined && value !== '');
    };

    const [values, setValues] = useState<T>(initialValues);
    const extendedValues: ExtendedValues<T> = {
        ...values,
        notEmpty: () => isNotEmpty(values),
    };

    const [errorStates, setErrorStates] = useState<any>([]);
    const [isPending, setIsPending] = useState<boolean>(false);

    const handleValueChange = (e: any) => {
        const { name, value } = e.target ? e.target : e;
        setValues((prevState) => ({
            ...prevState,
            [name]: value,
        }));

        setErrorStates((prevErrors: any) => ({
            ...prevErrors,
            [`${name}Error`]: '',
        }));
    };

    const changeValue = (name: string, value: any) => {
        setValues((prevState) => ({
            ...prevState,
            [name]: value,
        }));

        setErrorStates((prevErrors: any) => ({
            ...prevErrors,
            [`${name}Error`]: '',
        }));
    };

    const setErrors = (errors: any | null) => {
        setErrorStates(errors || []);
    };

    const handleSubmitForm = async (method: 'POST' | 'PUT', onSuccess?: () => void, onFailure?: (errors: any) => void) => {
        setIsPending(true);
        setErrors(null);
        try {
            await submitFunction(values, method);
            setIsPending(false);
            if (onSuccess) {
                onSuccess();
            }
        } catch (errors: any) {
            setTimeout(() => {
                let errorfields = errors.errorFields ?? {};
                errorfields.general = errors.message;
                setErrors(errorfields);

                //if error.general and errorfields are empty, set general error to the message
                if (errors.message && Object.keys(errorfields).length === 0) {
                    setErrors({ error: "Something went wrong" });
                }

                setIsPending(false);
                if (onFailure) {
                    onFailure(errors);
                }
            }, 800);
        }
    };

    useEffect(() => {
        if (errorStates.general) {
            setErrorStates((prevErrors: any) => ({
                ...prevErrors,
                general: '',
            }));
        }
    }, [values]);

    return {
        values: extendedValues,
        errorStates,
        handleValueChange,
        setErrors,
        setValues,
        changeValue,
        handleSubmitForm,
        submitPending: isPending,
    };
};

export default useForm;