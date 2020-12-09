const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

let Employee = require('./lib/Employee');
const util = require('util');

const writeFileAsync = util.promisify(fs.appendFile);





function promptNewEmp() {
    return inquirer.prompt([
        {
            // Title   
            type: 'input',
            message: 'What is your name?',
            name: 'name',
        },
        //  Description of Project
        {
            type: 'input',
            message: 'What is your email?.',
            name: 'email',
        },

        // Installation
        {
            type: 'input',
            message: 'What is your office number?',
            name: 'officeNumber',
        },
        // Usage
        {
            type: 'input',
            message: 'what is your github username?',
            name: 'github',
        },

        {
            type: 'list',
            message: 'Which employee would you like to add next?',
            name: 'role',
            choices: ['Manager', 'Intern', 'Engineer', 'I do not want to add further employees']
        },

  

    ]);
}




const generateEmp = (data) => {
    return `

${data.name}


${data.email}


${data.officeNumber}


${data.github}


${data.role}

`;   
};

  
promptNewEmp()

    .then((data) => writeFileAsync(path.join(__dirname, '/templates', 'main.html'), generateEmp(data))
    .then(() => console.log('Success!'))
    .catch((err) => console.error(err)));
  



