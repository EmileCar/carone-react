#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

const _componentName = process.argv[2];

if (!_componentName) {
    console.log(chalk.red('Please provide a component name.'));
    process.exit(1);
}

const componentName = _componentName.charAt(0).toUpperCase() + _componentName.slice(1);

const componentDir = path.join('src', 'components', componentName.charAt(0).toLowerCase() + componentName.slice(1));
const componentTsxFile = path.join(componentDir, `${componentName}.tsx`);
const componentCssFile = path.join(componentDir, `${componentName}.css`);

fs.mkdirSync(componentDir, { recursive: true });

const componentTsxContent = `
import React from 'react';
import './${componentName}.css';

const ${componentName} = () => {
    return (
        <div>
            <h1>Welcome to the ${componentName} component!</h1>
            <p>This is the ${componentName} component. You can edit it in <code>src/components/${componentName}/${componentName}.tsx</code>.</p>
        </div>
    );
};

export default ${componentName};
`;

fs.writeFileSync(componentTsxFile, componentTsxContent);

const componentCssContent = '';

fs.writeFileSync(componentCssFile, componentCssContent);

console.log(chalk.green(`Component ${componentName} created successfully!`));
