// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

// let Employee = require("./Employee");
 

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
Employee = require('./lib/Employee');


class Employee {
    constructor(name, id, email,role) {
    
        this.name = name;
        this.email = email;
        this.id = id;
        this.role = role;
    }
    
    getName() {
        return `${this.name}`;
    }

    getId() {
        return `${this.id}`;
    }
    getEmail() {
        return `${this.email}`;
    }

    getRole() {
        return `${this.role}`;
    }

}


// Employee.prototype.getRole = function () {
//     return `${this.role} Manager `;
// };

 
class Manager extends Employee {
    constructor(name, id, email,role,officeNumber) {
        super (name, id, email,role);
        this.officeNumber = officeNumber;
          this.role = role;
    }
    getNumber() {
        return `${this.officeNumber}`;
    }
     getRole() {
        return `${this.role}`;
    }
  
}

class Engineer extends Employee {
        constructor(name, id, email,role,github) {
        super (name, id, email,role);
            this.github = github;
            this.role = role;
        }
     gitHub() {
        return `${this.github}`;
    }
    getRole() {
        return `${this.role}`;
    }
}


class Intern extends Employee {
    constructor(name, id, email, role, school) {
        super(name, id, email, role);
        this.school = school;
        this.role = role;
    }
    gitHub() {
        return `${this.school}`;
    }
    getRole() {
        return `${this.role}`;
    }
    
}

   let employeeData =
 inquirer.prompt([
    


        {

            type: 'input',
            message: 'What is your managers name?',
            name: `${this.fullname}`,
             
        },

        {
            type: 'input',
            message: 'What is your managers Id Number?',
            name: `${this.id} `,
            
        },

        {
            type: 'input',
            message: 'What is your managers email?',
            name: `${this.email}`,
                 
        },

        {
            type: 'input',
            message: 'What is your managers office number?',
            name: `${this.officenum}`,
           
        },

        {
            type: 'list',
            message: 'Which type of team member would you like to add?',
            name: 'addEmployee',
            choices: ['Manager', 'Intern', 'Engineer', 'I do not want to add further employees']

        }
        
    ])

    function rendor() {
empGenerate= []
for (let i = 0; i < employeeData.length; i++) {
empGenerate.push(employeeData[i]);

console.log(empGenerate.join(''))
}    

}

rendor()