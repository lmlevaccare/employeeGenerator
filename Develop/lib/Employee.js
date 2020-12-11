// TODO: Write code to define and export the Employee class



// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

employee = require('./../app');

// hmwk-mainFolder/employeeGenerator/Develop/app.js
class Employee {
 
    constructor(name, id, email,) {
    
        this.name = name;
        this.email = email;
        this.id = id;
     
    }
    
    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return "Employee"
      
    }

  
}

 
    



module.exports = Employee;



