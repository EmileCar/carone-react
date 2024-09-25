/**
 * Utility function to concatenate class names
 */
export const classNames = (...classes: (string | undefined | boolean)[]) => {
    return classes.filter(Boolean).join(' ');
};