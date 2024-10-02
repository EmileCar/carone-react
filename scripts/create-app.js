#!/usr/bin/env node

const { execSync } = require('child_process');
const chalk = require('chalk');
const fs = require('fs');
const path = require('path');

const runCommand = (command) => {
  try {
    execSync(command, { stdio: 'inherit' });
  } catch (error) {
    console.error(`Error occurred while running command: ${command}`, error);
    process.exit(1);
  }
};

const projectName = process.argv[2];

if (!projectName) {
  console.log(chalk.red('Please provide a project name.'));
  process.exit(1);
}

console.log(chalk.green(`Creating a new React project named ${projectName}...`));

// Step 1: Create a new React app with the TypeScript template
runCommand(`npx create-react-app ${projectName} --template typescript`);

// Step 2: Change directory to the newly created project
process.chdir(projectName);

// Step 3: Install carone-react and additional dependencies
console.log(chalk.green('Installing carone-react, react-router-dom and other dependencies...'));
runCommand('npm install carone-react react-router-dom');

// Step 4: Add custom files

console.log(chalk.green('Adding custom files...'));

// Step 4.1: Create CaroneConfig.ts
const caroneConfigContent = `
import { CaroneConfig } from 'carone-react';

export const config: CaroneConfig = {
	colors: {
		main: '#007ced',
		secondary: '#fff',
		error: 'red',
		success: 'green',
		font: '#007ced',
		fontOnMain: '#fff',
	},
	fonts: {
		mainFont: 'Arial',
		titleFont: 'Arial',
		sizes: {
			small: '0.8rem',
			default: '1rem',
			large: '1.5rem',
			subtitle: '1.8rem',
			title: '3rem',
		}
	},
	sizes: {
		padding: {
			xxs: '0.1rem',
			xs: '0.2rem',
			sm: '0.5rem',
			md: '1rem',
			lg: '1.5rem',
			xl: '2rem',
			xxl: '3rem',
		},
		borderRadius: {
			small: '0.2rem',
			medium: '0.5rem',
			large: '1rem',
		}
	},
	maxContentWidth: '1200px'
};
`;
fs.writeFileSync(path.join('src', 'caroneConfig.ts'), caroneConfigContent);

// Step 4.2: Create custom index.tsx and index.css
const indexTsxContent = `
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'carone-react/resources/reset.css'
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
`;

const indexCssContent = `
body {
    font-family: var(--main-font);
    line-height: 1.2;
}
`;
fs.writeFileSync(path.join('src', 'index.tsx'), indexTsxContent);
fs.writeFileSync(path.join('src', 'index.css'), indexCssContent);

// Step 4.3: Create custom App.tsx
const appTsxContent = `
import { CaroneProvider } from 'carone-react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import { config } from './caroneConfig';

const App = () => {

  return (
    <CaroneProvider config={config}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </CaroneProvider>
  );
}

export default App;
`;
fs.writeFileSync(path.join('src', 'App.tsx'), appTsxContent);

// Step 4.4: Create custom layout
const layoutDir = path.join('src', 'layouts');
fs.mkdirSync(layoutDir, { recursive: true });

const layoutTsxContent = `
import { Header, Page, PageContent } from "carone-react";

interface PageLayoutProps {
    children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {

    return (
        <Page>
            <Header title="Carone React" responsiveAt={700}/>
            <PageContent>
                {children}
            </PageContent>
        </Page>
    );
};

export default PageLayout;
`;
fs.writeFileSync(path.join(layoutDir, 'Layout.tsx'), layoutTsxContent);

// Step 4.5: Create custom Home page
const pagesDir = path.join('src', 'pages', 'home');
fs.mkdirSync(pagesDir, { recursive: true });

const homeTsxContent = `
import React from 'react';
import './Home.css';
import PageLayout from '../../layouts/Layout';
import { Section } from 'carone-react';

const Home = () => {
    return (
        <PageLayout>
            <Section centered>
                <h1>Welcome to your new Carone React App!</h1>
                <div>
                    <p>All necessary configurations have been set up for you. You can start building your app right away.</p>
                    <p>This is the Homepage, you can edit it in <code>src/pages/Home/Home.tsx</code></p>
                    <p>A PageLayout has also been created for you in <code>src/layouts/Layout.tsx</code></p>
                </div>
                <p>To customize your app, please change the values of the <code>config</code> object in <code>src/caroneConfig.ts</code></p>
            </Section>
        </PageLayout>
    );
};

export default Home;
`;

const homeCssContent = `
.home {
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

.home h1 {
    font-size: var(--font-size-title);
}
`;
fs.writeFileSync(path.join(pagesDir, 'Home.tsx'), homeTsxContent);
fs.writeFileSync(path.join(pagesDir, 'Home.css'), homeCssContent);

// remove unnecessary files
fs.unlinkSync(path.join('src', 'reportWebVitals.ts'));
fs.unlinkSync(path.join('src', 'logo.svg'));
fs.unlinkSync(path.join('src', 'App.test.tsx'));
fs.unlinkSync(path.join('src', 'App.css'));
fs.unlinkSync(path.join('src', 'setupTests.ts'));

console.log(chalk.green('Setup complete! Now run:'));
console.log(chalk.cyan(`cd ${projectName} && npm start`));
