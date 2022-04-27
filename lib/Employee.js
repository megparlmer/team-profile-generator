class Employee {
    constructor(name, ID, email) {
        this.name = name;
        this.ID = ID;
        this.email = email;
        this.role = 'Employee';
    }

    getDescription() {
        return `${this.name} has an ID of ${this.ID} and their email is ${this.email}.`;
    };

    getName() {
        return this.name;
    };

    getId() {
        return this.ID;
    };

    getEmail() {
        return this.email;
    };

    getRole() {
        return this.role;
    };
};

module.exports = Employee;