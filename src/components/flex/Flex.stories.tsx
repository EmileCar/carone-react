// src/components/button/Button.stories.tsx
import React from 'react';
import Flex from './Flex';

export default {
    title: 'Flex',
    component: Flex as React.FC,
};

export const SimpleFlex = () => (
    <Flex>
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
    </Flex>
);