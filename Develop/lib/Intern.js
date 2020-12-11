// // TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
let Employee = require('./employee');


    class Intern extends Employee {
        constructor(name, email, school, id) {
            super(name, id, email );
            this.school = school;
       
        }
     getSchool() {
            
                return this.school;
            
        }
        
        getRole() {
      
                return 'Intern';
            }
        
};



      
   module.exports = Intern;


// intern.getSummaryInt()