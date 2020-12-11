let Employee = require('./Employee');


    class Manager extends Employee {
        constructor(name, email, officeNumber,id) {
            super(name, id, email);
            this.officeNumber = officeNumber;
           
        }
     getOfficeNumber() {
            return this.officeNumber;
        }
        getRole() {
            return "Manager";
        }
  
    }



module.exports = Manager;
