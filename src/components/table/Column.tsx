import React from 'react';

/**
 * The props for the Column component.
 */
export interface ColumnProps<T> {
    field: keyof T | string;
    header: string;
    body?: (rowData: T, fieldValue: any) => React.ReactNode;
    sortable?: boolean;
    sortFunction?: (a: T, b: T, sortDirection: 'asc' | 'desc') => number;
}

/**
 * A column component that represents a column of a Table. It can be customized with different props.
 */
export const Column = <T,>({ field, header, body, sortable, sortFunction }: ColumnProps<T>) => {
    return null;
}
