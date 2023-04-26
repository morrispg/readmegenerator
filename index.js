// TODO: Include packages needed for this application

const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [

	{
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please provide a brief description of your project:'
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What are the installation instructions for your project?'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'How should your project be used?'
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'What are the guidelines for contributing to your project?'
  },
  {
    type: 'input',
    name: 'tests',
    message: 'What tests can be run for your project?'
  },
  {
    type: 'input',
    name: 'license',
    message: 'What license is your project under?'
  }

];

// TODO: Create a function to write README file
const fs = require ('fs');
function writeToFile(fileName, data) {
	fs.writeFile(filename, content, (err) => {
    if (err) throw err;
    console.log('README file created successfully!');
  });
}


function init() {
	inquirer.prompt(questions).then(res => console.log(res))



}

init();

//const filename = 'README.md';
//const content = '# My README\n\nThis is the content of my README file.';
//createREADME(filename, content);
