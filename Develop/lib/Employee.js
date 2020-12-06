// TODO: Write code to define and export the Employee class

const inquirer = require('inquirer');
// var prompts = new Rx.Subject();
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
        console.log(`${this.fullname} ${this.github} ${this.email} ${this.colllege} ${this.id} ${this.role} 
        ${this.officenum}`)
    }
}

module.exports = Employee;



