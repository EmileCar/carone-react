import React, { ReactNode, useEffect, useState } from 'react';
import Paginator from './Paginator';
import Column, { ColumnProps } from './Column';
import Form from '../form/Form';
import Label from '../form/Label';
import Input from '../form/Input';
import Button from '../button/Button';
import { exportToExcel as exportToExcelFunction } from '../../utils/exportToExcel';
import { HoverEffect } from '../../configurations/HoverEffect';
import '../../styles/Table.css';

/**
 * The props for the Table component.
 */
interface TableProps<T> {
    /* The values to display in the table */
    values: T[];
    /* The number of rows to display per page */
    rows?: number;
    /* The responsive layout of the table */
    responsiveLayout?: 'stack' | 'scroll';
    /* A callback function to call when a row is clicked */
    onRowClick?: (row: T) => void;
    /* The message to display when there are no values */
    emptyMessage?: string;
    /* A function to filter the values based on a global search value */
    globalSearchFunction?: (value: string) => T[];
    /* If the table should have an export to excel button */
    exportToExcel?: boolean;
    /* A custom class name to apply to the table */
    className?: string;
    /* A custom style object to apply to the table */
    style?: React.CSSProperties;
    /* The columns to display in the table */
    children: ReactNode;
}

/**
 * A table component that can be customized with different props.
 *
 * @param {TableProps} props the props for the component
 * @returns {React.ReactElement} the table component
 */
const Table = <T,>(props: TableProps<T>): React.ReactElement => {
    const {
        values,
        rows = 10,
        responsiveLayout = 'stack',
        onRowClick,
        emptyMessage = 'Geen data gevonden',
        globalSearchFunction,
        exportToExcel,
        className = '',
        style,
        children,
    } = props;

    const [page, setPage] = useState(0);
    const [sortField, setSortField] = useState<keyof T | string | null>(null);
    const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
    const [paginatedData, setPaginatedData] = useState<T[]>([]);
    const [filteredData, setFilteredData] = useState<T[]>([]);
    const [totalPages, setTotalPages] = useState(0);
    const [globalSearchValue, setGlobalSearchValue] = useState('');

    const sortData = (data: T[]) => {
        if (!sortField) return data;

        const columns = React.Children.toArray(children).filter((child): child is React.ReactElement<ColumnProps<T>> =>
            React.isValidElement(child) && child.type === Column
        );
        const column = columns.find(col => col.props.field === sortField);

        if (column && column.props.sortFunction) {
            return [...data].sort((a, b) => column.props.sortFunction!(a, b, sortDirection));
        }

        return [...data].sort((a, b) => {
            const valueA = (a as any)[sortField];
            const valueB = (b as any)[sortField];

            if (valueA < valueB) return sortDirection === 'asc' ? -1 : 1;
            if (valueA > valueB) return sortDirection === 'asc' ? 1 : -1;
            return 0;
        });
    };

    useEffect(() => {
        const totalPages = Math.ceil(filteredData.length / rows);
        setTotalPages(totalPages);
        const start = page * rows;
        const end = start + rows;
        const sortedData = sortData(filteredData);
        const paginatedData = sortedData.slice(start, end);
        setPaginatedData(paginatedData);
    }, [sortField, sortDirection, filteredData, rows, page]);

    const handleSort = (field: keyof T | string) => {
        if (sortField === field) {
            setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
        } else {
            setSortField(field);
            setSortDirection('asc');
        }
    };

    const handleRowClick = (row: T) => {
        if (onRowClick) {
            onRowClick(row);
        }
    };

    useEffect(() => {
        if (globalSearchFunction) {
            const filtered = globalSearchFunction(globalSearchValue);
            setPage(0);
            setFilteredData(filtered);
        } else {
            setFilteredData(values);
        }
    }, [globalSearchValue, values, globalSearchFunction]);

    const renderColumns = () => {
        return React.Children.map(children, (child, index) => {
            if (React.isValidElement(child) && child.type === Column) {
                const { field, header, sortable } = child.props;
                const isSortable = sortable;
                const handleClick = isSortable ? () => handleSort(field) : undefined;
                const sortIndicator = sortField === field ? (sortDirection === 'asc' ? '▲' : '▼') : '';

                return (
                    <th key={index} className={isSortable ? 'sortable' : ''} onClick={handleClick}>
                        {header}
                        {isSortable && (
                            <span className="sort-indicator">
                                {sortIndicator}
                            </span>
                        )}
                    </th>
                );
            }
            return null;
        });
    };

    const renderRows = () => {
        if (paginatedData.length === 0) {
            return (
                <tr>
                    <td colSpan={React.Children.count(children)} className="empty-message">
                        {emptyMessage}
                    </td>
                </tr>
            );
        }

        return paginatedData.map((row, rowIndex) => (
            <tr
                key={rowIndex}
                onClick={() => handleRowClick(row)}
                className={onRowClick ? 'hoverable' : ''}
            >
                {React.Children.map(children, (child, colIndex) => {
                    if (React.isValidElement(child) && child.type === Column) {
                        const { field, body } = child.props;
                        const fieldValue = field ? (row as any)[field] : undefined;

                        return (
                            <td key={colIndex}>
                                {body ? body(row, fieldValue) : fieldValue}
                            </td>
                        );
                    }
                    return null;
                })}
            </tr>
        ));
    };

    return (
        <>
            {(globalSearchFunction || exportToExcel) && (
                <Form className="registrationstable-header">
                    {globalSearchFunction && (
                        <Label text="Zoeken">
                            <Input
                                type="text"
                                name="search"
                                value={globalSearchValue}
                                onChange={(e) => setGlobalSearchValue(e.target.value)}
                                placeholder="Zoeken..."
                            />
                        </Label>
                    )}
                    {exportToExcel && (
                        <span className="exportToExcel__container">
                            <Button
                                icon="pi-file-export"
                                className="exportToExcel__button"
                                // hoverEffect={HoverEffect.Darken}
                                onClick={() => exportToExcelFunction(filteredData, "inschrijvingen")}
                            />
                            <span onClick={() => exportToExcelFunction(filteredData, "inschrijvingen")}>Exporteer naar Excel</span>
                        </span>
                    )}
                </Form>
            )}
            <div className={`${responsiveLayout} ${className}`} style={style}>
                <table className='carone-table'>
                    <thead>
                        <tr>{renderColumns()}</tr>
                    </thead>
                    <tbody>{renderRows()}</tbody>
                </table>
                <Paginator totalPages={totalPages} currentPage={page} onPageChange={setPage} />
            </div>
        </>
    );
};

export default Table;