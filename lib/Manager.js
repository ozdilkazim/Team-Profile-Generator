// The code to define and export the Manager class. 
const Employee = require("./Employee");

// This class should inherit from Employee.
// Extends
class Manager extends Employee {
    costructor(name, id, email, officeNumber){
        // calling employee constructor
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getRole() {
        return `Manager`;
    }
}
// Export
module.exports = Manager;