// src/components/table/Table.stories.tsx
import React from 'react';

import Table from './Table';
import { Column } from './Column';

export default {
    title: 'Table',
    component: Table as React.FC,
};


export const SimpleTable = () => {
    const data = [
        { id: 1, name: 'John Doe', age: 25 },
        { id: 2, name: 'Jane Doe', age: 22 },
        { id: 3, name: 'Tom Smith', age: 32 },
    ];

    return <Table values={data}>
            <Column header="ID" field="id" />
            <Column header="Name" field="name" />
            <Column header="Age" field="age" />
        </Table>;
}