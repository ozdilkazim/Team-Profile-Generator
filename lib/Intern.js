//The code to define and export the Intern class.  
const Employee = require("./Employee");

// This class should inherit from Employee.
// Extends
class Intern extends Employee {
    constructor(name, id, email, school){
        // calling employee constructor
        super(name, id, email);
        this.school = school;
    }
    getSchool(){
        return this.school;
    }
    getRole() {
        return 'Intern';
    }
}
// Export
module.exports = Intern;