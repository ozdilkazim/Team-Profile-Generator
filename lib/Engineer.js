// The code to define and export the Engineer class.  
const Employee = require("./Employee");

// This class should inherit from Employee.
// Extends
class Engineer extends Employee {
    costructor(name, id, email, github){
        // calling employee constructor
        super(name, id, email);
        this.github = github;
    }
    getGitHub(){
        return this.github;
    }
    getRole() {
        return `Engineer`;
    }
}
// Export
module.exports = Engineer;