const fs = require('fs');
const inquirer = require('inquirer');
var path = require('path');
const process = require('process'); 
const generateMarkdown = require('./utils/generateMarkdown');

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter your project title. (Required)',
        validate: projectName => {
            if (projectName) {
                return true;
            } else {
                console.log('Please enter your project title!');
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of your project.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What were the steps required to install your project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use.'
    },
    {
        type: 'input',
        name: 'credits',
        message: 'List your collaborators, if any, with links to their GitHub profiles.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license',
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public 2.0', 'Apache 2.0', 'MIT', 'Unlicense']
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Add guidlines for how you want other developers to contribute to your project.',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide tests for your application and examples on how to run them.',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username.',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Provide an email where people can contact you.',
    }
]

// function to write README file
const writeToFile = (fileName, data) => {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// function to initialize program
const init = () => {
    inquirer.prompt(questions)
    .then((inquirerResponses) => {
        console.log('Generating README.md...');
        writeToFile("README.md", generateMarkdown({...inquirerResponses}));
        console.log('Success')
    })
};

// function call to initialize program
init()
