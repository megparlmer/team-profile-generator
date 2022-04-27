const Employee = require('../lib/Employee');

class Intern extends Employee {
    constructor(name, ID, email, school) {
        super(name, ID, email);
        this.school = 'Survey Corps';
        this.role = 'Intern';
    }

    getSchool() {
        return this.school;
    }
}

module.exports = Intern;