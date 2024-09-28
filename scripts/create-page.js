#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

const _pageName = process.argv[2];

if (!_pageName) {
    console.log(chalk.red('Please provide a page name.'));
    process.exit(1);
}

const pageName = _pageName.charAt(0).toUpperCase() + _pageName.slice(1);

const pageDir = path.join('src', 'pages', pageName.toLowerCase());
const pageTsxFile = path.join(pageDir, `${pageName}.tsx`);
const pageCssFile = path.join(pageDir, `${pageName}.css`);

// Step 1: Create a new directory for the page
fs.mkdirSync(pageDir, { recursive: true });

// Step 2: Create the .tsx file
const pageTsxContent = `
import React from 'react';
import './${pageName}.css';
import PageLayout from '../../layouts/Layout';
import { Section } from 'carone-react';

const ${pageName} = () => {
    return (
        <PageLayout>
            <Section centered>
                <h1>Welcome to the ${pageName} page!</h1>
                <p>This is the ${pageName} page. You can edit it in <code>src/pages/${pageName}/${pageName}.tsx</code>.</p>
            </Section>
        </PageLayout>
    );
};

export default ${pageName};
`;

fs.writeFileSync(pageTsxFile, pageTsxContent);

// Step 3: Create the .css file
const pageCssContent = `
.${pageName.toLowerCase()} {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100%;
    font-size: var(--font-size-large);
    background-color: var(--main-color);
    color: var(--font-on-main-color);
}

.${pageName.toLowerCase()} h1 {
    font-size: var(--font-size-title);
}
`;

fs.writeFileSync(pageCssFile, pageCssContent);

// Step 4: Update App.tsx to include the new route
const appTsxPath = path.join('src', 'App.tsx');

let appTsxContent = fs.readFileSync(appTsxPath, 'utf-8');

// Insert the new import for the page if not already present
const importStatement = `import ${pageName} from './pages/${pageName.toLowerCase()}/${pageName}';\n`;
if (!appTsxContent.includes(importStatement)) {
  appTsxContent = importStatement + appTsxContent;
}

// Insert the new route
const routeLine = `<Route path="/${pageName.toLowerCase()}" element={<${pageName} />} />`;

if (!appTsxContent.includes(routeLine)) {
  const routesEndIndex = appTsxContent.indexOf('</Routes>');
  if (routesEndIndex !== -1) {
    appTsxContent =
      appTsxContent.slice(0, routesEndIndex) +
      `  ${routeLine}\n` +
      appTsxContent.slice(routesEndIndex);
  }
}

// Save the updated App.tsx
fs.writeFileSync(appTsxPath, appTsxContent);

console.log(chalk.green(`Page ${pageName} created successfully!`));
console.log(chalk.green(`Route for ${pageName} added to App.tsx.`));
