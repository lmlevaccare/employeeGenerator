// TODO: Write code to define and export the Employee class

// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

// Employee = require('./lib/Employee');


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

// let intern1 = new Intern('intern')

// console.log(intern1);
module.exports = Employee;
module.exports = Intern;
module.exports = Engineer;
module.exports = Manager;
