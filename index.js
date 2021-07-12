const inquirer = require('inquirer');
const fs = require('fs');
const { title } = require('process');

//inquirer to generate questions
inquirer.prompt(
  [
      {
        type: 'input',
        message: "What's the project title?",
        name: 'title',
        validate: (value)=>{
          if(value) {
            return true
          } else {
            return 'I need a value to continue.'}},
      },
      {
        type: 'input',
        message: "How would you describe your project?",
        name: 'description',
        validate: (value) => {
          if(value) {
            return true
          } else {
            return 'I need a value to continue.'}},
      },
      {
        type: 'input',
        message: "Do you have any installation instructions?",
        name: 'installation',
        validate: (value) => {
          if(value) {
            return true
          } else {
            return 'I need a value to continue.'}},
      },            
      {
        type: 'input',
        message: "how do you use your app?",
        name: 'usage',
        validate: (value) => {
          if(value) {
            return true
          } else {
            return 'I need a value to continue.'}},
      },
      {
        // List of license
        type: 'list',
        message: "What license did you use?",
        name: 'license',
        choices: ['The MIT License', 'The GPL License', 'Apache License', 'GNJ License', 'N/A'],
        validate: (value) => {
          if(value) {
            return true
          } else {
            return 'I need a value to continue.'}},
      },
      {
        type: 'input',
        message: "Do you have any contribution guidelines?",
        name: 'contribution',
        validate: (value) => {
          if(value) {
            return true
          } else {
            return 'I need a value to continue.'}},
      },
      {
        type: 'input',
        message: "Do you have any test instructions?",
        name: 'tests',
        validate: (value) => {
          if(value) {
            return true
          } else {
            return 'I need a value to continue.'}},
      },
      {
        type: 'input',
        message: 'Do you have any questions?',
        name: 'questions',
        validate: (value) => {
          if(value) {
            return true
          } else {
            return 'I need a value to continue.'}},
      },
      {
      type: 'input',
        message: 'Github: ',
        name: 'git',
        validate: (value) => {
          if(value) {
            return true
          } else {
            return 'I need a value to continue.'}},
      },
      {
      type: 'input',
        message: 'E-mail: ',
        name: 'email',
        validate: (value) => {
          if(value) {
            return true
          } else {
            return 'I need a value to continue.'}},
      }
  ]    
// these are my variables for each section.
).then(({
  title,
  description,
  installation,
  usage,
  license,
  contribution,
  tests,
  git,
  email,
})=>{
// template to be used.
const template =`# ${title}
#Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contribution](#contribution)
* [Tests](#tests)
* [Questions](#questions)
## Description
${description}
## Installation
${installation}
## Usage
${usage}
## License
${license}
## Contribution
${contribution}
## Tests
${tests}

## Questions
'This is my contact information!'
* Github : ${git}
* E-mail : ${email}`;
// Function to create our readme using FS.
createNewFile(title, template);
}
);
// creating our createNewFile function
function createNewFile(fileName, data){
  //FS
  fs.writeFile(`./${fileName.toLowerCase().split(' ').join('')}.md`,data,(err) => {
      if(err) {
        console.log(err);
      }
      console.log('Your README has been generated!');
  })
}
