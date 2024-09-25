import React from 'react';

/**
 * The props for the Column component.
 */
export interface ColumnProps<T> {
    /** The field of the column */
    field: keyof T | string;
    /** The header of the column */
    header: string;
    /** The body of the column */
    body?: (rowData: T, fieldValue: any) => React.ReactNode;
    /** If the column is sortable */
    sortable?: boolean;
    /** A custom sort function to use */
    sortFunction?: (a: T, b: T, sortDirection: 'asc' | 'desc') => number;
}

/**
 * A column component that represents a column of a Table. It can be customized with different props.
 *
 * @param {ColumnProps} props the props for the component
 * @returns {React.ReactElement} the column component
 */
const Column = <T,>({ field, header, body, sortable, sortFunction }: ColumnProps<T>) => {
    return null;
}

export default Column;
