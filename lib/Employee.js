// The code to define and export the Employee class
class Employee {
    costructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getname() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return `Employee`;
    }
}
// Export
module.exports = Employee;