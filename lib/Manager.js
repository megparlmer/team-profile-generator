const Employee = require('../lib/Employee');

class Manager extends Employee {
    constructor(name, ID, email, officeNumber) {
        super(name, ID, email);
        this.officeNumber = officeNumber;
        this.role = 'Manager';
    }

    getRole() {
        return this.role;
    }
}

module.exports = Manager;