#!/usr/bin/env node

const { execSync } = require('child_process');
const chalk = require('chalk');
const fs = require('fs');

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

// Optional Step: Add custom files (e.g., eslint, prettier configs)
// Add any additional files you want to automatically include in the project
fs.writeFileSync('caroneConfig.ts', `
import { CaroneConfig } from 'carone-react';

export const config: CaroneConfig = {
	colors: {
		main: 'blue',
		secondary: 'black',
		error: 'red',
		success: 'green',
		font: 'green',
		fontOnMain: 'white',
	},
	fonts: {
		mainFont: 'Verdana',
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
`);

console.log(chalk.green('Setup complete! Now run:'));
console.log(chalk.cyan(`cd ${projectName} && npm start`));
