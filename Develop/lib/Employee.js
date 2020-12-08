// TODO: Write code to define and export the Employee class

const inquirer = require('inquirer');
const util = require('util');
let fs = require('fs');
const assert = require('assert');

class Employee {
    constructor(fullname, github, email, college, id, role, officenum) {
    
        this.fullname = fullname;
        this.github = github;
        this.email = email;
        this.college = college;
        this.id = id;
        this.role = role;
        this.officenum = officenum;
    }
    getSummary() {
       return (`${this.fullname} ${this.github} ${this.email} ${this.college} ${this.id} ${this.role} 
        ${this.officenum}`)
   
    }
}
function generate() {
    let intern = new Employee();
    console.log(intern);
    let engineer = new Employee();
    let manager = new Employee();
    
    if (manager) {
        return (`${this.fullname} ${this.officenum}${this.email} ${this.colllege} ${this.id}`);
           
    }
    else if (engineer) {
        return (`${this.fullname} ${this.officenum} ${this.email} ${this.github} ${this.id}`);

    }
    if (intern) {
        return (`${this.fullname} ${this.github} ${this.email} ${this.college} ${this.id} `);
           
    }

    else {
        console.log('you are broken');
    }
 

}

      


generate()

module.exports = Employee;