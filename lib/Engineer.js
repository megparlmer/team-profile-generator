const Employee = require('../lib/Employee');

class Engineer extends Employee {
    constructor(name, ID, email, github) {
        super(name, ID, email);
        this.github = 'marleywarrior123';
        this.role = 'Engineer'
    }

    getGithub() {
        return this.github;
    }
}

module.exports = Engineer;