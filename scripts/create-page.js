#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

const _pageName = process.argv[2];

if (!_pageName) {
    console.log(chalk.red('Please provide a page name.'));
    process.exit(1);
}

// Step 1: Split the page name by '/' to handle nested pages
const pageParts = _pageName.split('/').map(part => part.charAt(0).toUpperCase() + part.slice(1));
const pageName = pageParts[pageParts.length - 1]; // The last part is the actual page component name

// Create the directory path based on nested structure
const pageDir = path.join('src', 'pages', ...pageParts.slice(0, -1).map(part => part.toLowerCase()), pageName.toLowerCase());
const pageTsxFile = path.join(pageDir, `${pageName}.tsx`);
const pageCssFile = path.join(pageDir, `${pageName}.css`);

// Step 2: Create a new directory for the page (including nested directories)
fs.mkdirSync(pageDir, { recursive: true });

// Step 3: Create the .tsx file
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
                <p>This is the ${pageName} page. You can edit it in <code>src/pages/${pageParts.join('/')}/${pageName}.tsx</code>.</p>
            </Section>
        </PageLayout>
    );
};

export default ${pageName};
`;

fs.writeFileSync(pageTsxFile, pageTsxContent);

// Step 4: Create the .css file
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

// Step 5: Update App.tsx to include the new route
const appTsxPath = path.join('src', 'App.tsx');

let appTsxContent = fs.readFileSync(appTsxPath, 'utf-8');

// Create the import path based on the nested structure
const importPath = `./pages/${pageParts.slice(0, -1).map(part => part.toLowerCase()).join('/')}/${pageName.toLowerCase()}/${pageName}`;
const importStatement = `import ${pageName} from '${importPath}';\n`;

if (!appTsxContent.includes(importStatement)) {
  appTsxContent = importStatement + appTsxContent;
}

// Create the route path based on the full nested structure
const routePath = `/${pageParts.map(part => part.toLowerCase()).join('/')}`;
const routeLine = `<Route path="${routePath}" element={<${pageName} />} />`;

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

console.log(chalk.green(`Page ${pageName} created successfully at ${pageDir}`));
console.log(chalk.green(`Route for ${pageName} added to App.tsx as ${routePath}.`));
